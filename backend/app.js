const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const contact = require("./routes/contactRoutes");
const feedback = require("./routes/feedbackRoutes");

app.use("/api/v1", contact);
app.use("/api/v1", feedback);

module.exports = app;
