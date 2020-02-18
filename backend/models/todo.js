const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title: { type: String, required: true, default: "Hello"},
    content: {type: String, required: true,default: "Hello"},
});
module.exports = mongoose.model('todo',todoSchema);