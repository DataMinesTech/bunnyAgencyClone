const Feedback = require("../models/feedbackModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//Create Feedback

exports.createFeedback = catchAsyncErrors(async (req, res, next) => {
  const feedback = await Feedback.create(req.body);

  res.status(201).json({
    success: true,
    feedback,
  });
});
