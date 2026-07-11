/** @format */
const DesignModel = require("../../models/design_model");
const cloudinary = require("../../utils/cloudinary");

const delete_design_controller = async (req, res) => {
	try {
		const { design_id } = req.body;

		if (!design_id) {
			return res.status(400).json({ message: "design_id is required" });
		}

		// 1. GET DESIGN FIRST (IMPORTANT)
		const design = await DesignModel.findById(design_id);

		if (!design) {
			return res.status(404).json({ message: "Design not found" });
		}

		const { video, thumbnail, floor_plans, images } = design;

		// 2. DEL FROM CLOUDINARY (WITH CORRECT RESOURCE TYPES)

		// console.log("VIDEO:",  video.public_id);

		// console.log("THUMBNAIL:",  thumbnail.public_id);

		// images.forEach((img) =>
		// 	console.log("IMAGE:",  img.public_id),
		// );

		// floor_plans.forEach((fp) =>
		// 	console.log("FLOOR PLAN:",  fp.public_id),
		// );

		const deleteOperations = [];

		// VIDEO (IMPORTANT: resource_type = video)
		if (video?.public_id) {
			deleteOperations.push(
				cloudinary.uploader.destroy(video.public_id, {
					resource_type: "video",
					invalidate: true,
				}),
			);
		}

		// THUMBNAIL (image)
		if (thumbnail?.public_id) {
			deleteOperations.push(
				cloudinary.uploader.destroy(thumbnail.public_id, {
					resource_type: "image",
					invalidate: true,
				}),
			);
		}

		// FLOOR PLANS (images array)
		if (floor_plans?.length) {
			floor_plans.forEach((fp) => {
				if (fp?.public_id) {
					deleteOperations.push(
						cloudinary.uploader.destroy(fp.public_id, {
							resource_type: "image",
							invalidate: true,
						}),
					);
				}
			});
		}

		// IMAGES (images array)
		if (images?.length) {
			images.forEach((img) => {
				if (img?.public_id) {
					deleteOperations.push(
						cloudinary.uploader.destroy(img.public_id, {
							resource_type: "image",
							invalidate: true,
						}),
					);
				}
			});
		}

		// 3. EXECUTE ALL DELETES
		const results = await Promise.allSettled(deleteOperations);

		console.log("CLOUDINARY DELETE RESULTS:", results);

		// 4. DELETE FROM DATABASE LAST
		await DesignModel.findByIdAndDelete(design_id);

		return res.status(204).json({
			message: "Design deleted successfully",
			cloudinaryResults: results,
		});
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			message: "Error deleting design",
			error: error.message,
		});
	}
};

module.exports = delete_design_controller;
