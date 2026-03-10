const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    employeeName: {
      type: String,
      required: [true, "Employee name is required"],
      trim: true,
    },
    taskDescription: {
      type: String,
      required: [true, "Task description is required"],
      trim: true,
    },
    hoursWorked: {
      type: Number,
      required: [true, "Hours worked is required"],
      min: [0.5, "Hours worked must be at least 0.5"],
      max: [24, "Hours worked cannot exceed 24"],
    },
    date: {
      type: String,
      required: [true, "Date is required"],
      match: [/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Report", reportSchema);
