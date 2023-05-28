const blogs = require("../models/blogModels");

//Create blog
exports.createBlog = async (req, res, next) => {
	const blog = await blogs.create(req.body);
	res.status(200).json({
		success: true,
		blog,
	});
};

//Get all blogs
exports.getAllBlogs = async (req, res) => {
	const blog = await blogs.find();
	res.status(200).json({
		success: true,
		blog,
	});
};

//Updtae blog
exports.updateBlog = async (req, res, next) => {
	try {
		let blog = await blogs.findById(req.params.id);

		blog = await blogs.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
			userFindAndModify: true,
		});
		res.status(200).json({
			success: true,
			blog,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
};

//Delete blog
exports.deleteBlog = async (req, res) => {
	try {
		const blog = await blogs.deleteOne({ _id: req.params.id });
		if (blog.deletedCount === 0) {
			return res.status(404).json({ error: "Blog not found" });
		}

		res.json({ message: "Blog deleted successfully" });
	} catch (error) {
		res
			.status(500)
			.json({ error: "An error occurred while deleting the blog" });
	}
};

//Get blog Details
exports.getBlogDetails = async (req, res, next) => {
	try {
		const blog = await blogs.findById(req.paams.id);
		if (!blog) {
			res.status(404).json({
				success: false,
				message: "Blog not found",
			});
		}
	} catch (error) {
		res.status(500).json({ error: "Internal Server Errror" });
	}
};
