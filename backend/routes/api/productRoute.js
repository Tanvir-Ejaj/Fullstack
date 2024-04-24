const express = require("express");
const addCategoryController = require("../../controllers/addCategoryController");
const addSubCategoryController = require("../../controllers/addSubCategoryController");
const viewSubCategoryController = require("../../controllers/viewSubCategoryController");
const viewAllCategoryController = require("../../controllers/viewAllCategoryController");
const route = express.Router();

route.post("/createcategory", addCategoryController);
route.post("/createsubcategory", addSubCategoryController);

route.get("/viewallcategory", viewAllCategoryController);
route.get("/viewsubcategory", viewSubCategoryController);

module.exports = route;
