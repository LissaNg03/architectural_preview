<!-- @format -->

AUTHENTICATION ALLOWS YOU TO PROTECT ROUTES, SO SOME ROUTES ARE NOT ACCESSED BY UNAUTHORIZED PEOPLE:

BASIC AUTHENTICATION WITH EMAIL AND PASSWORD::

1. USER SIGN UP WITH EMAIL AND PASSWORD, YOU ENCRYPT THE PASSWORD WITH BCRYPT AND STORE THE HASHED STRING IN THE DB WITH THE EMAIL,
2. USER LOGS IN, YOU CHECK IF THE DB HAS THE EMAIL, IF SO, YOU TAKE THE USER PASSWORD AND VERIFY IT WITH BCRYPT USING THE HASHED STRING IN THE DB
3. USER IS AUTHENTICATED SUCCESSFULLY, SO AFTER A SUCCESSFUL LOG IN, YOU CREATE AN ACCESSTOKEN AND REFRESHTOKEN WITH JWT, THEN SEND THE SEND THE ACCESSTOKEN TO FRONTEND BUT SEND THE REFRESH TOKEN THROUGH HTTP-ONLY COOKIE SO FRONTEND JS CANT ACCESS IT
4. EVERYTIME A USER TRIES TO ACCESS A ROUTE, THEY SEND THE ACCESS TOKEN, AND THE REFRESH TOKEN IS SENT EVERYTIME AUTOMATICALLY THROUGH COOKIES, TO ENSURE THIS, YOU SET THE CREDENTIALS HEADER PROPERTY TO TRUE, AND ALSO CONFIGURE CORS THE SAME WAY.
5. IN THE BACKEND YOU CREATE A FUNCTION THAT VERIFIES THE ACCESSTOKEN AND DECIDES WHETHER TO REQ IS SENT TO THE REQ HANDLER, THIS FUNCTION IS USED AS MIDDLEWARE
6. YOU CAN ALSO USE GOOGLE-O-AUTH TO LET USERS SIGN IN AND REGISTER AUTOMATICALLY WITH JUST A CLICK OF A GOOGLE BUTTON, THAT GOOGLE BUTTON VERIFIES THAT THE USER OWNS THE EMAIL BUT DOESNT PROVIDE THE EMAIL, SO IF USER SIGN UP WITH GOOGLE, YOU ONLY GET TO STORE THEIR EMAIL, EMAIL ID AND NAME FROM GOOGLE, SO THEY CANT MANUALLY SIGN IN WITH EMAIL AND PASSWORD SINCE THEY NEVER CREATED A PASSWORD, (BUT YOU CAN ALLOW A USER TO CREATE A PASSWORD AFTER SUCCESSFUL LOGIN WITH GOOGLE)
7. IF A USER SIGNS UP MANUALLY, THEIR EMAIL AND ENCRYPTED PASSWORD ARE STORED IN THE DB, BUT THEY CAN ALSO BE ALLOWED TO SIGN IN WITH GOOGLE COZ THAT VERIFIES THAT THEY OWN THE EMAIL

**TECHNICAL LOGIC AND REQUIREMENTS FOR THIS**

//REGISTERING WITH EMAIL AND PASSWORD//
//PACKAGES::
const bcrypt = require("bcrypt");

1. YOU SENT THE CREDENTIALS TO BACKEND::
   const response = await axios.post(REGISTER_URL, {
   user,
   email,
   pwd,
   });
2. ENSURE THE EMAIL DOESNT ALREADY EXIST IN THE DATABASE::
   if (duplicate)
   return res.status(409).json({ message: "Email already exists" });
3. ENCRYPT THE PASSWORD WITH BCRYPT::
   const hashedPwd = await bcrypt.hash(pwd, 10);
4. STORE THE CREDENTIALS IN THE DB, THEN SEND 'DATA CREATED' STATUS::
   return res.status(201)

---

//LOGGIN IN USERS WITH EMAIL AND PASSWORD THEN SENDING ACCESS_TOKEN AND REFRESH_TOKEN TO PROTECT ROUTES//

//PACKAGES::
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

1.  YOU SEND THE CREDENTIALS FROM FRONTEND::
    const response = await axios.post(LOGIN_URL, { email, pwd });
2.  BACKEND, FIND EXISTING USER WITH THAT EMAIL::
    const foundUser = usersDB.users.find((person) => person.email === email);
3.  IF USER WITH THAT EMAIL DOESN'T EXIST, RETURN 401, UNAUTHORIZED::
    if (!foundUser)
    return res
    .status(401)
    .json({ message: "Account doesn't exist, please sign up!" });
4.  IF THE EMIAL EXISTS, VERIFY THE PASSWORD::
    const match = await bcrypt.compare(pwd, foundUser.password);//PLAINTEXT PASS IS MATCHED WITH HASHED STRING IN DB
5.  IF EMAIL EXISTS, AND PASSWORD MATCHES:: CREATE AND SEND JWTs::
    //IF(match)
    //JWTs
    const accessToken = jwt.sign(
    { email: foundUser.email },
    process.env.ACCESS*TOKEN_SECRET,
    { expiresIn: "5s" },
    );
    const refreshToken = jwt.sign(
    { email: foundUser.email },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "1min" },
    );
    res.cookie("jwt", refreshToken, {
    sameSite: "none",
    secure: true,
    httpOnly: true,
    maxAge: 24 * 60 \_ 60 \* 1000,
    });
    res.json({ accessToken });~
    //YOU CREATE TOKENS, AND STORE THE USER'S METADATA IN THE TOKENS, SO YOU CAN VERIFY WITH IT LATER, ACCESS_TOKEN IS USUALLY "15min" DURATION, AND REFERSH "7d"
    //ELSE return status(403) UNAUTHORIZED

///////////////////////
**VERIFY TOKEN**
/\*_ @format _/
//THIS TAKES THE ACCESS_TOKEN SENT FROM CLIENT::

const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = (req, res, next) => {
//EXTRACTING TOKEN FROM HEADERS
const authHeader = req.headers["authorization"];
//IF ITS NOT THERE, RETURN 401, UNAUTHORIZED
if (!authHeader) {
console.log("VERIFICATION FAILED");
return res.sendStatus(401);
} //Bearer doesnt exist
//TAKE THE SECOND PART OF THE STRING <TOKEN>
const token = authHeader.split(" ")[1];
//VERIFICATION WITH JWT.VERIFY(TOKEN,TOKEN_SECRET,CALLBACK)
jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
//IF AN ERROR OCCURED, RETURN ERROR
if (err) return res.sendStatus(403); //Token invalid
//IF NO ERROR, TAKE THE DECODED TOKEN I.E THE TOKEN METADATA LIKE PAYLOAD YOU SET, AND MODIFY THE REQUEST, ADDING/MODIFYING THE PROPERTY USER TO THE DECODED DATA
req.user = decoded;
console.log("VERIFICATION SUCCESSFULL");
//THEN LET REQUEST PASSWORD TO REQUEST HANDLER
next();
});
};

module.exports = verifyJWT;

/\*_ @format _/

const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = (req, res, next) => {
const authHeader = req.headers["authorization"];

    if (!authHeader) {
    	console.log("VERIFICATION FAILED");
    	return res.sendStatus(401);
    } //Bearer doesnt exist

    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    	if (err) return res.sendStatus(403); //Token invalid
    	req.user = decoded;
    	console.log("VERIFICATION SUCCESSFULL");
    	next();
    });

};

module.exports = verifyJWT;

**REFRESH TOKEN ROUTE**
//YOU CREATE A SPECIFIC ROUTE THAT IS USED TO REQUEST A NEW ACCESSTOKEN WHEN ACCESS_TOKEN EXPIRES, THAT ROUTE CHECKS THE COOKIES FOR THE REFRESH TOKEN, THEN CHECK THE USER WITH THAT REFRESH TOKEN IN THE DB, AND IF THEY EXIST, A NEW ACCESS TOKEN I CREATED AND SENT BACK TO THE CLIENT::
export async function fetchRefresh() {
console.log("ACCESS KEY EXPIRED...");
console.log("REQUESTING A NEW ACCESS KEY WITH REFRESH...");
try {
//SENDING REQUEST FOR NEW ACCESS_TOKEN, NO NEED TO SEND REFRSH_TOKEN AS IT WAS SET THROUGH COOKIES, AND THEREFORE GETS AUTOMATICALLY SENT WITH EVERY REQ THROUGH COOKIES, CORS CONFIGURATION TO ALLOW COOKIES AND HEADERS CREDENTIALS TO BE SENT::res.header("Access-Control-Allow-Credentials", true);, ADD MIDDLEWARE THAT ADDS THIS TO THE REQ.HEADERS TO ALLOWED ORIGINS
const response = await axios.get("http://localhost:3500/refresh");
//SETTING GLOBAL ACCESSTOKEN TO THE VALID ONE ACQUIRED ONE
const newAccessToken = response.data?.accessToken ?? null;
setAccessToken(newAccessToken);
console.log("GOT NEW ACCESS TOKEN");
RETURNING NEW ACCESS TOKEN TO MAYBE THE INTERCEPTORS
return newAccessToken;
} catch (err) {
console.log(err);
console.log("COULD NOT GGET NEW ACCESS TOKEN");
//IF A NEW ACCESSTOKEN COULD NOT BE ACQUIRED, THAT MEANS THE REFRESH_TOKEN IS EXPIRED, SO THE USER MUST GET LOGGED OUT AND LOGIN AGAIN TO GET A NEW REFRESH TOKEN
if (err?.response?.status === 403) {
setAccessToken(null);
return null;
}
}
}

