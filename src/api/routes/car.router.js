const router = require("express").Router();
const carController = require("../controllers/car.controller");

router.get("/", carController.getAll);
router.get("/:id", carController.getbyID);

module.exports = router;
