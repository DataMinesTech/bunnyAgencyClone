const Contact = require("../models/contactModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
//Create Contact

exports.createContact = catchAsyncErrors(async (req, res, next) => {
  const contact = await Contact.create(req.body);

  res.status(201).json({
    success: true,
    contact,
  });
});

exports.getAllContacts = (req, res) => {
  res.status(200).json({
    message: "Route is working Fine",
  });
};
