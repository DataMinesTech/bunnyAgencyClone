const express = require("express");

const { createFeedback } = require("../controllers/feedbackController");

const router = express.Router();

router.route("/feedback/new").post(createFeedback);

module.exports = router;
