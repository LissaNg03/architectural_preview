/** @format */
const express = require("express");

//CONTROLLERS
//RETURNS FIRST 4 DESIGNS AND ADMIN DATA
const index_controller = require("../../controllers/index_controller.js");

//RETURNS ALL DESIGNS TO ALL-DESIGNS PAGE
const all_designs_controller = require("../../controllers/all_designs_controller.js.js");

//RETURNS DESIGN DATA OF A SPECIFIC
const design_controller = require("../../controllers/design_controller.js");

const index_router = express.Router();

index_router.get("/", index_controller);
index_router.get("/all-designs", all_designs_controller);

index_router.get("/design/:id", design_controller);

module.exports = index_router;
