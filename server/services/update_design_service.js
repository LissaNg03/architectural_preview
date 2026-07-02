/** @format */
const DesignModel = require("../models/design_model");
const {
	uploadMultiple,
	uploadSingle,
} = require("./service_helpers/design_helpers");
const update_design_service = async (req) => {
	const { id } = req.params;

	const existing = await DesignModel.findById(id);

	if (!existing) {
		return res.status(404).json({
			message: "Design not found",
		});
	}

	const files = req.files || {};

	const getExistingImage = (title) =>
		existing.images.find((i) => i.title === title);

	const [video, thumbnail, front, left, right, back] = await Promise.all([
		uploadSingle(files.video, "video", existing.video),

		uploadSingle(files.thumbnail, "image", existing.thumbnail),

		uploadSingle(files.front_view, "image", getExistingImage("front_view")),

		uploadSingle(files.left_view, "image", getExistingImage("left_view")),

		uploadSingle(files.right_view, "image", getExistingImage("right_view")),

		uploadSingle(files.back_view, "image", getExistingImage("back_view")),
	]);

	// =========================
	// SAFE IMAGE BUILDER
	// =========================
	const images = [];

	const pushImage = (title, data) => {
		if (data?.url && data?.public_id) {
			images.push({
				title,
				url: data.url,
				public_id: data.public_id,
			});
		}
	};

	pushImage("front_view", front);
	pushImage("left_view", left);
	pushImage("right_view", right);
	pushImage("back_view", back);

	// =========================
	// FLOOR PLANS
	// =========================
	let floorPlans = existing.floor_plans || [];

	if (files.floor_plans?.length) {
		floorPlans = await uploadMultiple(files.floor_plans);
	}

	// =========================
	// FINAL SAFE OBJECTS
	// =========================
	const finalVideo = video?.url && video?.public_id ? video : existing.video;

	const finalThumbnail =
		thumbnail?.url && thumbnail?.public_id ? thumbnail : existing.thumbnail;

	// =========================
	// UPDATE DB
	// =========================
	const updated = await DesignModel.findByIdAndUpdate(
		id,
		{
			name: req.body.name ?? existing.name,
			price: req.body.price ?? existing.price,
			category: req.body.category ?? existing.category,

			video: finalVideo,
			thumbnail: finalThumbnail,

			floor_plans: floorPlans,

			images: images.length ? images : existing.images,

			quotation: {
				length: req.body.length ?? existing.quotation.length,

				width: req.body.width ?? existing.quotation.width,

				fullSquareMeter:
					(req.body.length ?? existing.quotation.length) *
					(req.body.width ?? existing.quotation.width),

				no_of_rooms: req.body.no_of_rooms ?? existing.quotation.no_of_rooms,

				no_of_bathrooms:
					req.body.no_of_bathrooms ?? existing.quotation.no_of_bathrooms,

				porch: req.body.porch ?? existing.quotation.porch,

				balcony: req.body.balcony ?? existing.quotation.balcony,

				garage: req.body.garage ?? existing.quotation.garage,

				description: req.body.description ?? existing.quotation.description,
			},
		},
		{
			returnDocument: "after",
			runValidators: true,
		},
	);
};

module.exports = update_design_service;
