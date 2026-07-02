/** @format */

const credentials = (req, res, next) => {
	res.header("Access-Control-Allow-Origin", true);

	next();
};

module.exports = credentials;
