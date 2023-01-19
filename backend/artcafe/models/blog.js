const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    department: { type: String, required: true },
    title: { type: String, required: true },
    document: { type: String, required: true },
});

module.exports = mongoose.model('Blog', blogSchema);
