/** @format */
const mongoose = require("mongoose");

const designSchema = new mongoose.Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	category: { type: String, required: true },
	video: {
		url: { type: String, required: true },
		public_id: { type: String, required: true },
	},
	thumbnail: {
		url: { type: String, required: true },
		public_id: { type: String, required: true },
	},

	floor_plans: [
		{
			url: { type: String, required: true },
			public_id: { type: String, required: true },
		},
	],

	images: [
		{
			title: { type: String, required: true },
			url: { type: String, required: true },
			public_id: { type: String, required: true },
		},
	],

	quotation: {
		length: { type: Number, required: true },
		width: { type: Number, required: true },
		fullSquareMeter: { type: Number, required: true },
		no_of_rooms: { type: Number, required: true },
		no_of_bathrooms: { type: Number, required: true },
		porch: { type: Boolean, required: true },
		balcony: { type: Boolean, required: true },
		garage: { type: Boolean, required: true },
		description: { type: String, required: true },
	},
});

const DesignModel = mongoose.model("Design", designSchema, "designs");

module.exports = DesignModel;
