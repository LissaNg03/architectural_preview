/** @format */

const DesignModel = require("../../models/design_model");
const buildDesignPayload = require("../service_helpers/build_design_payload");

const add_design_service = async (req) => {
	const payload = buildDesignPayload(req);

	const design = await DesignModel.create(payload);

	return design;
};

module.exports = add_design_service;
