const express = require('express');
const app = express();

app.use(express.json())

// route imports
const blogs = require("./routes/blogRoutes")
const user = require("./routes/userRouter")


app.use("/api/v1",blogs)
app.use("/api/v1",user)

module.exports = app;