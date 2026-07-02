/** @format */
const DesignModel = require("../models/design_model");

const design_controller = async (req, res) => {
	try {
		const designId = req.params.id;

		const design = await DesignModel.findById(designId);

		// console.log(designId);

		res.json(design);
	} catch (error) {
		res.status(500).json({
			message: "ERROR UPLOADING",
			error: error.message,
		});
	}
};

module.exports = design_controller;
