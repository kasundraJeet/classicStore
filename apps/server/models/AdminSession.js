const mongoose = require("mongoose");

const adminSessionSchema = new mongoose.Schema({
  ipAddress: {
    type: String,
    required: true,
  },
  lastLoginTime: {
    type: Date,
    default: Date.now,
  },
  token: {
    type: String,
    required: true,
  },
  token_expired: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("AdminSession", adminSessionSchema);