///////BACKEND REFRESH TOKEN CONTROLLER::
/\*_ @format _/

//IMPORT USERS
const usersDB = {
users: require("../models/users.json"),
setUsers: function (data) {
this.users = data;
},
};

const jwt = require("jsonwebtoken");
require("dotenv").config();

const refreshTokenController = (req, res) => {
//GET COOKIES
const cookies = req.cookies;
//IF COOKIES DON'T HAVE THE jwt COOKIES YOU SET, THEN THAT MEANS USER HAVE LOGGED OUT, AND THEREFORE MUST LOG IN AGAIN
if (!cookies?.jwt) return res.sendStatus(401);
//EXTRACT REFRESH_TOKEN
const refreshToken = cookies.jwt;
//FINDING A USER WITH THAT REFRESH_TOKENN
const foundUser = usersDB.users.find(
(person) => person.refreshToken === refreshToken,
);

    // console.log(foundUser);

    if (!foundUser) return res.sendStatus(403); //Forbidden

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    	console.log("decoded");
    	// console.log(decoded);
    	if (err || foundUser.username !== decoded.username)
    		return res.sendStatus(403);

    	const accessToken = jwt.sign(
    		{ username: decoded.username },
    		process.env.ACCESS_TOKEN_SECRET,
    		{ expiresIn: "30s" },
    	);

    	res.json({ accessToken });
    });

};

module.exports = refreshTokenController;

////////////////////////////////
**AXIOS AND INTERCEPTORS**
/\*_ @format _/

import axios from "axios";
//MUST BE DEFAULTY USED IN EVERY REQUEST
export default axios.create({
baseURL: import.meta.env.VITE_BASE_URL,
//ALLOWS HEADERS LIKE AUTHORIZATION TO BE SENT
withCredentials: true,
});
//THE BASE URL, IS USED SO YOU DONT HAVE TO ALWAYS MANUALLY TYPE IT THROUGH EVERY REQUEST,
**NB**

1. ALLOWS YOU TO SEND OBJECTS WITHOUT HAVING TO HARDCODE JSON.stringify(), ALSO NOT HAVE TO SPECIFY CONTENT-TYPE, AS IT GETS SET AUTOMATICALLY
2. RESPONSE HAS .DATA, SO YOU DONT HAVE TO .json() TO GET ACTUAL DATA
3. WHEN USED WITH TRYCATCH(), ANY ERROR RESPONSE WITH A STATUS NOT 2xx IS GOES STRAIGHT TO CATCH, WHERE YOU CAN GET (ERR) ERR.RESPONSE.STATUS,
4. IF USED WITH INTERCEPTORS, YOU CAN

**INTERCEPTORS**
//RUN BEFORE AND AFTER A REQUEST IS SENT WITH THIS AXIOS INSTANCE::
/\*_ @format _/

import axios from "./axios";//THE GLOBAL AXIOS INSTANCE USED,
import { getAccessToken, setAccessToken } from "../context/tokenStore";
import { fetchRefresh } from "../context/AuthProvider";

axios.interceptors.request.use((config) => {
const token = getAccessToken();

    if (token) {
    	//ATTATCH THE ACCESS TOKEN
    	config.headers.Authorization = `Bearer ${token}`;
    }

    return config;

});

let isRefreshing = false;
let failedQueue = [];

axios.interceptors.response.use(
(response) => response,
async (error) => {
//GRAB THE ORIGINAL REQUEST
const originalRequest = error.config;

    	//RUN THIS CODE ONLY IF THE ERROR RESPONSE IS 403 AS THAT'D MEAN THE ACCESSTOKEN IS EXPIRED, ALSO IF THE REQUEST WAS NOT ALREADY RETRIED HENCE LATER SETTING THE PROP _retry TO THE REQUEST SO WE CAN MARK IT AS RETRIED, ALSO IF THE REQUEST IS NOT FROM THE REFRESHTOKEN FUNCTION COZ IT ALSO USES THIS AXIOS AND THAT WOULD CAUSE RECURSIVENESS IF THE FUNCTION FAILS OR RETURNS 403
    	if (
    		(error.response?.status == 403 || error.response?.status == 401) &&
    		!originalRequest._retry &&
    		!originalRequest.url.includes("/refresh")
    	) {
    		//SETTING THE _retry PROP TO THE REQUEST (ORIGINALLY THE REQUEST DOESNT CONTAIN THIS BUT AXIOS ALLOWS YOU TO SET PROPS TO THE REQUEST BEFORE RETRYING IT)
    		originalRequest._retry = true;

    		//IF THE SITE SENDS LIKE 3 REQUESTS WITH EXPIRED ACCESSTOKEN, THEN THE fetchRefresh() WOULD BE CALLED SIMULTANEOULY, COZ EACH REQUEST WOULD CALL THE RESPONSE INTERCEPTOR, AND REQUESTING A NEW REFRESHTOKEN LITERALLY 3 TIMES SIMULTANEOUSLY IS NOT IDEAL AND CAN CAUSE BUGS....HENCE THIS TECHNIQUE OF USING isRefreshing bool and failedQueue array...

    		//AT FIRST THE BOOL IS FALSE, BUT A SECOND REFRESH THAT RUNS WHILE A REFRESH REQ IS CURRENTLY ISSUED MUST WAIT, SO ITS GONNA GET BACK A PROMISE WITH A PENDING STATE, THAT PROMISE'S RESOLVE WHICH IS SUPPOSED TO RETURN A RETRY REQUEST IS GONNA BE STORED IN THE FAILEDQUEUE ARRAY

    		//SO FUNCTIONS WHICH EXECUTE THE axios(originalRequest) which is retrying the request with the current valid accessToken, coz the first refresh reques is gonna set an available accessToken so the waiting requests get a successful response therefore not needing to use the fetchRefresh()
    		if (isRefreshing) {
    			//IF A CURRENT REFERSH REQUEST IS SENT, THE REQUEST GETS A PROMISE WITH A PENDING STATE, BUT THE RESOLVE THAT IS SUPPOSED TO FULFILL THAT PROMISE IS KEPT IN THE ARRAY
    			return new Promise((resolve) => {
    				failedQueue.push(() => {
    					resolve(axios(originalRequest));
    				});
    			});
    		}

    		//THIS IS FOR THE FIRST ACCESSTOKEN REQUEST TO SET REFRESHING TO TRUE WHILE IT'S SENDING THE REFRESH REQEST
    		isRefreshing = true;

    		try {
    			//REQUEST FOR  A NEW ACCESSTOKEN USING THE REFRESHTOKEN
    			const newToken = await fetchRefresh();
    			//IF THE NEWTOKEN COULD NOT BE ACQUIERED THAT WOULD ONLY MEAN THE REFRESHTOKEN IS EXPIRED AS WELL SO LOGOUT, AND RETURN AN ERROR TO THE REQUEST
    			if (!newToken) {
    				if (!window.location.href.includes("/login")) {
    					window.location.href = "/login";
    				}
    				return Promise.reject(error);
    			}
    			//SUCCESSFUL ACQUSITION OF THE NEWACCESSTOKEN WE SET THE GLOBAL ACCESSTOKEN TO THE VALID ONE, SO THE REQUESTS IN THE ARRAY USE THIS VALID ACCESSTOKEN AND GET SUCCESSFUL REQUESTS
    			setAccessToken(newToken);

                //ENSURE THE ORIGINAL REQUEST WICH WILL BE USED OT RETRY REQUEST USES THE NEW TOKEN
    			originalRequest.headers.Authorization = `Bearer ${newToken}`;


    			//AFTER GETTING AND SETTING THE  VALID ACCESSTOKEN, THE QUEUE CAN EXECUTE THE RESOLVES OF THOSE PROMISES
    			failedQueue.forEach((cb) => cb());
    			//AFTER THAT EMPTY THE QUEUE
    			failedQueue = [];
    			//ALSO SET IS REFRESHING TO FALSE
    			isRefreshing = false;
    			//AFTER THAT THE FIRST ALSO GET BACK RETRY WITH THE CURRENT ACCESSTOKEN
    			return axios(originalRequest);
    		} catch (err) {
    			isRefreshing = false;
    			window.location.href = "/login";
    			return Promise.reject(err);
    		}
    	}

    	return Promise.reject(error);
    },

);
**NB**

1. ENSURE TO IMPORT YOUR INTERCEPTORS FILE IN THE MAIN.JSX, COZ THEY DONT RUN ON EVERY REQUEST, BUT RUN WHEN APP LOADS SO ON EVERY REQUEST THEY JUST USED THAT CODE

---

**ADDING GOOGLE AUTH**
//USERS REGISTERS WITH GOOGLE::

> npm i @react-oauth/google;
> import {useGoogleLogin} from "@react-oauth/google;

const googleLogin = useGoogleLogin({

    	onSuccess: async (tokenResponse) => {
    		try {
                //SEND TO ITS OWN ROUTE
    			await axios.post("/auth/google/register", {
    				token: tokenResponse.access_token,
    			});
                //IF ITS SUCCESSFUL, THEN NAVIGATE TO LOGIN PAGE
    			navigate("/login", { replace: true });
    		} catch (err) {
    			console.log(err);
    			if (err.response.status == 409) {
    				setErrMsg("Email already exists, please sign in!");
    			}
    		}
    	},
    	onError: () => {
    		console.log("Google login failed");
    	},
    });

