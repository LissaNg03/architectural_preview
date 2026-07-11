/** @format */

const add_design_service = require("../../services/service_helpers/add_design_service");

const add_design_controller = async (req, res) => {
	try {
		const design = await add_design_service(req);

		return res.status(201).json({
			success: true,
			message: "Design uploaded successfully",
			data: design,
		});
	} catch (error) {
		console.error(error);

		return res.status(500).json({
			success: false,
			message: "Error uploading design",
			error: error.message,
		});
	}
};

module.exports = add_design_controller;
