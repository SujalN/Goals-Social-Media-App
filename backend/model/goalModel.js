const mongoose = require('mongoose')

// Objects unique to post
const goalSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        required: [true, 'Please add a text value']
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Goal', goalSchema)