//**BACKEND GOOGLE REGISTER CONTROLLER**
/\*_ @format _/

const usersDB = {
users: require("../models/users.json"),
setUsers: function (data) {
this.users = data;
},
};

const fsPromises = require("fs").promises;
const path = require("path");
const bcrypt = require("bcrypt");

const googleAuthRegister = async (req, res) => {
const { token } = req.body;
console.log("TOKE: ", token);

    // FETCH GOOGLE USER INFO

    try {
    	const googleResponse = await fetch(
    		"https://www.googleapis.com/oauth2/v2/userinfo",
    		{
    			headers: {
    				Authorization: `Bearer ${token}`,
    			},
    		},
    	);

    	const googleUser = await googleResponse.json();
    	console.log("googleUser");
    	console.log(googleUser);

    	const { id, email, name, picture } = googleUser;

    	//check duplicate usernames in the db
    	const duplicate = usersDB.users.find((person) => person.email === email);

    	if (duplicate)
    		return res.status(409).json({ message: "Email already exists" }); //conflict

    	//encrypt the password
    	const newUser = {
    		name: name,
    		picture,
    		email,
    		googleId: id,
    		authProviders: ["google"],
    	};
    	console.log("newUser");
    	console.log(newUser);
    	//add newUser to DB
    	usersDB.setUsers([...usersDB.users, newUser]);

    	await fsPromises.writeFile(
    		path.join(__dirname, "..", "models", "users.json"),
    		JSON.stringify(usersDB.users),
    	);

    	console.log(usersDB.users);
    	return res.status(201).json({
    		message: "User created",
    		user: newUser,
    	});
    } catch (error) {
    	console.log("ERROR OCCURED");
    	console.log(error);
    	return res.status(500).json({ message: error.message });
    }

};

module.exports = googleAuthRegister;

**LOGIN WITH GOOGLE, CREATES TOKENS AND ALLOWS LOGIN**
//FRONTEND
const googleLogin = useGoogleLogin({
onSuccess: async (tokenResponse) => {
try {
const response = await axios.post("/auth/google/login", {
token: tokenResponse.access_token,
});

    			const accessToken = response.data?.accessToken ?? null;

    			if (accessToken) {
    				setAccessToken(accessToken);
    				navigate("/admin/employees", { replace: true });
    			}
    		} catch (err) {
    			if (err.response?.status === 401) {
    				setErrMsg("Account doesn't exist, please sign up!");
    			}
    		}
    	},
    	onError: () => {
    		console.log("Google login failed");
    	},
    });

**BACKEND GOOGLE AUTH LOGIN CONTROLLER**
/\*_ @format _/

const usersDB = {
users: require("../models/users.json"),
setUsers: function (data) {
this.users = data;
},
};

const path = require("path");
const fsPromises = require("fs").promises;
const jwt = require("jsonwebtoken");
require("dotenv").config();

const googleAuthLogIn = async (req, res) => {
try {
const { token } = req.body;
console.log("TOKE: ", token);

    	// FETCH GOOGLE USER INFO
    	const googleResponse = await fetch(
    		"https://www.googleapis.com/oauth2/v2/userinfo",
    		{
    			headers: {
    				Authorization: `Bearer ${token}`,
    			},
    		},
    	);

    	const googleUser = await googleResponse.json();
    	console.log("googleUser");
    	console.log(googleUser);

    	const { id: googleId, email, name, picture } = googleUser;

    	let foundUser = usersDB.users.find((person) => person.email === email);

    	console.log("foundUser");
    	console.log(foundUser);

    	if (!foundUser)
    		return res
    			.status(401)
    			.json({ message: "Account doesn't exist,  please sign up!" });

    	//IF USER EXIST, WE RETURN ACCESS TOKEN
    	const accessToken = jwt.sign(
    		{ email: foundUser.email },
    		process.env.ACCESS_TOKEN_SECRET,
    		{ expiresIn: "5s" },
    	);
    	const refreshToken = jwt.sign(
    		{ email: foundUser.email },
    		process.env.REFRESH_TOKEN_SECRET,
    		{ expiresIn: "1min" },
    	);

    	//SAVING REFRESH TOKEN
    	const otherUsers = usersDB.users.filter(
    		(person) => person.email !== foundUser.email,
    	);
    	const currentuser = { ...foundUser, refreshToken };

    	usersDB.setUsers([...otherUsers, currentuser]);

    	await fsPromises.writeFile(
    		path.join(__dirname, "..", "models", "users.json"),
    		JSON.stringify(usersDB.users),
    	);

    	//SENDING THE JWTs TO CLIENT
    	//COOKIES ARE SENT WITH EVERY REQUEST, THIS COOKIE IS INACCESSIBLE WITH JS COZ ITS SET TO HTTP-ONLY, AND EXPIRES AFTER 24 HOURS I.E MAXAGE (milliseconds)
    	res.cookie("jwt", refreshToken, {
    		sameSite: "none",
    		secure: true,
    		httpOnly: true,
    		maxAge: 24 * 60 * 60 * 1000,
    	});

    	res.json({ accessToken });
    } catch (err) {
    	console.error(err);
    	return res.status(500).json({
    		message: "Google auth failed",
    	});
    }

};

module.exports = googleAuthLogIn;

////////////////////////////
**ENV IN FRONT-END**
VITE*GOOGLE_CLIENT_ID=90153502845-1fqvk3dsotrah39nh3qj27rbrho6hbh6.apps.googleusercontent.com
VITE_BASE_URL=http://localhost:3500
//VAR NAMES MUST START WITH VITE*
YOU USE, import.meta.env.VITE_BASE_URL instead of process.env
//YOU DONT HAVE TO IMPORT IT IN FRONTEND, JUST ENSURE IT'S IN THE ROOT FOLDER SAME AS PACKAGE.JSON
**FRONTEND PACKAGES**
{
"name": "learning-auth",
"private": true,
"version": "0.0.0",
"type": "module",
"scripts": {
"dev": "vite",
"build": "vite build",
"lint": "eslint .",
"preview": "vite preview"
},
"dependencies": {
"@fortawesome/fontawesome-svg-core": "^7.2.0",
"@fortawesome/free-solid-svg-icons": "^7.2.0",
"@fortawesome/react-fontawesome": "^3.3.1",
"@react-oauth/google": "^0.13.5",
"@tailwindcss/vite": "^4.3.0",
"axios": "^1.16.1",
"env": "^0.0.2",
"react": "^19.2.6",
"react-dom": "^19.2.6",
"react-icons": "^5.6.0",
"react-router-dom": "^7.16.0",
"tailwindcss": "^4.3.0"
},
"devDependencies": {
"@eslint/js": "^10.0.1",
"@types/react": "^19.2.14",
"@types/react-dom": "^19.2.3",
"@vitejs/plugin-react": "^6.0.1",
"eslint": "^10.3.0",
"eslint-plugin-react-hooks": "^7.1.1",
"eslint-plugin-react-refresh": "^0.5.2",
"globals": "^17.6.0",
"vite": "^8.0.12"
}
}

///////////////////////////////////////////////

---

**\*\***\*\*\***\*\***AUTHENTICATION SCOPE CODE**\*\***\*\*\*\***\*\***

---

**_FRONTEND_**
/\*_ @format _/
**NB** MUST NOT USE INTERCEPTORS WHEN REQUESTING AS THIS MAY CAUSE RECURSION
import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const AuthContext = createContext({});
import { setAccessToken, getAccessToken } from "./tokenStore";

export async function fetchRefresh() {
console.log("ACCESS KEY EXPIRED...");
console.log("REQUESTING A NEW ACCESS KEY WITH REFRESH...");
try {
const response = await axios.get("http://localhost:3500/refresh", {
withCredentials: true,
});

    	const newAccessToken = response.data?.accessToken ?? null;
    	setAccessToken(newAccessToken);
    	console.log("GOT NEW ACCESS TOKEN");
    	return newAccessToken;
    } catch (err) {
    	console.log(err);
    	console.log("COULD NOT GGET NEW ACCESS TOKEN");
    	if (err?.response?.status === 403) {
    		setAccessToken(null);
    		return null;
    	}
    }

}

export default function AuthProvider({ children }) {
const [auth, setAuth] = useState({});
const [loading, setLoading] = useState(true);

    // setToken = (token) => {
    // 	console.log(token);
    // 	if (token) {
    // 		setAccessToken(token);
    // 		setLoading(false);
    // 	}
    // };

    // useEffect(() => {
    // 	fetchRefresh();
    // }, []);

    // async function fetchRefresh() {
    // 	try {
    // 		const response = await fetch("http://localhost:3500/refresh", {
    // 			method: "GET",
    // 			credentials: "include",
    // 		});

    // 		if (!response.ok) {
    // 			setAccessToken("");
    // 			setLoading(false);
    // 			return;
    // 		}

    // 		// console.log(response);

    // 		const data = await response.json();
    // 		setAccessToken(data.accessToken);

    // 		return data?.accessToken ?? null;
    // 	} catch (err) {
    // 		setAccessToken("");
    // 		console.log(err);
    // 		return null;
    // 	} finally {
    // 		setLoading(false);
    // 	}
    // }

    console.log("auth.accessToken");
    console.log(getAccessToken());

    return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;

}

