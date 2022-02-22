const express = require("express");
const {
  getAllContacts,
  createContact,
} = require("../controllers/contactController");
const { createFeedback } = require("../controllers/feedbackController");

const router = express.Router();

router.route("/contact/new").post(createContact);
router.route("/feedback/new").post(createFeedback);

module.exports = router;
