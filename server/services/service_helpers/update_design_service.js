/** @format */

const DesignModel = require("../../models/design_model");
const buildDesignPayload = require("../service_helpers/build_design_payload");
const deleteAsset = require("../service_helpers/delete_replaced_assets");

const update_design_service = async (req) => {
	const { id } = req.params;

	const existing = await DesignModel.findById(id);

	if (!existing) {
		throw new Error("Design not found");
	}

	// Build final payload
	const payload = buildDesignPayload(req, existing);

	// =========================
	// THUMBNAIL
	// =========================

	await deleteAsset(existing.thumbnail, payload.thumbnail, "image");

	// =========================
	// VIDEO
	// =========================

	await deleteAsset(existing.video, payload.video, "video");

	// =========================
	// HOUSE IMAGES
	// =========================

	for (const oldImage of existing.images) {
		const replacement = payload.images.find(
			(img) => img.title === oldImage.title,
		);

		await deleteAsset(oldImage, replacement, "image");
	}

	// =========================
	// FLOOR PLANS
	// =========================

	if (req.body.floor_plans?.length) {
		for (const floorPlan of existing.floor_plans) {
			await deleteAsset(floorPlan);
		}
	}

	// =========================
	// UPDATE DATABASE
	// =========================

	const updated = await DesignModel.findByIdAndUpdate(id, payload, {
		returnDocument: "after",
		runValidators: true,
	});

	return updated;
};

module.exports = update_design_service;
