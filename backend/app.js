const express = require('express');
const app = express();

app.use(express.json())

// route imports
const blogs = require("./routes/blogRouter")


app.use("/api/v1",blogs)

module.exports = app;