const router = require("express").Router();
const carController = require("../controllers/car.controller");

router.get("/", carController.getAll);
router.get("/:id", carController.getbyID);
router.post("/", carController.add);

module.exports = router;
