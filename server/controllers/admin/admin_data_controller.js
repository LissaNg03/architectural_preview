/** @format */
const AdminModel = require("../../models/admin_model");

const admin_data_controller = async (req, res) => {
	try {
		const adminData = await AdminModel.find().select("-email_secret");

		res.json({
			adminData,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Failed to fetch data" });
	}
};

module.exports = admin_data_controller;
