const router = require("express").Router();
const carController = require("../controllers/car.controller");

router.get("/", carController.getAll);
router.get("/:id", carController.getbyID);
router.post("/", carController.add);
router.delete("/:id", carController.deletebyid);
router.get("/getobj/:search", carController.search);

module.exports = router;
