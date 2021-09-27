const express = require("express");
const router = express.Router({ mergeParams: true });
const { getDrivers } = require("../controllers/drivers");

router.route("/").get(getDrivers);

module.exports = router;
