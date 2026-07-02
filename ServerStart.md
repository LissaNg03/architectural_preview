<!-- @format -->

Perfect — you’re setting this up like a real full-stack project now 🔥

Let’s do it properly so your backend is clean and scalable.

---

# 🧱 1. Go into your server folder

```bash
cd server
```

---

# 📦 2. Initialize backend project

```bash
npm init -y
```

---

# ⚙️ 3. Install core dependencies

### 🟢 Main backend tools:

```bash
npm install express mongoose dotenv cors
```

### 💡 What they do:

- **express** → backend framework (routes, APIs)
- **mongoose** → MongoDB connection + schemas
- **dotenv** → environment variables (.env file)
- **cors** → allows frontend (React) to talk to backend

---

# 🛠️ 4. Install dev tools

```bash
npm install nodemon --save-dev
```

---

# 🚀 5. Add scripts to package.json

Open `package.json` and update:

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

---

# 📁 6. Create basic backend structure

Inside `server/`:

```
server/
  index.js
  .env
  /models
  /routes
  /controllers
  /config
```

---

# ⚡ 7. Basic Express server (index.js)

```js id="srv1"
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("API is running 🚀");
});

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log("MongoDB connected");
		app.listen(5000, () => console.log("Server running on port 5000"));
	})
	.catch((err) => console.log(err));
```

---

# 🔐 8. Create `.env` file

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

# ▶️ 9. Run your backend

```bash
npm run dev
```

---

# 🔥 10. Connect frontend to backend

Later in React:

```js id="fe1"
fetch("http://localhost:5000/api/designs");
```

---

# 🧠 IMPORTANT (for your project)

Since your architecture site already has:

- designs
- testimonials
- stats

👉 Start backend like this:

### Step 1:

Build **Design model first**

### Step 2:

Create:

- GET `/designs`
- POST `/designs` (admin only later)

---

# 🚀 BIG PICTURE (what you’re building now)

You are upgrading from:

> ❌ Static frontend app
> to
> 🔥 Real production full-stack system

With:

- React frontend
- Express API
- MongoDB database
- Cloudinary media

---

# 💡 Pro tip (VERY IMPORTANT)

Use this in server:

```js
app.use("/api/designs", designRoutes);
```

Don’t put all routes in `index.js` — keep it clean.

---

If you want next step, I can help you:

👉 build your **Design model + routes + controllers properly (MVC structure)**
👉 or connect your frontend to backend step-by-step
👉 or build your **admin dashboard system**

Just say 👍
