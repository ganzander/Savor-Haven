const mongoose = require("mongoose");
const user = require("../models/User");

async function postCart(req, res) {
  const { data, currentUserAuthToken } = req.body;

  const findUpdatingQuery = { tokens: { token: currentUserAuthToken } };

  const isEmailUpdated = await user.updateOne(findUpdatingQuery, {
    $set: { cart: data },
  });

  if (isEmailUpdated) {
    res.send({ Success: "true" });
  } else {
    res.send({ Success: "false" });
  }
}

async function getCartData(req, res) {
  const { currentUserAuthToken } = req.body;

  const findQuery = { tokens: { token: currentUserAuthToken } };
  const FoundEmail = await user.findOne(findQuery);

  if (FoundEmail) {
    res.send({ Success: "true", cartData: FoundEmail.cart });
  } else {
    res.send({ Success: "false", cart: [] });
  }
}

module.exports = { postCart, getCartData };
