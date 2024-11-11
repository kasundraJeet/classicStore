const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const adminAuth = require("../models/adminAuth");
const {
  successResponseWithData,
  errorResponse,
  validationErrorWithData
} = require("../utils/responseHandlers");
dotenv.config();

exports.adminLogin = async (req, res) => {
  const { email, password, ipAddress } = req.body;

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASS
  ) {
    try {
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      const tokenExpiry = new Date(Date.now() + 60 * 60 * 1000);

      let existingLogin = await adminAuth.findOne({ ipAddress });

      if (existingLogin) {
        existingLogin.token = token;
        existingLogin.token_expired = tokenExpiry.toISOString();
        await existingLogin.save();

        return successResponseWithData(
          res,
          "Login successful",
          existingLogin.token
        );
      } else {
        const newLogin = new adminAuth({
          ipAddress,
          token,
          token_expired: tokenExpiry.toISOString(),
        });

        await newLogin.save();
        return successResponseWithData(res, "Login successful", newLogin.token);
      }
    } catch (e) {
      return errorResponse(res, e);
    }
  } else {
    return errorResponse(res, "Invalid username or password");
  }
};
