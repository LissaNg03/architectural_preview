/** @format */

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const verifyToken = require("./middleware/verifyToken");
const connectDB = require("./utils/connectDB");

//ROUTES
const index_routes = require("./routes/public_routes/index_routes");
const admin_routes = require("./routes/admin_routes/admin_routes");
const corsOptions = require("./utils/corsOptions");
const logInController = require("./controllers/admin/logInController");
const refreshTokenController = require("./controllers/admin/refreshTokenController");
const logout_controller = require("./controllers/admin/logout_controller");

//APP
const app = express();
//APP SETTINGS
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

//CONNECT TO DATABASE

app.use(async (req, res, next) => {
	try {
		await connectDB();
		next();
	} catch (err) {
		next(err);
	}
});
// mongoose
// 	.connect(process.env.MONGO_URI)
// 	.then(() => {
// 		console.log("MongoDB connected");

// 		app.listen(3000, "localhost", () =>
// 			console.log("Server running on port 3000"),
// 		);
// 	})
// 	.catch((err) => console.log(err));

//VERIFY TOKEN
app.use("/api/admin/verify", verifyToken, (req, res) =>
	res.json({ valid: true }),
);

//ADMIN ROUTES
app.get("/api/refresh", refreshTokenController);
app.post("/api/admin/login", logInController);
app.post("/api/admin/logout", logout_controller);
app.use("/api/admin/home", verifyToken, admin_routes);

//PUBLIC ROUTES
app.use("/api", index_routes);

app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).json({ message: "Server Error" });
});

module.exports = app;
