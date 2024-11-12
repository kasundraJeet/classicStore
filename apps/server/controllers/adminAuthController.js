const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const adminSessionSchema = require("../models/AdminSession");
const {
  successResponseWithData,
  errorResponse,
  validationErrorWithData,
} = require("../utils/responseHandlers");
dotenv.config();

exports.adminLogin = async (req, res) => {
  const { email, password, ipAddress } = req.body;

  if (!email || !password || !ipAddress) {
    return validationErrorWithData(res, "All fields are required", {});
  }

  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASS
  ) {
    return validationErrorWithData(res, "Invalid username or password", {});
  }

  try {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    const tokenExpiry = new Date(Date.now() + 60 * 60 * 1000).toISOString();

    let existingLogin = await adminSessionSchema.findOne({ ipAddress });

    if (existingLogin) {
      existingLogin.token = token;
      existingLogin.token_expired = tokenExpiry;
      await existingLogin.save();

      return successResponseWithData(res, "Login successful", {
        token: existingLogin.token,
        expiresAt: existingLogin.token_expired,
      });
    } else {
      const newLogin = new adminSessionSchema({
        ipAddress,
        token,
        token_expired: tokenExpiry,
      });

      await newLogin.save();
      return successResponseWithData(res, "Login successful", {
        token: newLogin.token,
        expiresAt: newLogin.token_expired,
      });
    }
  } catch (e) {
    console.error("Login error:", e);
    return errorResponse(
      res,
      "An error occurred during login. Please try again later."
    );
  }
};
