const express = require("express");
const { protect, admin } = require("../middleware/authMiddleware.js");
const {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
} = require("../controllers/orderController.js");

const router = express.Router();

// router.post("/", addOrderItems);

// router.get("/mine", getMyOrders);

// router.get("/:id", getOrderById);

// router.put("/:id/pay", updateOrderToPaid);

// router.put("/:id/deliver", updateOrderToDelivered);

// router.get("/", getOrders);

router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);
router.route("/mine").get(protect, getMyOrders);
router.route("/:id").get(protect, admin, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route("/:id/deliver").put(protect, admin, updateOrderToDelivered);

module.exports = router;
