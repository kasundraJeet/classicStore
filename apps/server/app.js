const express = require("express");
const dotenv = require("dotenv");
const multer = require("multer");
const connectDB = require("./config/database");
const cors = require("cors");
const bodyParser = require("body-parser");
const adminLogin = require("./routes/adminAuthRouter");
const adminAuthMiddleware = require("./middleware/adminAuthMiddleware");

dotenv.config();
const app = express();

const upload = multer();
app.use(upload.none());

connectDB();

app.use(bodyParser.json());
app.use(cors());

app.use("/admin", adminAuthMiddleware, adminLogin);

app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
