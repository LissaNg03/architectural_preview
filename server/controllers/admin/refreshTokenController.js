/** @format */
const jwt = require("jsonwebtoken");
require("dotenv").config();
const adminModel = require("../../models/admin_model");
const refreshTokenController = (req, res) => {
	const refreshToken = req.cookies?.jwt;
	console.log("refreshToken USED TO REQUEST: ", refreshToken);
	if (!refreshToken)
		return res.status(403).json({ message: "JWT not found in cookies!" });

	try {
		//TOKEN EXISTS
		jwt.verify(
			refreshToken,
			process.env.REFRESH_TOKEN_SECRET,
			(error, decoded) => {
				if (error)
					return res.status(403).json({ message: "REFRESH TOKEN EXPIRED!" });

				const newAccessToken = jwt.sign(
					{ username: decoded.username, email: decoded.email },
					process.env.ACCESS_TOKEN_SECRET,
					{ expiresIn: "15min" },
				);

				return res.json({ newAccessToken });
			},
		);
	} catch (err) {
		console.log(err);
	}
};

module.exports = refreshTokenController;
