const blog = require('../models/blog');
const Blog = require('../models/blog');

exports.getBlog = async (req, res) => {
    const blogs = await Blog.find();
    res.status(200).json({ blogs });
};

exports.posBlog = async (req, res) => {
    const { name } = req.body;
    const { mobile } = req.body;
    const { email } = req.body;
    const { username } = req.body;
    const { password } = req.body;
    const { confirm } = req.body;
    const blog = new Blog({
        name, mobile, email, username, password, confirm
    });
    const createdBlog = await blog.save();
    res.status(201).json({
        blog: {
            ...createdBlog._doc,
        },
    });

};

