/** @format */
const mongoose = require("mongoose");

const tempSchema = new mongoose.Schema({
	name: String,
	secure_url: String,
	cloudinary_id: String,
});

const TempDesign = mongoose.model("TempDesign", tempSchema, "temp_Designs");

module.exports = TempDesign;
