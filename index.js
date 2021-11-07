const express = require("express");
const app = express();
const client = require("./database");
const cors = require("cors");
// import route
const authRoute = require("./routes/auth");
// const postRoute = require("./routes/posts");
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
// route middleware
app.use("/api/user", authRoute);
// app.use("/api/home", postRoute);

app.listen(process.env.PORT || 8000, () =>
  console.log("Server is Up and running")
);
