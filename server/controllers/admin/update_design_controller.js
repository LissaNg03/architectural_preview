/** @format */

const updateDesignService = require("../../services/update_design_service");

const update_design_controller = async (req, res) => {
	try {
		const result = await updateDesignService(req);

		return res.status(201).json({
			success: true,
			message: "Design updated successfully",
			data: result,
		});
	} catch (error) {
		console.error(error);

		return res.status(500).json({
			success: false,
			message: "ERROR UPDATING DESIGN",
			data: error,
		});
	}
};

module.exports = update_design_controller;
