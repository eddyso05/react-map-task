const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const axios = require("axios");

//@desc  Get all drivers
//@route GET api/v1/drivers
//@access Public
exports.getDrivers = asyncHandler(async (req, res, next) => {
  try {
    const { latitude, longitude, count } = req.query;
    const response = await axios({
      url: `https://qa-interview-test.splytech.dev/api/drivers?latitude=${latitude}&longitude=${longitude}&count=${count}`,
      method: "get",
    });
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});
