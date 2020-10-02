const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const NewsSchema = new Schema({
    url: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    tags: [String],
    album: [{
        image: {
            type: String,
            required: true
        }
    }]

});

module.exports = News = mongoose.model('news', NewsSchema);