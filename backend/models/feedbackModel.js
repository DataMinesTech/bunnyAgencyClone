const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Name"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Email"],
  },
  message: {
    type: String,
    required: [true, "Please Enter Message"],
  },
});

module.exports = mongoose.model("Feedback", feedbackSchema);
