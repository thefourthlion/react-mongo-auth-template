// imports and variables
require("dotenv").config();
const express = require("express");
const connectDB = require("./config/mongodb");
const errorHandler = require("./middleware/error");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

// setup
connectDB();
app.use(express.json());
app.use(cors());

// show app is running
app.get("/", (req, res, next) => {
  res.json({ api: "running" });
});

// connect to routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));

// error handling middleware
app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log("👂 on 📶 " + PORT);
});

// if server runs into weird error, shut down smoothly
process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});
