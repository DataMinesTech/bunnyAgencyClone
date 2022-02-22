const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter your FullName"],
  },
  email: {
    type: String,
    required: [true, "Please Enter your Email Address"],
  },
  twitterId: {
    type: String,
  },
  instagramId: {
    type: String,
  },
  phone: {
    type: Number,
    required: [true, "Please enter phone Number"],
  },
  country: {
    type: String,
    required: [true, "Please enter country"],
  },
  timeYouCanInvest: {
    type: String,
  },
  comfortableWith: {
    type: String,
  },
  readyForTiktoks: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Contact", contactSchema);
