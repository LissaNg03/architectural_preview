/** @format */
// UPLOAD A SINGLE FILE BUFFER TO CLOUDINARY
const cloudinary = require("../../utils/cloudinary");
const uploadToCloudinary = (fileBuffer, resourceType = "image") =>
	new Promise((resolve, reject) => {
		const stream = cloudinary.uploader.upload_stream(
			{
				folder: "design_uploads",
				resource_type: resourceType,
			},
			(err, result) => {
				if (err) return reject(err);
				resolve({
					url: result.secure_url,
					public_id: result.public_id.split("/").pop(),
				});
			},
		);
		stream.end(fileBuffer);
	});

// UPLOAD A SINGLE FILE AND RETURN {url, public_id}
const resolveSingle = async (fileArray, resourceType = "image") => {
	if (!fileArray.length) return { url: null, public_id: null };
	return await uploadToCloudinary(fileArray[0].buffer, resourceType);
};

// UPLOAD MULTIPLE FILES AND RETURN [{url, public_id}, ...]
const resolveMultiple = async (fileArray, resourceType = "image") => {
	if (!fileArray.length) return [];
	return await Promise.all(
		fileArray.map((file) => uploadToCloudinary(file.buffer, resourceType)),
	);
};

const updateToCloudinary = (
	fileBuffer,
	resourceType = "image",
	publicId = null,
) =>
	new Promise((resolve, reject) => {
		const stream = cloudinary.uploader.upload_stream(
			{
				folder: "design_uploads",
				resource_type: resourceType,
				public_id: publicId || undefined,
				overwrite: true,
				invalidate: true,
			},
			(err, result) => {
				if (err) return reject(err);

				if (!result?.secure_url || !result?.public_id) {
					return reject(new Error("Cloudinary upload failed"));
				}

				resolve({
					url: result.secure_url,
					public_id: result.public_id.split("/").pop(),
				});
			},
		);

		stream.end(fileBuffer);
	});

const uploadSingle = async (fileArray, resourceType, existing) => {
	if (!fileArray?.length) return existing || null;

	const uploaded = await updateToCloudinary(
		fileArray[0].buffer,
		resourceType,
		existing?.public_id,
	);

	return uploaded;
};

const uploadMultiple = async (fileArray) => {
	if (!fileArray?.length) return [];

	const uploaded = await Promise.all(
		fileArray.map((f) => updateToCloudinary(f.buffer)),
	);

	return uploaded.filter((i) => i?.url && i?.public_id);
};

module.exports = {
	uploadToCloudinary,
	resolveSingle,
	resolveMultiple,
	updateToCloudinary,
	uploadSingle,
	uploadMultiple,
};
