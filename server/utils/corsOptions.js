/** @format */

const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
	origin: (origin, cb) => {
		if (!origin || allowedOrigins.includes(origin)) {
			cb(null, true);
		} else {
			cb(new Error("Not allowed by CORS"));
		}
	},
	credentials: true,
};

module.exports = corsOptions;
