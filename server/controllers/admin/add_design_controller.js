/** @format */

const addDesignService = require("../../services/add_design_service");
const add_design_controller = async (req, res) => {
	try {
		const result = await addDesignService(req);

		return res.status(201).json({
			success: true,
			message: "Design Added Successfully",
			data: result,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "ERROR UPLOADING", error: error.message });
	}
};

module.exports = add_design_controller;
