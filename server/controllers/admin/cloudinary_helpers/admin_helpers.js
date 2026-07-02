/** @format */
const cloudinary = require("../../../utils/cloudinary");

const uploadToCloudinary = (fileBuffer, existingPublicId = null) =>
	new Promise((resolve, reject) => {
		const stream = cloudinary.uploader.upload_stream(
			{
				folder: "admin_uploads/images",
				resource_type: "image",
				...(existingPublicId && {
					public_id: existingPublicId,
					overwrite: true,
					invalidate: true,
				}),
			},
			(err, result) => {
				if (err) return reject(err);
				resolve({
					secure_url: result.secure_url,
					public_id: result.public_id.split("/").pop(),
				});
			},
		);
		stream.end(fileBuffer);
	});

//THIS RESOLVE IMAGE BY CHECKING IF THE IMAGE IS SENT AND IF SO IT UPLOADS IT TO CLOUDINARY AND RETURN THE URL WHERE IT'S NEEDED, AND IF NOT IT REUTRN THE FALLABACK PASSED WHICH IS THE URL FROM THE EXISTING DB
const resolveImage = async (
	fieldName,
	dbFallback,
	existingPublicId = null,
	req,
) => {
	const incomingFile = req.files?.[fieldName]?.[0];
	if (incomingFile) {
		const uploaded = await uploadToCloudinary(
			incomingFile.buffer,
			existingPublicId,
		);
		return { url: uploaded.secure_url, public_id: uploaded.public_id };
	}
	return { url: dbFallback, public_id: existingPublicId };
};

module.exports = { uploadToCloudinary, resolveImage };
