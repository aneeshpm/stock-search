const express = require("express");
const app = express();
const cors = require("cors");

// cors
const whitelist = [
  "http://localhost:8000",
  "https://stock-detail.herokuapp.com",
];

const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable");
      callback(null, true);
    } else {
      console.log("Origin rejected");
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));
app.use(express.json());
// import route
const authRoute = require("./routes/auth");
const homeRoute = require("./routes/home");
// route middleware
app.use("/api/user", authRoute);
app.use("/api/home", homeRoute);

app.listen(process.env.PORT || 8000, () =>
  console.log("Server is Up and running")
);
