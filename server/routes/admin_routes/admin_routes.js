/** @format */

const express = require("express");
const upload = require("../../utils/multer");
const admin_controller = require("../../controllers/admin/admin_controller");
const update_design_controller = require("../../controllers/admin/update_design_controller");
const delete_design_controller = require("../../controllers/admin/delete_design_controller");
const add_design_controller = require("../../controllers/admin/add_design_controller");
const admin_data_controller = require("../../controllers/admin/admin_data_controller");
const credentials_controller = require("../../controllers/admin/credentials_controller");

const admin_routes = express.Router();
//ADMIN WEBSITE METADATA
admin_routes.post("/", admin_controller);
admin_routes.get("/", admin_data_controller);
//ADMIN ADDS DESIGN
admin_routes.post("/add_design", add_design_controller);
admin_routes.post("/credentials", credentials_controller);

//ADMIN UPDATES DESIGN
admin_routes.put("/edit_designs/edit/:id", update_design_controller);

//ADMIN DELETES DESIGN
admin_routes.delete("/edit_designs", delete_design_controller);

module.exports = admin_routes;
