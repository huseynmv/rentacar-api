const router = require("express").Router();
const carController = require("../controllers/car.controller");

router.get("/", carController.getAll);

module.exports = router;