---

**ACCESS_TOKEN_STORE**
//IT MUST BE STORE WHERE IT'LL PERSIST ON APP REFRESH AND RELOAD, AND MUST BE UPDATED BY THE REFRESHTOKEN FUNCTION THAT REQUEST NEW ACCESS_TOKEN WITH REFRESH_TOKEN

/\*_ @format _/

let accessToken = null;

export const setAccessToken = (token) => {
accessToken = token;
};

export const getAccessToken = () => accessToken;

---

**APP COMP**
//ROUTES, ITS BETTER TO HAVE A LAYOUT COMPONENT THAT'S THE PARENT COMPONET, SO YOU KEEP ALL CHILDREN ELEMENTS WITHIN, IT CAN BE USED TO PROVIDE CONTEXT, AND HAVE AN INDEX COMPONENT
/\*_ @format _/

import { useState } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Register from "./Register";
import LogIn from "./LogIn";
import Employees from "./Employees";
function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Register />} />
<Route path="/login" element={<LogIn />} />
<Route path="/admin/employees" element={<Employees />} />
</Routes>
</BrowserRouter>
);
}

export default App;

---

**EMPLOYEES**PROTECTED ROUTES COMPONENT, USER CAN ONLY MODIFY IF THEY'RE LOGGEDIN WITH VALID ACCESSTOKEN GIVEN
/\*_ @format _/

import React, { useEffect, useContext } from "react";
import { useState } from "react";
import axios from "./api/axios";
import { AuthContext } from "./context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { fetchRefresh } from "./context/AuthProvider";
import { getAccessToken, setAccessToken } from "./context/tokenStore";
export default function Employees() {
const [employees, setEmployees] = useState([]);
const { accessToken, loading, setToken } = useContext(AuthContext);
const navigate = useNavigate();

    useEffect(() => {
    	if (!loading) {
    		fetchEmployees();
    	}
    }, [accessToken, loading]);

    useEffect(() => {
    	console.log("TOKEN BEFORE REQUEST:", getAccessToken());
    	fetchEmployees();
    }, []);

    async function fetchEmployees() {
    	try {
    		const response = await axios.get("/admin/employees");
    		// console.log(response);
    		setEmployees(() => response.data?.employees);
    	} catch (error) {
    		console.log(error);
    		// if (error.response.status == 401) {
    		// 	navigate("/login", { replace: true });
    		// }
    		// if (error?.response?.status == 403) {
    		// 	console.log("THIS CODE DOESNT RUN");
    		// 	const newAccessToken = await fetchRefresh();
    		// 	if (!newAccessToken) {
    		// 		navigate("/login", { replace: true });
    		// 	} else {
    		// 		const response = await axios.get("/admin/employees");
    		// 		// console.log(response);
    		// 		setEmployees(() => response.data?.employees);
    		// 	}
    		// }
    	}
    }

    async function handleBtnClick(id) {
    	try {
    		let response = await axios.put("http://localhost:3500/admin/", { id });

    		// console.log(res);
    		console.log("TOKEN USED TO REQUEST:", getAccessToken());
    		const { updatedEmployees } = await response.data;

    		setEmployees(() => updatedEmployees);
    	} catch (error) {
    		console.log(error);
    		// if (error?.response.status == 403) {
    		// 	const newAccessToken = await fetchRefresh();
    		// 	console.log("REQUESTED NEW TOKEN: ", newAccessToken);
    		// 	if (!newAccessToken) {
    		// 		// navigate("/login", { replace: true });
    		// 		// return;
    		// 		console.log("TOKEN INVALID...");
    		// 		console.log("REQUESTED NEW TOKEN: ", newAccessToken);
    		// 	} else {
    		// 		let response = await axios.put("http://localhost:3500/admin/", {
    		// 			id,
    		// 		});
    		// 		const { updatedEmployees } = await response.data;
    		// 	}
    		// }
    	}
    }

    async function logOut() {
    	try {
    		setAccessToken(null);
    		const response = await axios.get("http://localhost:3500/logout");

    		console.log(response);

    		if (response.status === 204) {
    			navigate("/login", { replace: true });
    		}
    	} catch (error) {
    		console.log(error);
    	}
    }

    if (loading)
    	return <h2 className="text-2xl font-bold mb-6">Employees Loading</h2>;

    return (
    	<div className="p-6 bg-gray-100 min-h-screen">
    		<div className="flex justify-between items-center">
    			<h2 className="text-2xl font-bold mb-6">Employees </h2>
    			<button
    				onClick={logOut}
    				className="bg-blue-500 cursor-pointer text-white rounded-md p-2"
    			>
    				log out
    			</button>
    		</div>

    		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    			{employees.map((emp, index) => (
    				<div
    					key={emp.id}
    					className={`rounded-xl shadow-md p-5 border transition hover:scale-[1.02] ${
    						emp.isActive
    							? "bg-green-50 border-green-200"
    							: "bg-red-50 border-red-200"
    					}`}
    				>
    					<h3 className="text-lg font-semibold mb-2">
    						{emp.firstName} {emp.lastName}
    					</h3>

    					<p className="text-sm text-gray-700">
    						<span className="font-medium">Email:</span> {emp.email}
    					</p>

    					<p className="text-sm text-gray-700">
    						<span className="font-medium">Role:</span> {emp.role}
    					</p>

    					<p className="text-sm text-gray-700">
    						<span className="font-medium">Department:</span> {emp.department}
    					</p>

    					<p className="text-sm text-gray-700">
    						<span className="font-medium">Salary:</span> R{emp.salary}
    					</p>

    					<div className="mt-3">
    						<span
    							onClick={() => handleBtnClick(index + 1)}
    							className={`text-xs transition-all duration-300 hover:scale-110 font-semibold px-2 py-1 inline-block cursor-pointer rounded-full ${
    								emp.isActive
    									? "bg-green-200 text-green-800"
    									: "bg-red-200 text-red-800"
    							}`}
    						>
    							{emp.isActive ? "Active" : "Inactive"}
    						</span>
    					</div>
    				</div>
    			))}
    		</div>
    	</div>
    );

}

---

**LOGIN COMPONENT**
/\*_ @format _/

import { useRef, useState, useEffect } from "react";
import { setAccessToken } from "./context/tokenStore";
import axios from "./api/axios";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const LOGIN_URL = "/auth/login";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Login = () => {
const navigate = useNavigate();
const emailRef = useRef();
const errRef = useRef();

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState("");

    // NEW STATES (EMAIL VALIDATION)
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    // PASSWORD VIEW TOGGLE
    const [showPwd, setShowPwd] = useState(false);

    useEffect(() => {
    	emailRef.current.focus();
    }, []);

    useEffect(() => {
    	setValidEmail(EMAIL_REGEX.test(email));
    }, [email]);

    useEffect(() => {
    	setErrMsg("");
    }, [email, pwd]);

    const handleSubmit = async (e) => {
    	e.preventDefault();

    	try {
    		const response = await axios.post(LOGIN_URL, { email, pwd });

    		const accessToken = response?.data?.accessToken;

    		if (accessToken) {
    			setAccessToken(accessToken);
    			navigate("/admin/employees", { replace: true });
    		} else {
    			setEmail("");
    			setPwd("");
    		}
    	} catch (err) {
    		if (!err?.response) {
    			setErrMsg("No Server Response");
    		} else if (err.response?.status === 400) {
    			setErrMsg("Missing email or Password");
    		} else if (err.response?.status === 401) {
    			setErrMsg("Invalid Credentials!");
    		} else {
    			setErrMsg("Login Failed");
    		}

    		errRef.current.focus();
    	}
    };

    const googleLogin = useGoogleLogin({
    	onSuccess: async (tokenResponse) => {
    		try {
    			const response = await axios.post("/auth/google/login", {
    				token: tokenResponse.access_token,
    			});

    			const accessToken = response.data?.accessToken ?? null;

    			if (accessToken) {
    				setAccessToken(accessToken);
    				navigate("/admin/employees", { replace: true });
    			}
    		} catch (err) {
    			if (err.response?.status === 401) {
    				setErrMsg("Account doesn't exist, please sign up!");
    			}
    		}
    	},
    	onError: () => {
    		console.log("Google login failed");
    	},
    });

    return (
    	<section className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-4">
    		<div className="w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-xl">
    			{/* ERROR */}
    			<p
    				ref={errRef}
    				className={`mb-4 text-sm text-red-400 ${errMsg ? "block" : "hidden"}`}
    			>
    				{errMsg}
    			</p>

    			<h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>

    			<form onSubmit={handleSubmit} className="space-y-5">
    				{/* EMAIL */}
    				<div>
    					<label className="flex items-center justify-between text-sm font-medium mb-1">
    						Email
    						<span className="flex gap-2">
    							<FontAwesomeIcon
    								icon={faCheck}
    								className={validEmail ? "text-green-400" : "hidden"}
    							/>
    							<FontAwesomeIcon
    								icon={faTimes}
    								className={email && !validEmail ? "text-red-400" : "hidden"}
    							/>
    						</span>
    					</label>

    					<input
    						type="email"
    						id="email"
    						ref={emailRef}
    						autoComplete="off"
    						onChange={(e) => setEmail(e.target.value)}
    						onFocus={() => setEmailFocus(true)}
    						onBlur={() => setEmailFocus(false)}
    						value={email}
    						required
    						className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none"
    					/>

    					<p
    						className={`mt-1 text-xs text-gray-400 ${
    							emailFocus && email && !validEmail ? "block" : "hidden"
    						}`}
    					>
    						Please enter a valid email address.
    					</p>
    				</div>

    				{/* PASSWORD */}
    				<div>
    					<label className="block text-sm font-medium mb-1">Password</label>

    					<div className="relative">
    						<input
    							type={showPwd ? "text" : "password"}
    							id="password"
    							onChange={(e) => setPwd(e.target.value)}
    							value={pwd}
    							required
    							className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none"
    						/>

    						<button
    							type="button"
    							onClick={() => setShowPwd(!showPwd)}
    							className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
    						>
    							{showPwd ? "🙈" : "👁"}
    						</button>
    					</div>
    				</div>

    				{/* LOGIN BUTTON */}
    				<button
    					type="submit"
    					className="w-full py-2 rounded-lg font-semibold bg-blue-600 hover:bg-blue-700 transition"
    				>
    					Sign In
    				</button>

    				{/* GOOGLE */}
    				<div className="flex items-center my-4">
    					<div className="grow border-t border-gray-700"></div>
    					<span className="px-3 text-gray-400">OR</span>
    					<div className="grow border-t border-gray-700"></div>
    				</div>

    				<button
    					type="button"
    					onClick={() => googleLogin()}
    					className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-200"
    				>
    					Continue with Google
    				</button>
    			</form>

    			<p className="text-center text-sm mt-6 text-gray-400">
    				Need an Account?
    				<Link to="/" className="text-blue-400 hover:underline ml-1">
    					Sign Up
    				</Link>
    			</p>
    		</div>
    	</section>
    );

};

