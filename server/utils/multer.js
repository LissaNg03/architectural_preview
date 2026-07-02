/** @format */
const path = require("path");
const multer = require("multer");

const upload = multer({
	storage: multer.memoryStorage(),
	fileFilter: (req, file, cb) => {
		const allowedTypes = [".jpg", ".jpeg", ".png", ".webp", ".mp4", ".mov"];
		const allowedMimeTypes = [
			"image/jpg",
			"image/jpeg",
			"image/png",
			"image/webp",
			"video/mp4",
			"video/mov",
		];

		const ext = path.extname(file.originalname).toLowerCase();
		const mimeType = file.mimetype.toLowerCase();

		const validType = allowedTypes.includes(ext);
		const validMimeType = allowedMimeTypes.includes(mimeType);

		if (validType && validMimeType) {
			cb(null, true);
		} else {
			cb(
				new Error(
					"Only images (jpg, jpeg, png, webp) and video is (mp4, mov) are allowed",
				),
				false,
			);
		}
	},
});

module.exports = upload;
