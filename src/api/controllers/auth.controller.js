const userModel = require("../../models/userModel");
const { tokenGenerate } = require("../../services/tokenGenerate");
const { confirmCodeSendMail } = require("../../services/userService");

const authController = {
  confirmEmail: async (req, res, next) => {
    try {
      console.log("confirm email tryyyyy");
      const confirmCode = req.body.confirmCode;
      const email = req.body.email;
      const userdb = await userModel.findOne({
        email: email,
      });
      if (!userdb) {
        throw new Error("email not found");
      }

      let userConfirm = await userModel.findOne({
        email: email,
        confirmCode: confirmCode,
      });
      if (!userConfirm) {
        throw new Error("confoirm code error");
      }
      const confirmDate = new Date(userConfirm.confirmCodeExpDate);
      const nowDate = new Date();
      if (confirmDate - nowDate < 0) {
        throw new Error("Confirm code expired");
      }
      userdb.isConfirm = true;
      const token = tokenGenerate({
        email: userdb.email,
        username: userdb.username,
      });

      userdb.save();
      res.json({
        token: token,
        user: {
          email: userdb.email,
          username: userdb.username,
        },
      });
    } catch (error) {
      console.log("confir email catchhhh");
      next(error);
    }
  },
  login: async (req, res, next) => {
    try {
      const Loginemail = req.body.email;
      console.log(Loginemail);
      console.log("Login email ");
      const userDb = await userModel.findOne().where({
        email: Loginemail,
      });
      console.log(userDb);
      console.log("user dbbbb ");

      // if (!userDb) {
      //   throw new Error("user not found");
      // }
      // if (!userDb.isConfirm) {
      //   throw new Error("email not confirmed");
      // }
      const confirmobj = await confirmCodeSendMail(Loginemail);
      console.log("confrirm obj");
      // console.log(confirmobj);
      userDb.confirmCode = confirmobj.confirmCode;
      userDb.confirmCodeExpDate = confirmobj.expDate;
      userDb.save();
      res.json({
        ok: true,
        statusCode: 200,
        email: Loginemail,
      });
    } catch (error) {
      console.log("login catch");
      next(error);
    }
  },
};

module.exports = authController;
