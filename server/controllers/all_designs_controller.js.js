/** @format */
const DesignModel = require("../models/design_model");

const all_designs_controller = (req, res) => {
	DesignModel.find()
		.then((result) => {
			res.json(result);
		})
		.catch((error) => console.log(error));
};

module.exports = all_designs_controller;
