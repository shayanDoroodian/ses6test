const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    handle: {
        type: String,
        required: true,
        max: 40
    },
    experience: [{
        jobID: {
            type: String
        },
        title: {
            type: String,
            require: true
        },
        jobAddress: {
            type: String
        },
        location: {
            type: String,
        },
    }],
    website: {
        type: String,
    },
    status: {
        type: String,
        required: true
    },
    bio: {
        type: String,

    },
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);