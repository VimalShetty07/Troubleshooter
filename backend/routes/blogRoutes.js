const express = require('express');
const router = express.Router();
const {getAllBlogs, createBlog, updateBlog, deleteBlog} = require("../controllers/blogController");




router.route("/blogs").get(getAllBlogs)
router.route("/blogs/new").post(createBlog)
router.route("/blogs/:id").put(updateBlog).delete(deleteBlog)




module.exports = router