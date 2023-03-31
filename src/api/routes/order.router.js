const orderController = require("../controllers/order.controller");
const router = require("express").Router();

router.get("/", orderController.getAll);
router.post("/create", orderController.create);

module.exports = router;
