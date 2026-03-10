const express = require("express");
const router = express.Router();
const { addReport, getAllReports, getReportsByDate } = require("../controllers/reportController");

// POST   /api/reports         - Add a new daily report
router.post("/", addReport);

// GET    /api/reports          - Get all reports
router.get("/", getAllReports);

// GET    /api/reports/date/:date - Get reports by date (YYYY-MM-DD)
router.get("/date/:date", getReportsByDate);

module.exports = router;
