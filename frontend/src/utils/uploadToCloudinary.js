/** @format */

import axios from "axios";

export async function uploadToCloudinary(
	admin = false,
	file,
	resourceType = "image",
	onProgress,
) {
	const formData = new FormData();

	formData.append("file", file);
	formData.append(
		"upload_preset",
		admin
			? import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET_ADMIN
			: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
	);

	try {
		const response = await axios.post(
			`https://api.cloudinary.com/v1_1/${
				import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
			}/${resourceType}/upload`,
			formData,
			{
				onUploadProgress: (progressEvent) => {
					if (!onProgress) return;

					const percent = Math.round(
						(progressEvent.loaded * 100) / progressEvent.total,
					);

					onProgress(percent);
				},
			},
		);

		return {
			url: response.data.secure_url,
			public_id: response.data.public_id.split("/").pop(),
		};
	} catch (error) {
		return Promise.reject(error);
	}
}
