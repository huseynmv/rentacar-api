const userController = require("../controllers/user.controller");
const router = require("express").Router();

router.post("/register", userController.register);

module.exports = router;