export default Login;

---

**SIGN UP / REGISTER COMPONENT**
/\*_ @format _/

import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "./api/axios";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

const USER*REGEX = /^[A-z]A-z0-9-*]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const REGISTER_URL = "/auth/register";

const Register = () => {
const userRef = useRef();
const errRef = useRef();
const navigate = useNavigate();

    // FORM STATES
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [matchPwd, setMatchPwd] = useState("");

    // VALID STATES
    const [validName, setValidName] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validPwd, setValidPwd] = useState(false);
    const [validMatch, setValidMatch] = useState(false);

    // FOCUS STATES
    const [userFocus, setUserFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    // UI STATES
    const [errMsg, setErrMsg] = useState("");

    useEffect(() => {
    	userRef.current.focus();
    }, []);

    useEffect(() => {
    	setValidName(USER_REGEX.test(user));
    	setValidEmail(EMAIL_REGEX.test(email));
    	setValidPwd(PWD_REGEX.test(pwd));
    	setValidMatch(pwd === matchPwd);
    }, [user, email, pwd, matchPwd]);

    useEffect(() => {
    	setErrMsg("");
    }, [user, email, pwd, matchPwd]);

    // -------------------------
    // MANUAL SIGNUP
    // -------------------------
    const handleSubmit = async (e) => {
    	e.preventDefault();

    	if (!validName || !validEmail || !validPwd || !validMatch) {
    		setErrMsg("Invalid Entry");
    		return;
    	}

    	try {
    		const response = await axios.post(REGISTER_URL, {
    			user,
    			email,
    			pwd,
    		});

    		if (response.status === 201) {
    			navigate("/login", { replace: true });
    		}

    		setUser("");
    		setEmail("");
    		setPwd("");
    		setMatchPwd("");
    	} catch (err) {
    		if (!err?.response) {
    			setErrMsg("No Server Response");
    		} else if (err.response?.status === 409) {
    			setErrMsg("User or Email already exists");
    		} else {
    			setErrMsg("Registration Failed");
    		}

    		errRef.current.focus();
    	}
    };

    const googleLogin = useGoogleLogin({
    	onSuccess: async (tokenResponse) => {
    		try {
    			await axios.post("/auth/google/register", {
    				token: tokenResponse.access_token,
    			});

    			navigate("/login", { replace: true });
    		} catch (err) {
    			console.log(err);
    			if (err.response.status == 409) {
    				setErrMsg("Email already exists, please sign in!");
    			}
    		}
    	},
    	onError: () => {
    		console.log("Google login failed");
    	},
    });

    return (
    	<section className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-4">
    		<div className="w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-xl">
    			<p
    				ref={errRef}
    				className={`mb-4 text-sm text-red-400 ${errMsg ? "block" : "hidden"}`}
    			>
    				{errMsg}
    			</p>

    			<h1 className="text-3xl font-bold mb-6 text-center">Register</h1>

    			<form onSubmit={handleSubmit} className="space-y-5">
    				{/* USERNAME */}
    				<div>
    					<label className="flex items-center justify-between text-sm font-medium mb-1">
    						Username
    						<span className="flex gap-2">
    							<FontAwesomeIcon
    								icon={faCheck}
    								className={validName ? "text-green-400" : "hidden"}
    							/>
    							<FontAwesomeIcon
    								icon={faTimes}
    								className={validName || !user ? "hidden" : "text-red-400"}
    							/>
    						</span>
    					</label>

    					<input
    						type="text"
    						ref={userRef}
    						value={user}
    						onChange={(e) => setUser(e.target.value)}
    						onFocus={() => setUserFocus(true)}
    						onBlur={() => setUserFocus(false)}
    						className="w-full px-4 py-2 bg-gray-800 rounded-lg"
    					/>

    					<p
    						className={`mt-1 text-xs text-gray-400 ${
    							userFocus && user && !validName ? "block" : "hidden"
    						}`}
    					>
    						4 to 24 characters. Must begin with a letter.
    					</p>
    				</div>

    				{/* EMAIL */}
    				<div>
    					<label className="flex items-center justify-between text-sm font-medium mb-1">
    						Email
    						<span className="flex gap-2">
    							<FontAwesomeIcon
    								icon={faCheck}
    								className={validEmail ? "text-green-400" : "hidden"}
    							/>
    							<FontAwesomeIcon
    								icon={faTimes}
    								className={validEmail || !email ? "hidden" : "text-red-400"}
    							/>
    						</span>
    					</label>

    					<input
    						type="email"
    						value={email}
    						onChange={(e) => setEmail(e.target.value)}
    						onFocus={() => setEmailFocus(true)}
    						onBlur={() => setEmailFocus(false)}
    						className="w-full px-4 py-2 bg-gray-800 rounded-lg"
    					/>

    					<p
    						className={`mt-1 text-xs text-gray-400 ${
    							emailFocus && email && !validEmail ? "block" : "hidden"
    						}`}
    					>
    						Please enter a valid email address.
    					</p>
    				</div>

    				{/* PASSWORD */}
    				<div>
    					<label className="flex items-center justify-between text-sm font-medium mb-1">
    						Password
    						<span className="flex gap-2">
    							<FontAwesomeIcon
    								icon={faCheck}
    								className={validPwd ? "text-green-400" : "hidden"}
    							/>
    							<FontAwesomeIcon
    								icon={faTimes}
    								className={validPwd || !pwd ? "hidden" : "text-red-400"}
    							/>
    						</span>
    					</label>

    					<input
    						type="password"
    						value={pwd}
    						onChange={(e) => setPwd(e.target.value)}
    						onFocus={() => setPwdFocus(true)}
    						onBlur={() => setPwdFocus(false)}
    						className="w-full px-4 py-2 bg-gray-800 rounded-lg"
    					/>

    					<p
    						className={`mt-1 text-xs text-gray-400 ${
    							pwdFocus && !validPwd ? "block" : "hidden"
    						}`}
    					>
    						8 to 24 chars, upper, lower, number, special char.
    					</p>
    				</div>

    				{/* CONFIRM PASSWORD */}
    				<div>
    					<label className="flex items-center justify-between text-sm font-medium mb-1">
    						Confirm Password
    						<span className="flex gap-2">
    							<FontAwesomeIcon
    								icon={faCheck}
    								className={
    									validMatch && matchPwd ? "text-green-400" : "hidden"
    								}
    							/>
    							<FontAwesomeIcon
    								icon={faTimes}
    								className={
    									validMatch || !matchPwd ? "hidden" : "text-red-400"
    								}
    							/>
    						</span>
    					</label>

    					<input
    						type="password"
    						value={matchPwd}
    						onChange={(e) => setMatchPwd(e.target.value)}
    						onFocus={() => setMatchFocus(true)}
    						onBlur={() => setMatchFocus(false)}
    						className="w-full px-4 py-2 bg-gray-800 rounded-lg"
    					/>

    					<p
    						className={`mt-1 text-xs text-gray-400 ${
    							matchFocus && !validMatch ? "block" : "hidden"
    						}`}
    					>
    						Must match password.
    					</p>
    				</div>

    				{/* BUTTON */}
    				<button
    					disabled={!validName || !validEmail || !validPwd || !validMatch}
    					className={`w-full py-2 rounded-lg font-semibold ${
    						!validName || !validEmail || !validPwd || !validMatch
    							? "bg-gray-700 cursor-not-allowed"
    							: "bg-blue-600 hover:bg-blue-700"
    					}`}
    				>
    					Sign Up
    				</button>

    				{/* GOOGLE */}
    				<div className="flex items-center my-4">
    					<div className="grow border-t border-gray-700"></div>
    					<span className="px-3 text-gray-400">OR</span>
    					<div className="grow border-t border-gray-700"></div>
    				</div>

    				<button
    					type="button"
    					onClick={() => googleLogin()}
    					className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-200"
    				>
    					Continue with Google
    				</button>
    			</form>

    			<p className="text-center text-sm mt-6 text-gray-400">
    				Already registered?{" "}
    				<Link to="/login" className="text-blue-400 hover:underline">
    					Sign In
    				</Link>
    			</p>
    		</div>
    	</section>
    );

};

