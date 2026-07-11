/** @format */

const update_design_service = require("../../services/service_helpers/update_design_service");

const update_design_controller = async (req, res) => {
	try {
		const updatedDesign = await update_design_service(req);

		return res.status(200).json({
			success: true,
			message: "Design updated successfully",
			data: updatedDesign,
		});
	} catch (error) {
		console.error(error);

		if (error.message === "Design not found") {
			return res.status(404).json({
				success: false,
				message: error.message,
			});
		}

		return res.status(500).json({
			success: false,
			message: "Error updating design",
			error: error.message,
		});
	}
};

module.exports = update_design_controller;
