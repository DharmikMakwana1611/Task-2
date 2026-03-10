const mongoose = require("mongoose");
const app = require("express");
import http from "http";

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

mongoose.connect('mongodb://localhost:27017/employee');