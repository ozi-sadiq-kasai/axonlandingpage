import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import router from "./Routes/ResearchRoute.js";
import cors from "cors";
// import path from "path";
// import { fileURLToPath } from "url";

const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

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
app.use('/api', router);

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
// // CORS configuration
// const allowedOrigins = [
//   'http://localhost:5173', // Frontend dev environment
//   'https://axonlandingpage.onrender.com', // Production frontend
// ];

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error('Not allowed by CORS'));
//       }
//     },
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true, // Include credentials if needed
//   })
// );

// // API Routes
// // app.use('/questionnaire', router);

// // Resolve __dirname and __filename in ESM
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Serve Frontend
// app.use(express.static(path.join(__dirname, '../client/dist')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/dist/index.html'));
// });

// // Connect to MongoDB and start the server
// const startServer = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
//     app.listen(process.env.PORT, () => {
//       console.log(`Server is running on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error('Error connecting to the database', error);
//     process.exit(1);
//   }
// };

// startServer();
