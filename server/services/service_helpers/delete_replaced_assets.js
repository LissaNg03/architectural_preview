/** @format */

const cloudinary = require("../../utils/cloudinary");

const deleteAsset = async (
	oldAsset,
	newAsset = null,
	resourceType = "image",
) => {
	if (!oldAsset?.public_id) return;

	// If a replacement exists and it's the same asset, don't delete.
	if (
		newAsset?.public_id &&
		oldAsset.public_id === newAsset.public_id
	) {
		return;
	}

	try {
		await cloudinary.uploader.destroy(oldAsset.public_id, {
			resource_type: resourceType,
		});
	} catch (error) {
		console.error(
			`Failed deleting ${oldAsset.public_id}:`,
			error.message,
		);
	}
};

module.exports = deleteAsset;