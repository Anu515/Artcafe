const blog = require('../models/blog');
const Blog = require('../models/blog');

exports.getBlog = async (req, res) => {
    const blogs = await Blog.find();
    res.status(200).json({ blogs });
};

exports.posBlog = async (req, res) => {
    const { department } = req.body;
    const { title } = req.body;
    const { document } = req.body;
    const blog = new Blog({
        department, title, document
    });
    const createdBlog = await blog.save();
    res.status(201).json({
        blog: {
            ...createdBlog._doc,
        },
    });

};

