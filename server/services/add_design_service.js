/** @format */

const DesignModel = require("../models/design_model");
const { uploadToCloudinary, resolveSingle, resolveMultiple } = require("./service_helpers/design_helpers")
const add_design_service = async (req) => {
	const {
		floor_plans = [],
		video = [],
		thumbnail = [],
		front_view = [],
		left_view = [],
		right_view = [],
		back_view = [],
	} = req.files || {};

	// UPLOAD ALL FILES IN PARALLEL
	const [
		uploadedVideo,
		uploadedThumbnail,
		uploadedFloorPlans,
		uploadedFrontView,
		uploadedLeftView,
		uploadedRightView,
		uploadedBackView,
	] = await Promise.all([
		resolveSingle(video, "video"),
		resolveSingle(thumbnail),
		resolveMultiple(floor_plans),
		resolveSingle(front_view),
		resolveSingle(left_view),
		resolveSingle(right_view),
		resolveSingle(back_view),
	]);

	// console.log(uploadedFloorPlans);

	// SAVE TO DB
	const saveToDB = await DesignModel.create({
		name: req.body.name,
		price: req.body.price,
		category: req.body.category,
		video: uploadedVideo,
		thumbnail: uploadedThumbnail,

		floor_plans: [...uploadedFloorPlans],

		images: [
			{ title: "front_view", ...uploadedFrontView },
			{ title: "left_view", ...uploadedLeftView },
			{ title: "right_view", ...uploadedRightView },
			{ title: "back_view", ...uploadedBackView },
		],

		quotation: {
			length: req.body.length,
			width: req.body.width,
			fullSquareMeter: req.body.length * req.body.width,
			no_of_rooms: req.body.no_of_rooms,
			no_of_bathrooms: req.body.no_of_bathrooms,
			porch: req.body.porch,
			balcony: req.body.balcony,
			garage: req.body.garage,
			description: req.body.description,
		},
	});
};

module.exports = add_design_service;
