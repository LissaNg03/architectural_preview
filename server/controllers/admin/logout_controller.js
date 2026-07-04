/** @format */

const logout_controller = (req, res) => {
	const cookies = req.cookies;

	if (!cookies?.jwt) return res.sendStatus(204);

	res.clearCookie("jwt", {
		httpOnly: true,
		secure: true,
		sameSite: "none",
	});

	res.sendStatus(204);
};

module.exports = logout_controller;
