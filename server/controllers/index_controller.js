/** @format */
const DesignModel = require("../models/design_model");
const AdminModel = require("../models/admin_model");

const index_controller = async (req, res) => {
	try {
		const [designs, adminData] = await Promise.all([
			DesignModel.find().limit(4),
			AdminModel.find().select(
				"-email_secret -password -username -email -singletonKey -_id",
			),
		]);

		res.json({
			designs,
			adminData,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Failed to fetch data" });
	}
};

module.exports = index_controller;
