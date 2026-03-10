const Report = require("../models/Report");

// @desc    Add a new daily report
// @route   POST /api/reports
const addReport = async (req, res) => {
  try {
    const { employeeName, taskDescription, hoursWorked, date } = req.body;

    if (!employeeName || !taskDescription || !hoursWorked || !date) {
      return res.status(400).json({
        success: false,
        message: "All fields are required: employeeName, taskDescription, hoursWorked, date",
      });
    }

    const report = await Report.create({ employeeName, taskDescription, hoursWorked, date });

    res.status(201).json({
      success: true,
      message: "Report added successfully",
      data: report,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ success: false, message: messages.join(", ") });
    }
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// @desc    Get all reports
// @route   GET /api/reports
const getAllReports = async (req, res) => {
  try {
    const reports = await Report.find().sort({ date: -1, createdAt: -1 });

    res.status(200).json({
      success: true,
      count: reports.length,
      data: reports,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// @desc    Get reports by date
// @route   GET /api/reports/date/:date
const getReportsByDate = async (req, res) => {
  try {
    const { date } = req.params;

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
      return res.status(400).json({
        success: false,
        message: "Invalid date format. Use YYYY-MM-DD",
      });
    }

    const reports = await Report.find({ date }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: reports.length,
      date,
      data: reports,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

module.exports = { addReport, getAllReports, getReportsByDate };
