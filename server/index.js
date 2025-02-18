import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import router from "./Routes/ResearchRoute.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
// app.use(
//   cors({
//     origin: '*', // frontend URL
//     credentials: true, // if you're using cookies/sessions
//   })
// );

// Ensure MONGO_URI is defined
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
  console.error("❌ MONGO_URI is not defined in the .env file");
  process.exit(1); // Stop server if no MongoDB URI is provided
}

// Connect to MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => {
    console.error("❌ Could not connect to MongoDB:", err);
    process.exit(1); // Exit process if DB connection fails
  });

// Routes
app.use("/api", router);

//Serve frontend (client/dist) in production
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
