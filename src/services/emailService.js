const nodemailer = require("nodemailer");

const sendMessage = async (code, toMail, subject = "Confirm Code") => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "memmedovh5@gmail.com",
      pass: "gviqnrtxschlgyzx",
    },
  });
  let info = await transporter.sendMail({
    from: "memmedovh5@gmail.com",
    to: toMail,
    subject: subject,
    text: "Hello word",
    html: `<code style='fontsize: 32px;'><b>${code}</b> </code>`,
  });
  return info;
};

module.exports = {
  sendMessage: sendMessage,
};
