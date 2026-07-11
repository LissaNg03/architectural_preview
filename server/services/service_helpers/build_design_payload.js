/** @format */

const build_design_payload = (req, existing = null) => {
	// Merge uploaded house images with existing ones
	const uploadedImages = req.body.images ?? [];

	let mergedImages = uploadedImages;

	if (existing) {
		const existingImages = existing.images ?? [];

		mergedImages = existingImages.map((oldImage) => {
			return (
				uploadedImages.find((img) => img.title === oldImage.title) || oldImage
			);
		});
	}

	return {
		name: req.body.name ?? existing?.name,

		price: req.body.price ?? existing?.price,

		category: req.body.category ?? existing?.category,

		video: req.body.video ?? existing?.video,

		thumbnail: req.body.thumbnail ?? existing?.thumbnail,

		floor_plans: req.body.floor_plans?.length
			? req.body.floor_plans
			: (existing?.floor_plans ?? []),

		images: mergedImages,

		quotation: {
			length: req.body.length ?? existing?.quotation?.length,

			width: req.body.width ?? existing?.quotation?.width,

			fullSquareMeter:
				Number(req.body.length ?? existing?.quotation?.length) *
				Number(req.body.width ?? existing?.quotation?.width),

			no_of_rooms: req.body.no_of_rooms ?? existing?.quotation?.no_of_rooms,

			no_of_bathrooms:
				req.body.no_of_bathrooms ?? existing?.quotation?.no_of_bathrooms,

			porch: req.body.porch ?? existing?.quotation?.porch,

			balcony: req.body.balcony ?? existing?.quotation?.balcony,

			garage: req.body.garage ?? existing?.quotation?.garage,

			description: req.body.description ?? existing?.quotation?.description,
		},
	};
};

module.exports = build_design_payload;
