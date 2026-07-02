/** @format */
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const adminSchema = new mongoose.Schema({
	singletonKey: { type: String, unique: true, default: "ADMIN_CONFIG" },
	business_name: { type: String, required: true },
	business_logo: {
		url: { type: String, required: true },
		public_id: { type: String, required: true },
	},
	hero_data: {
		hero_img: {
			url: { type: String, required: true },
			public_id: { type: String, required: true },
		},
		hero_bigger_text: { type: String, required: true },
		hero_smaller_text: { type: String, required: true },
		clients_estimate: { type: Number },
		followers_estimate: { type: Number },
		total_designs: { type: Number },
	},
	offer_section_data: {
		what_we_offer_text: { type: String, required: true },
		bullet_one: { type: String, required: true },
		bullet_two: { type: String, required: true },
		bullet_three: { type: String, required: true },
	},
	who_we_are_section_data: {
		text: { type: String, required: true },
		img: {
			url: { type: String, required: true },
			public_id: { type: String, required: true },
		},
	},
	social_links: {
		type: [
			{
				name: { type: String, required: true },
				link: { type: String, required: true },
			},
		],
		required: true,
	},

	email_secret: { type: String, required: true },
	username: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
});

adminSchema.methods.getPassword = (plaintextPass) => {
	const hashedPass = bcrypt.hash(plaintextPass, 10);

	return hashedPass;
};

const AdminModel = mongoose.model("AdminData", adminSchema, "adminData");

module.exports = AdminModel;
