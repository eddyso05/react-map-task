const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const errorHandler = require("./middleware/error");
const morgan = require("morgan");
const colors = require("colors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const cors = require("cors");
//Load env vars
dotenv.config({ path: "./config/config.env" });

//Route files
const drivers = require("./routes/drivers");
const app = express();

//Body parser
app.use(express.json());

// cookie parser
app.use(cookieParser());

//Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// set security headers
app.use(helmet());

// prevent XSS attacks
app.use(xss());

//  Rate limiting || prevent user send too much request in limit time
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, //10mins
  max: 100,
});

app.use(limiter);

// prevent http param pollution
app.use(hpp());

// enable CORS
app.use(cors());

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// Mount routers
app.use("/api/v1/drivers", drivers);
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

//Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // close server & exit process
  server.close(() => process.exit(1));
});
