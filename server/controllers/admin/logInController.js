/** @format */

const AdminModel = require("../../models/admin_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const logInController = async (req, res) => {
	console.log("BOG: ", req.body);
	const { username, email, password } = req.body;

	try {
		//VALIDATE INPUTS
		if (!username || !email || !password)
			return res
				.status(401)
				.json({ message: "All Inputs Fields Must Be Filled!" });
		console.log("INPUTS VALID");
		//CHECK DATABASE FOR ADMIN CREDENTIALS
		const adminCredentials = await AdminModel.findOne().select(
			"username email password",
		);
		console.log("Admin Credentials: ", adminCredentials);
		//DO INPUTS MATCH WITH ADMIN CREDENTIALS
		const usernameMatch = username === adminCredentials.username;
		const emailMatch = email === adminCredentials.email;
		const passMatch = await bcrypt.compare(password, adminCredentials.password);

		const match = usernameMatch && emailMatch && passMatch;

		// console.log("Match: ", match);
		// console.log("usernameMatch: ", usernameMatch);
		// console.log("emailMatch: ", emailMatch);
		// console.log("passMatch: ", passMatch);

		if (!match) return res.status(401).json({ message: "Invalid Credentials" });

		//IF INPUTS MATCH CREATE JWTs
		const accessToken = jwt.sign(
			{ email: adminCredentials.email, username: adminCredentials.username },
			process.env.ACCESS_TOKEN_SECRET,
			{ expiresIn: "15min" },
		);
		const refreshToken = jwt.sign(
			{ email: adminCredentials.email, username: adminCredentials.username },
			process.env.REFRESH_TOKEN_SECRET,
			{ expiresIn: "1d" },
		);

		// console.log("MATCH: ", match);
		// console.log("ADMIN: ", adminCredentials);
		// console.log("ACCESSTOKEN: ", accessToken);
		res.cookie("jwt", refreshToken, {
			sameSite: "none",
			secure: true,
			httpOnly: true,
			maxAge: 24 * 60 * 60 * 1000,
		});
		res.json({ accessToken });
	} catch (error) {
		console.log(error);
	}
};

module.exports = logInController;
