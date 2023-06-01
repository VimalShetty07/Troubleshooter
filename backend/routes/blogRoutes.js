const express = require('express');
const router = express.Router();
const {getAllBlogs, createBlog, updateBlog, deleteBlog} = require("../controllers/blogController");
const { isAuthUser } = require('../middleware/auth');




router.route("/blogs").get( getAllBlogs)
router.route("/blogs/new").post(isAuthUser,createBlog)
router.route("/blogs/:id").put(isAuthUser,updateBlog).delete(isAuthUser,deleteBlog)




module.exports = router