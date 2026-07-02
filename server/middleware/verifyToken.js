/** @format */

const adminModel = require("../models/admin_model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
	const authHeader = req.headers.authorization;

	console.log("authHeader: ", authHeader);

	if (!authHeader?.startsWith("Bearer ")) {
		console.log("TOKEN VERIFICATION FAILED");
		return res.status(401).json({
			message: "Access token required",
		});
	}

	const token = authHeader.split(" ")[1];

	console.log("TOKEN: ", token);

	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
		if (err) {
			console.log("TOKEN VERIFICATION FAILED");
			return res.status(403).json({
				message: "Invalid token",
			});
		}
		console.log("TOKEN VERIFICATION SUCCESSFUL");

		req.user = decoded;
		next();
	});
};

module.exports = verifyToken;

module.exports = verifyToken;
