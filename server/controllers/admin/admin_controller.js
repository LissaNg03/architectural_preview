/** @format */
const DesignModel = require("../../models/design_model");
const AdminModel = require("../../models/admin_model");

const {
	uploadToCloudinary,
	resolveImage,
} = require("./cloudinary_helpers/admin_helpers");
const admin_controller = async (req, res) => {
	try {
		//GET EXISTING URLS IN THE DATABASE
		const existing = await AdminModel.findOne(
			{ singletonKey: "ADMIN_CONFIG" },
			"business_logo hero_data.hero_img who_we_are_section_data.img",
		);

		//THIS TAKES THE FILE BUFFER AND UPLOADS THE FILE TO CLOUDINARY AND RETURN THE REQUIRED METADATA

		//SET URLS TO THE ONES ALREADY IN THE DB IF NO FILES WERE SENT
		const [business_logo, hero_img, who_we_are_img] = await Promise.all([
			resolveImage(
				"business_logo_img",
				existing?.business_logo.url,
				existing?.business_logo?.public_id,
				req,
			),
			resolveImage(
				"hero_img",
				existing?.hero_data?.hero_img.url,
				existing?.hero_data?.hero_img.public_id,
				req,
			),
			resolveImage(
				"who_we_are_img",
				existing?.who_we_are_section_data?.img.url,
				existing?.who_we_are_section_data?.img.public_id,
				req,
			),
		]);

		// UPDATE DB
		const saveToDB = await AdminModel.findOneAndUpdate(
			{ singletonKey: "ADMIN_CONFIG" },
			{
				business_name: req.body.business_name,

				business_logo: {
					url: business_logo.url,
					public_id: business_logo.public_id,
				},

				hero_data: {
					hero_img: {
						url: hero_img.url,
						public_id: hero_img.public_id,
					},
					hero_bigger_text: req.body.hero_bigger_text,
					hero_smaller_text: req.body.hero_smaller_text,
					clients_estimate: req.body.clients_estimate,
					followers_estimate: req.body.followers_estimate,
					total_designs: req.body.total_designs,
				},

				offer_section_data: {
					what_we_offer_text: req.body.what_we_offer_text,
					bullet_one: req.body.bullet_one,
					bullet_two: req.body.bullet_two,
					bullet_three: req.body.bullet_three,
				},

				who_we_are_section_data: {
					text: req.body.who_we_are_text,
					img: {
						url: who_we_are_img.url,
						public_id: who_we_are_img.public_id,
					},
				},

				social_links: [
					{ name: "tel_no", link: req.body.tel_no },
					{ name: "email", link: req.body.email },
					{ name: "tiktok", link: req.body.tiktok },
					{ name: "facebook", link: req.body.facebook },
					{ name: "whatsapp", link: req.body.whatsapp },
				],

				email_secret: req.body.email_secret,
			},
			{
				returnDocument: "after",
				upsert: true,
			},
		);

		res.json({ message: "Uploaded Successfully", db: "saveToDB" });
	} catch (error) {
		console.error(error);
		res.status(500).json({
			message: "ERROR UPLOADING",
			error: error.message,
		});
	}
};

module.exports = admin_controller;
