const mongoose = require("mongoose");
const foodCategory = require("../models/FoodCategory");

async function getFoodCategory(req, res) {
  const foodCategoryList = await foodCategory.find({});

  if (foodCategoryList.length !== 0) {
    console.log("foodCategory found");
    res.send({
      Success: "true",
      foodCategory: foodCategoryList,
    });
  } else {
    console.log("foodCategory not found");
    res.json({ Success: "false" });
  }
}

module.exports = { getFoodCategory };