export default Register;

---

---

**EMPLOYEES COMPONENT**
/\*_ @format _/

import React, { useEffect, useContext } from "react";
import { useState } from "react";
import axios from "./api/axios";
import { AuthContext } from "./context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { fetchRefresh } from "./context/AuthProvider";
import { getAccessToken, setAccessToken } from "./context/tokenStore";
export default function Employees() {
const [employees, setEmployees] = useState([]);
const { accessToken, loading, setToken } = useContext(AuthContext);
const navigate = useNavigate();

    useEffect(() => {
    	if (!loading) {
    		fetchEmployees();
    	}
    }, [accessToken, loading]);

    useEffect(() => {
    	console.log("TOKEN BEFORE REQUEST:", getAccessToken());
    	fetchEmployees();
    }, []);

    async function fetchEmployees() {
    	try {
    		const response = await axios.get("/admin/employees");
    		// console.log(response);
    		setEmployees(() => response.data?.employees);
    	} catch (error) {
    		console.log(error);
    		// if (error.response.status == 401) {
    		// 	navigate("/login", { replace: true });
    		// }
    		// if (error?.response?.status == 403) {
    		// 	console.log("THIS CODE DOESNT RUN");
    		// 	const newAccessToken = await fetchRefresh();
    		// 	if (!newAccessToken) {
    		// 		navigate("/login", { replace: true });
    		// 	} else {
    		// 		const response = await axios.get("/admin/employees");
    		// 		// console.log(response);
    		// 		setEmployees(() => response.data?.employees);
    		// 	}
    		// }
    	}
    }

    async function handleBtnClick(id) {
    	try {
    		let response = await axios.put("http://localhost:3500/admin/", { id });

    		// console.log(res);
    		console.log("TOKEN USED TO REQUEST:", getAccessToken());
    		const { updatedEmployees } = await response.data;

    		setEmployees(() => updatedEmployees);
    	} catch (error) {
    		console.log(error);
    		// if (error?.response.status == 403) {
    		// 	const newAccessToken = await fetchRefresh();
    		// 	console.log("REQUESTED NEW TOKEN: ", newAccessToken);
    		// 	if (!newAccessToken) {
    		// 		// navigate("/login", { replace: true });
    		// 		// return;
    		// 		console.log("TOKEN INVALID...");
    		// 		console.log("REQUESTED NEW TOKEN: ", newAccessToken);
    		// 	} else {
    		// 		let response = await axios.put("http://localhost:3500/admin/", {
    		// 			id,
    		// 		});
    		// 		const { updatedEmployees } = await response.data;
    		// 	}
    		// }
    	}
    }

    async function logOut() {
    	try {
    		setAccessToken(null);
    		const response = await axios.get("http://localhost:3500/logout");

    		console.log(response);

    		if (response.status === 204) {
    			navigate("/login", { replace: true });
    		}
    	} catch (error) {
    		console.log(error);
    	}
    }

    if (loading)
    	return <h2 className="text-2xl font-bold mb-6">Employees Loading</h2>;

    return (
    	<div className="p-6 bg-gray-100 min-h-screen">
    		<div className="flex justify-between items-center">
    			<h2 className="text-2xl font-bold mb-6">Employees </h2>
    			<button
    				onClick={logOut}
    				className="bg-blue-500 cursor-pointer text-white rounded-md p-2"
    			>
    				log out
    			</button>
    		</div>

    		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    			{employees.map((emp, index) => (
    				<div
    					key={emp.id}
    					className={`rounded-xl shadow-md p-5 border transition hover:scale-[1.02] ${
    						emp.isActive
    							? "bg-green-50 border-green-200"
    							: "bg-red-50 border-red-200"
    					}`}
    				>
    					<h3 className="text-lg font-semibold mb-2">
    						{emp.firstName} {emp.lastName}
    					</h3>

    					<p className="text-sm text-gray-700">
    						<span className="font-medium">Email:</span> {emp.email}
    					</p>

    					<p className="text-sm text-gray-700">
    						<span className="font-medium">Role:</span> {emp.role}
    					</p>

    					<p className="text-sm text-gray-700">
    						<span className="font-medium">Department:</span> {emp.department}
    					</p>

    					<p className="text-sm text-gray-700">
    						<span className="font-medium">Salary:</span> R{emp.salary}
    					</p>

    					<div className="mt-3">
    						<span
    							onClick={() => handleBtnClick(index + 1)}
    							className={`text-xs transition-all duration-300 hover:scale-110 font-semibold px-2 py-1 inline-block cursor-pointer rounded-full ${
    								emp.isActive
    									? "bg-green-200 text-green-800"
    									: "bg-red-200 text-red-800"
    							}`}
    						>
    							{emp.isActive ? "Active" : "Inactive"}
    						</span>
    					</div>
    				</div>
    			))}
    		</div>
    	</div>
    );

}

**MAIN COMPONENT**
/\*_ @format _/

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import "./api/interceptors.js";
import { GoogleOAuthProvider } from "@react-oauth/google";
createRoot(document.getElementById("root")).render(
<StrictMode>
<GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
<AuthProvider>
<App />
</AuthProvider>
</GoogleOAuthProvider>
</StrictMode>,
);

---

**BACKEND**
//SERVER::
**INDEX.JS**
/\*_ @format _/

const express = require("express");
const cors = require("cors");
const auth_routes = require("./routes/auth_routes");
const verifyJWT = require("./middleware/verifyJWT");
const admin_routes = require("./routes/admin_routes");
const cookieParser = require("cookie-parser");
const refresh_route = require("./routes/refresh_route");
const logout_route = require("./routes/logout");
const credentials = require("./middleware/credentials");
const corsOptions = require("./config/corsOptions");
const app = express();

// middleware

app.use(credentials);

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//ROUTES
app.use("/auth", auth_routes);

//REFRESH ROUTE MUST ALWAYS COME BEFORE ACCESSTOKEN VERIFIER SINCE IT ALWAYS SENDS AN EXPIRED ACCESSTOKEN AND A REFRESH TOKEN TO REQUEST FOR NEW ACCESS TOKEN
app.use("/refresh", refresh_route);
//TO PROTECT ONE ROUTE
// app.use("/admin", verifyJWT, admin_routes);

app.use("/logout", logout_route);

//TO PROTECT MANY ROUTES, YOU ADD THE VERIFIER ON TOP OF THE ROUTES
app.use(verifyJWT);
app.use("/admin", admin_routes);

app.listen(3500, () => {
console.log("Server running on port 3500");
});

---

**ROUTES**
/\*_ @format _/

**ADMIN ROUTES**
const employeesController = require("../controllers/employeesController");
const express = require("express");
const updateEmployeeController = require("../controllers/updateEmployeeController");

const admin_routes = express.Router();
admin_routes.get("/employees", employeesController);
admin_routes.put("/", updateEmployeeController);

module.exports = admin_routes;

**AUTH ROUTES**
/\*_ @format _/
const handleNewUser = require("../controllers/registerController");
const logInController = require("../controllers/logInController");
const googleAuthLogIn = require("../controllers/googleAuthLogIn");
const express = require("express");
const googleAuthRegister = require("../controllers/googleAuthRegister");

const ROLES_LIST = {
Admin: 5150,
Editor: 1984,
User: 2001,
};

const auth_routes = express.Router();
auth_routes.post("/register", handleNewUser);
auth_routes.post("/google/login", googleAuthLogIn);
auth_routes.post("/google/register", googleAuthRegister);

auth_routes.post("/login", logInController);

module.exports = auth_routes;

**LOGOUT ROUTE**
/\*_ @format _/
const logoutController = require("../controllers/logoutController");
const express = require("express");

const logout_route = express.Router();
logout_route.get("/", logoutController);

module.exports = logout_route;

**REFRESH ROUTE**
/\*_ @format _/
const refreshTokenController = require("../controllers/refreshTokenController");
const express = require("express");

const refresh_route = express.Router();
refresh_route.get("/", refreshTokenController);

module.exports = refresh_route;

---

**CONTROLLERS**
**EMPLOYEES CONTROLLER**
/\*_ @format _/

const employeesDB = {
employees: require("../models/employees.json"),
setEmployees: function (data) {
this.employees = data;
},
};

const employeesController = async (req, res) => {
res.json({ employees: employeesDB.employees });
};

module.exports = employeesController;

**GOOGLE AUTH LOGIN**
/\*_ @format _/

const usersDB = {
users: require("../models/users.json"),
setUsers: function (data) {
this.users = data;
},
};

const path = require("path");
const fsPromises = require("fs").promises;
const jwt = require("jsonwebtoken");
require("dotenv").config();

