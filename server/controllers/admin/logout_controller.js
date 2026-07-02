/** @format */

const logout_controller = (req, res) => {
	const cookies = req.cookies;
	if (!cookies?.jwt) return res.sendStatus(204); //No Content

	const refreshToken = cookies.jwt;
	res.clearCookie("jwt", { httpOnly: true }); //secure-true
	res.sendStatus(204);
};

module.exports = logout_controller;
