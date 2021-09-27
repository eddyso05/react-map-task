const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const axios = require("axios");

//@desc  Get all drivers
//@route GET api/v1/drivers
//@access Public
exports.getDrivers = asyncHandler(async (req, res, next) => {
  try {
    // validation
    req.check("latitude").isNumeric().notEmpty();
    req.check("longitude").isNumeric();
    req.check("count").isNumeric();

    const error = req.validationErrors();
    if (error) {
      return res.status(400).json({ message: "Invalid Value" });
    }

    const { latitude, longitude, count } = req.query;
    if (!latitude || !longitude || !count) {
      return res.status(400).json({ message: "wrong parameter" });
    }
    const response = await axios({
      url: `${process.env.SPLYTECH_API}drivers?latitude=${latitude}&longitude=${longitude}&count=${count}`,
      method: "get",
    });

    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});