const googleAuthLogIn = async (req, res) => {
try {
const { token } = req.body;
console.log("TOKE: ", token);

    	// FETCH GOOGLE USER INFO
    	const googleResponse = await fetch(
    		"https://www.googleapis.com/oauth2/v2/userinfo",
    		{
    			headers: {
    				Authorization: `Bearer ${token}`,
    			},
    		},
    	);

    	const googleUser = await googleResponse.json();
    	console.log("googleUser");
    	console.log(googleUser);

    	const { id: googleId, email, name, picture } = googleUser;

    	let foundUser = usersDB.users.find((person) => person.email === email);

    	console.log("foundUser");
    	console.log(foundUser);

    	if (!foundUser)
    		return res
    			.status(401)
    			.json({ message: "Account doesn't exist,  please sign up!" });

    	//IF USER EXIST, WE RETURN ACCESS TOKEN
    	const accessToken = jwt.sign(
    		{ email: foundUser.email },
    		process.env.ACCESS_TOKEN_SECRET,
    		{ expiresIn: "5s" },
    	);
    	const refreshToken = jwt.sign(
    		{ email: foundUser.email },
    		process.env.REFRESH_TOKEN_SECRET,
    		{ expiresIn: "1min" },
    	);

    	//SAVING REFRESH TOKEN
    	const otherUsers = usersDB.users.filter(
    		(person) => person.email !== foundUser.email,
    	);
    	const currentuser = { ...foundUser, refreshToken };

    	usersDB.setUsers([...otherUsers, currentuser]);

    	await fsPromises.writeFile(
    		path.join(__dirname, "..", "models", "users.json"),
    		JSON.stringify(usersDB.users),
    	);

    	//SENDING THE JWTs TO CLIENT
    	//COOKIES ARE SENT WITH EVERY REQUEST, THIS COOKIE IS INACCESSIBLE WITH JS COZ ITS SET TO HTTP-ONLY, AND EXPIRES AFTER 24 HOURS I.E MAXAGE (milliseconds)
    	res.cookie("jwt", refreshToken, {
    		sameSite: "none",
    		secure: true,
    		httpOnly: true,
    		maxAge: 24 * 60 * 60 * 1000,
    	});

    	res.json({ accessToken });
    } catch (err) {
    	console.error(err);
    	return res.status(500).json({
    		message: "Google auth failed",
    	});
    }

};

module.exports = googleAuthLogIn;

**GOOGLE AUTH REGISTER**
/\*_ @format _/

const usersDB = {
users: require("../models/users.json"),
setUsers: function (data) {
this.users = data;
},
};

const fsPromises = require("fs").promises;
const path = require("path");
const bcrypt = require("bcrypt");

const googleAuthRegister = async (req, res) => {
const { token } = req.body;
console.log("TOKE: ", token);

    // FETCH GOOGLE USER INFO

    try {
    	const googleResponse = await fetch(
    		"https://www.googleapis.com/oauth2/v2/userinfo",
    		{
    			headers: {
    				Authorization: `Bearer ${token}`,
    			},
    		},
    	);

    	const googleUser = await googleResponse.json();
    	console.log("googleUser");
    	console.log(googleUser);

    	const { id, email, name, picture } = googleUser;

    	//check duplicate usernames in the db
    	const duplicate = usersDB.users.find((person) => person.email === email);

    	if (duplicate)
    		return res.status(409).json({ message: "Email already exists" }); //conflict

    	//encrypt the password
    	const newUser = {
    		name: name,
    		picture,
    		email,
    		googleId: id,
    		authProviders: ["google"],
    	};
    	console.log("newUser");
    	console.log(newUser);
    	//add newUser to DB
    	usersDB.setUsers([...usersDB.users, newUser]);

    	await fsPromises.writeFile(
    		path.join(__dirname, "..", "models", "users.json"),
    		JSON.stringify(usersDB.users),
    	);

    	console.log(usersDB.users);
    	return res.status(201).json({
    		message: "User created",
    		user: newUser,
    	});
    } catch (error) {
    	console.log("ERROR OCCURED");
    	console.log(error);
    	return res.status(500).json({ message: error.message });
    }

};

module.exports = googleAuthRegister;

**LOGIN CONTROLLER**
/\*_ @format _/

//IMPORT USERS
const usersDB = {
users: require("../models/users.json"),
setUsers: function (data) {
this.users = data;
},
};

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
require("dotenv").config();
const fsPromises = require("fs").promises;
const path = require("path");

const logInController = async (req, res) => {
const { email, pwd } = req.body;

    if (!email || !pwd)
    	return res
    		.status(400)
    		.json({ success: false, message: "Username and password required!" });

    try {
    	//CHECK USERNAME FROM DATABASE
    	const foundUser = usersDB.users.find((person) => person.email === email);

    	console.log("found User");
    	console.log(foundUser);

    	if (!foundUser)
    		return res
    			.status(401)
    			.json({ message: "Account doesn't exist, please sign up!" });
    	//CHECK IF PASSWORD MATCH PASSWORD IN DB
    	const match = await bcrypt.compare(pwd, foundUser.password);
    	console.log("match ", match);
    	if (match) {
    		//JWTs
    		const accessToken = jwt.sign(
    			{ email: foundUser.email },
    			process.env.ACCESS_TOKEN_SECRET,
    			{ expiresIn: "5s" },
    		);
    		const refreshToken = jwt.sign(
    			{ email: foundUser.email },
    			process.env.REFRESH_TOKEN_SECRET,
    			{ expiresIn: "1min" },
    		);

    		//SAVING REFRESH TOKEN
    		const otherUsers = usersDB.users.filter(
    			(person) => person.email !== foundUser.email,
    		);
    		const currentuser = { ...foundUser, refreshToken };

    		usersDB.setUsers([...otherUsers, currentuser]);

    		await fsPromises.writeFile(
    			path.join(__dirname, "..", "models", "users.json"),
    			JSON.stringify(usersDB.users),
    		);

    		//SENDING THE JWTs TO CLIENT
    		//COOKIES ARE SENT WITH EVERY REQUEST, THIS COOKIE IS INACCESSIBLE WITH JS COZ ITS SET TO HTTP-ONLY, AND EXPIRES AFTER 24 HOURS I.E MAXAGE (milliseconds)
    		res.cookie("jwt", refreshToken, {
    			sameSite: "none",
    			secure: true,
    			httpOnly: true,
    			maxAge: 24 * 60 * 60 * 1000,
    		});

    		res.json({ accessToken });
    	} else {
    		res.status(403).json({ message: "Invalid Credentials!" });
    	}
    } catch (error) {
    	res.status(401).json({ message: "Account doesn't exist, please sign up!" });
    }

};

module.exports = logInController;

**LOGOUT CONTROLLER**
/\*_ @format _/

//IMPORT USERS
const usersDB = {
users: require("../models/users.json"),
setUsers: function (data) {
this.users = data;
},
};

const fsPromises = require("fs").promises;
const path = require("path");

const logoutController = async (req, res) => {
//DELETE ACCESSTOKEN IN CLIENT MEMORY

    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); //No Content

    const refreshToken = cookies.jwt;

    //CHECK IF WE HAVE IT IN DB

    const foundUser = usersDB.users.find(
    	(person) => person.refreshToken === refreshToken,
    );

    if (!foundUser) {
    	//DELETE THE COOKIE IN FRONTEND, COZ FRONTEND JS DOESN'T HAVE ACCESS TO THIS COOKIE, AND YOU MUST PASS NOT ONLY THAT COOKIE NAME BUT ALSO ITS OPTIONS, BUT NOT ALL ARE REQUIRED LIKE MAXAGE AND EXPIRES IN AREN'T REQUIRED
    	res.clearCookie("jwt", { httpOnly: true });
    	return res.sendStatus(204); //No Content
    }

    //DELETE REFRESHTOKEN FROM DB
    const otherUsers = usersDB.users.filter(
    	(person) => person.refreshToken !== refreshToken,
    );
    const currentUser = { ...foundUser, refreshToken: "" };

    usersDB.setUsers([...otherUsers, currentUser]);

    await fsPromises.writeFile(
    	path.join(__dirname, "..", "models", "users.json"),
    	JSON.stringify(usersDB.users),
    );

    res.clearCookie("jwt", { httpOnly: true }); //secure-true
    res.sendStatus(204);

};

module.exports = logoutController;

**LOGOUT CONTROLLER**
/\*_ @format _/

//IMPORT USERS
const usersDB = {
users: require("../models/users.json"),
setUsers: function (data) {
this.users = data;
},
};

const fsPromises = require("fs").promises;
const path = require("path");

const logoutController = async (req, res) => {
//DELETE ACCESSTOKEN IN CLIENT MEMORY

    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); //No Content

    const refreshToken = cookies.jwt;

    //CHECK IF WE HAVE IT IN DB

    const foundUser = usersDB.users.find(
    	(person) => person.refreshToken === refreshToken,
    );

    if (!foundUser) {
    	//DELETE THE COOKIE IN FRONTEND, COZ FRONTEND JS DOESN'T HAVE ACCESS TO THIS COOKIE, AND YOU MUST PASS NOT ONLY THAT COOKIE NAME BUT ALSO ITS OPTIONS, BUT NOT ALL ARE REQUIRED LIKE MAXAGE AND EXPIRES IN AREN'T REQUIRED
    	res.clearCookie("jwt", { httpOnly: true });
    	return res.sendStatus(204); //No Content
    }

    //DELETE REFRESHTOKEN FROM DB
    const otherUsers = usersDB.users.filter(
    	(person) => person.refreshToken !== refreshToken,
    );
    const currentUser = { ...foundUser, refreshToken: "" };

    usersDB.setUsers([...otherUsers, currentUser]);

    await fsPromises.writeFile(
    	path.join(__dirname, "..", "models", "users.json"),
    	JSON.stringify(usersDB.users),
    );

    res.clearCookie("jwt", { httpOnly: true }); //secure-true
    res.sendStatus(204);

};

