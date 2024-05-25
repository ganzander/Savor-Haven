const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  sendOTP,
  changePassword,
  updateImage,
  payment,
} = require("../controllers/userController");
const {
  getOrdersOfUser,
  postOrder,
} = require("../controllers/ordersController");
const { postCart, getCartData } = require("../controllers/cartContoller");

router.post("/createuser", createUser);
router.post("/loginuser", loginUser);
router.post("/user/sendotp", sendOTP);
router.post("/cartItems", postCart);
router.post("/cartUser", getCartData);
router.post("/api/create-checkout-session", payment);
router.post("/order-Items", postOrder);
router.post("/orderedItems", getOrdersOfUser);
router.post("/changePassword", changePassword);
router.post("/uploadImage", updateImage);

module.exports = router;
