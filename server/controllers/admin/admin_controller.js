/** @format */

const AdminModel = require("../../models/admin_model");
const deleteAsset = require("../../services/service_helpers/delete_replaced_assets");
const admin_controller = async (req, res) => {
	try {
		// GET CURRENT DATA
		const existing = await AdminModel.findOne({
			singletonKey: "ADMIN_CONFIG",
		});

		if (!existing) {
			return res.status(404).json({
				message: "Admin configuration not found.",
			});
		}

		// USE NEW IMAGES IF SENT, OTHERWISE KEEP EXISTING ONES
		const business_logo = req.body.business_logo ?? existing.business_logo;

		const hero_img = req.body.hero_img ?? existing.hero_data.hero_img;

		const who_we_are_img =
			req.body.who_we_are_img ?? existing.who_we_are_section_data.img;
		// Delete replaced Cloudinary assets
		await Promise.all([
			deleteAsset(existing.business_logo, business_logo),
			deleteAsset(existing.hero_data.hero_img, hero_img),
			deleteAsset(existing.who_we_are_section_data.img, who_we_are_img),
		]);

		const updatedAdmin = await AdminModel.findOneAndUpdate(
			{ singletonKey: "ADMIN_CONFIG" },
			{
				business_name: req.body.business_name,

				business_logo,

				hero_data: {
					hero_img,
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
					img: who_we_are_img,
				},

				social_links: [
					{
						name: "tel_no",
						link: req.body.tel_no,
					},
					{
						name: "email",
						link: req.body.email,
					},
					{
						name: "tiktok",
						link: req.body.tiktok_link,
					},
					{
						name: "facebook",
						link: req.body.facebook_link,
					},
					{
						name: "whatsapp",
						link: req.body.whatsApp_number,
					},
				],

				email_secret: req.body.email_secret,
			},
			{
				returnDocument: "after",
			},
		);
		console.log("updatedAdmin");
		console.dir(updatedAdmin.social_links, { depth: null });

		res.json({
			message: "Uploaded Successfully",
			admin: updatedAdmin,
		});
	} catch (error) {
		console.error(error);

		res.status(500).json({
			message: "ERROR UPLOADING",
			error: error.message,
		});
	}
};

module.exports = admin_controller;
