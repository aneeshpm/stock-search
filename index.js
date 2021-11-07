const express = require("express");
const app = express();
const client = require("./database");
// import route
const authRoute = require("./routes/auth");
// const postRoute = require("./routes/posts");

app.use(express.json());
// route middleware
app.use("/api/user", authRoute);
// app.use("/api/home", postRoute);

app.listen(8000, () => console.log("Server is Up and running"));
