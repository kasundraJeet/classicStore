const jwt = require("jsonwebtoken");
const AdminSession = require("../models/AdminSession");
const { errorResponse } = require("../utils/responseHandlers");

const adminAuthMiddleware = async (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return errorResponse(res, "Authorization token required");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const session = await AdminSession.findOne({ token, ipAddress: req.ip });

    if (!session || new Date(session.token_expired) < new Date()) {
      return errorResponse(
        res,
        "Session expired or invalid. Please log in again."
      );
    }

    req.admin = decoded;
    next();
  } catch (error) {
    console.error("Authorization error:", error);
    return errorResponse(res, "Unauthorized access");
  }
};

module.exports = adminAuthMiddleware;
