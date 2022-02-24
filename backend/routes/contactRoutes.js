const express = require("express");
const {
  getAllContacts,
  createContact,
} = require("../controllers/contactController");

const router = express.Router();

router.route("/contact/new").post(createContact);

module.exports = router;
