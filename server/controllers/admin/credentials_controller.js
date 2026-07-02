/** @format */
const AdminModel = require("../../models/admin_model");
const bcrypt = require("bcrypt");
const credentials_controller = async (req, res) => {
	const { username, email, oldPassword, newPassword } = req.body;

	//VALIDATE INPUTS
	if (!username || !email || !oldPassword || !newPassword)
		return res.status(400).json({ message: "Invalid Inputs!" });

	try {
		//GET PASSWORD FROM DB
		const { password } = await AdminModel.findOne({
			singletonKey: "ADMIN_CONFIG",
		}).select("password");

		const match = await bcrypt.compare(oldPassword, password);

		if (match) {
			//UPDATE HASH NEW PASSWORD
			const hashedNewPassword = await bcrypt.hash(newPassword, 10);

			//UPDATE CREDENTIALS
			const update = await AdminModel.findOneAndUpdate(
				{ singletonKey: "ADMIN_CONFIG" },
				{
					username,
					email,
					password: hashedNewPassword,
				},
				{ new: true },
			);

			res.clearCookie("jwt", { httpOnly: true });

			res.status(201).json({ message: "Updated Successfully!" });
		} else {
			res.status(401).json({ message: "Incorrect Password!" });
		}
	} catch (error) {
		console.log(error);
	}
};

module.exports = credentials_controller;
