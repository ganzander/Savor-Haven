const express = require("express");
const { getFood, createFood } = require("../controllers/foodItemController");
const { getFoodCategory } = require("../controllers/foodCategoryController");
const router = express.Router();

router.post("/createFood", createFood);

router.get("/foodItems", getFood);

router.get("/foodCategory", getFoodCategory);

module.exports = router;