module.exports = logoutController;

**REFRESH TOKEN CONTROLLER**
/\*_ @format _/

//IMPORT USERS
const usersDB = {
users: require("../models/users.json"),
setUsers: function (data) {
this.users = data;
},
};

const jwt = require("jsonwebtoken");
require("dotenv").config();

const refreshTokenController = (req, res) => {
const cookies = req.cookies;

    // console.log(cookies);

    if (!cookies?.jwt) return res.sendStatus(401);

    const refreshToken = cookies.jwt;

    // console.log(refreshToken);

    const foundUser = usersDB.users.find(
    	(person) => person.refreshToken === refreshToken,
    );

    // console.log(foundUser);

    if (!foundUser) return res.sendStatus(403); //Forbidden

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    	console.log("decoded");
    	// console.log(decoded);
    	if (err || foundUser.username !== decoded.username)
    		return res.sendStatus(403);

    	const accessToken = jwt.sign(
    		{ username: decoded.username },
    		process.env.ACCESS_TOKEN_SECRET,
    		{ expiresIn: "30s" },
    	);

    	res.json({ accessToken });
    });

};

module.exports = refreshTokenController;

**REGISTER CONTROLLER**
/\*_ @format _/

const usersDB = {
users: require("../models/users.json"),
setUsers: function (data) {
this.users = data;
},
};

const fsPromises = require("fs").promises;
const path = require("path");
const bcrypt = require("bcrypt");
const { hash } = require("crypto");

const handleNewUser = async (req, res) => {
const { user, email, pwd } = req.body;

    console.log(user, email, pwd);
    if (!user || !pwd)
    	return res
    		.status(400)
    		.json({ message: "Username,email and password are required!" });

    //check duplicate usernames in the db
    const duplicate = usersDB.users.find((person) => person.email === email);

    if (duplicate)
    	return res.status(409).json({ message: "Email already exists" }); //conflict

    try {
    	//encrypt the password
    	const hashedPwd = await bcrypt.hash(pwd, 10);

    	//create newUser credentials
    	const newUser = {
    		name: user,
    		email,
    		password: hashedPwd,
    		authProviders: ["local"],
    	};
    	console.log(newUser);
    	//add newUser to DB
    	usersDB.setUsers([...usersDB.users, newUser]);

    	await fsPromises.writeFile(
    		path.join(__dirname, "..", "models", "users.json"),
    		JSON.stringify(usersDB.users),
    	);

    	console.log(usersDB.users);
    	return res.status(201).json({
    		message: "User created",
    		user: newUser,
    	});
    } catch (error) {
    	return res.status(500).json({ message: error.message });
    }

};

module.exports = handleNewUser;

**UPDATE EMPLOYEES CONTROLLER**
/\*_ @format _/
const employeesDB = {
employees: require("../models/employees.json"),
setEmployees: function (data) {
this.employees = data;
},
};

const path = require("path");
const fsPromises = require("fs").promises;

const updateEmployeeController = async (req, res) => {
const id = Number(req.body.id);

    try {
    	const foundEmployee = employeesDB.employees.find((emp) => emp.id === id);

    	if (!foundEmployee) {
    		return res.status(404).json({ message: "Employee not found" });
    	}

    	const updatedEmployee = {
    		...foundEmployee,
    		isActive: !foundEmployee.isActive,
    	};

    	const updatedEmployees = employeesDB.employees.map((emp) =>
    		emp.id === id ? updatedEmployee : emp,
    	);

    	employeesDB.setEmployees(updatedEmployees);

    	await fsPromises.writeFile(
    		path.join(__dirname, "..", "models", "employees.json"),
    		JSON.stringify(updatedEmployees, null, 2),
    	);

    	res.json({ updatedEmployees });
    } catch (error) {
    	console.log(error);
    	res.status(500).json({ message: "Server error" });
    }

};

module.exports = updateEmployeeController;

//////////////////////

---

**STATUS CODES**
200 - OK, SUCCESS
201 - CREATED, NEW DATA ADDED
204 - NO CONTENT, DELETE SUCCESS
400 - BAD REQUEST, MISSING/INVALID INPUT
401 - UNAUTHORIZED, NOT LOGGEN IN/INVALID CREDENTIALS
403 - FORBIDDEN, NO PERMISSION, TOKEN EXPIRED
404 - NOT FOUND, ROUTE/DATA MISSING
409 - CONFICT, DUPLICATE DATA
422 - UNPROCESSABLE, VALIDATION ERROR
500 - SERVER ERROR, BACKEND BROKE

---

**BACKEND PACKAGES**
{
"dependencies": {
"bcrypt": "^6.0.0",
"cookie-parser": "^1.4.7",
"cors": "^2.8.6",
"dotenv": "^17.4.2",
"express": "^5.2.1",
"google-auth-library": "^10.7.0",
"jsonwebtoken": "^9.0.3",
"node-fetch": "^3.3.2",
"nodemon": "^3.1.14"
}
}

**BACKEND ENV**
ACCESS_TOKEN_SECRET=5f081efab22c500476383482a9443ac0fd9d73d536bfc864f390ae02ec0a72a7c8aec4e27ee3c04186d8d7c575fcc2937014fb029cfb4aec21f545bb0b0c3ec6

REFRESH_TOKEN_SECRET=9b81df7c402f27e7d9c79ef41346ef5bde0a6f3c7c47546732716b879ad3e8b3bdead2234f1324ea8b5b02f5de5093958dc1705bffa89e83ca3f7c988f3e3bc0

GOOGLE_CLIENT_ID=90153502845-1fqvk3dsotrah39nh3qj27rbrho6hbh6.apps.googleusercontent.com

1. MUST IMPORT AND CONFIGURE, require("dotenv").config();
2. process.env.GOOGLE_CLIENT_ID

---

**PROTECTING FRONTEND PAGES WITH TOKEN LIKE PROTECTED ROUTES**

1. WRAP ALL ADMIN PAGES WITHIN THE PROTECTED ROUTES COMPONENT::
   //THIS WRAPS ALL ADMIN PAGES, SO WHEN THEY'RE VISITED THE PROTECTEDROUTE COMP RENDERS, AND IT CAN DECIDE TO RETURN THE VISITED URL COMP SINCE IT HAS ACCESS TO IT THROUGH THE <OUTLET> AS IT IS PARENT,
2. THE LOGIC, IS CHECKS IF THE TOKEN IS VALID AND RETURN THE REQUESTED COMP AND IF TOKEN IS NOT VALID IT JUST RETURNS THE LOGIN PAGE, SO IT DOESNT HAVE TO REDIRECT SHOWING A SNEAK PEAK OF THE ADMIN PAGE
   /\*_ @format _/

import { Navigate, Outlet } from "react-router-dom";
import { getAccessToken } from "./tokenStore";

const ProtectedRoute = () => {
const token = getAccessToken();

    return token ? <Outlet /> : <Navigate to="/admin/login" replace />;

};

export default ProtectedRoute;

---

**CORS OPTIONS**
/\*_ @format _/

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

---

**ALLOWED ORIGINS**
/\*_ @format _/

const allowedOrigins = [
"https://www.website.com",
"http://127.0.0.1:5173",
"http://localhost:5173",
"http://localhost:3500",
"http://127.0.0.1:3500",
];

module.exports = allowedOrigins;

---

**USING FORM ATTR TO GET INPUT**
const handleSubmit = async (e) => {
e.preventDefault();

    	const formData = new FormData(e.target);

    	console.log(formData.get("username"));

    	try {
    		const response = await axios.post("api/admin/login", {
    			username: formData.get("username"),
    			email: formData.get("email"),
    			password: formData.get("password"),
    		});

    		console.log(response);
    	} catch (error) {
    		console.log(error);
    	}
    };

---

**GET A RANDOM STRING TO USE AS SECRET FOR JWTs**
const crypto = require("crypto");

const secret = crypto.randomBytes(64).toString("hex");
console.log(secret);
//ON TERMINAL> node
//ON TERMINAL> require("crypto").randomBytes(64).toString("hex")
//ON TERMINAL> 92eca5661f58b44ef847e2e469365bbd14f726401b34be5ef6b0bcea357100daef3d538771f91bfce30056a55086a48b57b387caace182f95beafe04a3f5dd65

USE IT AS A SECRET FOR YOUR JWTs

---

**ERROR HANDLING**
try {
const response = await axios.post("api/admin/login", {
username: formData.get("username"),
email: formData.get("email"),
password: formData.get("password"),
});

    		const accessToken = response.data.accessToken;

    		setAccessToken(accessToken);

    		navigate("/admin/home", { replace: true });

    		console.log("accessToken", accessToken);
    		console.log(response);
    	} catch (error) {
    		console.error(error);

    		if (!error.response) {
    			setErrMsg("No response from server.");
    		} else if (error.response.status === 400) {
    			setErrMsg("Missing username, email or password.");
    		} else if (error.response.status === 401) {
    			setErrMsg("Invalid credentials.");
    		} else if (error.response.status === 403) {
    			setErrMsg("Access denied.");
    		} else if (error.response.status >= 500) {
    			setErrMsg("Server error. Please try again later.");
    		} else {
    			setErrMsg("Login failed.");
    		}
    	}
    };
