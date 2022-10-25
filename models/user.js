const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true,
        max: 150,
        min: 5
    },
    userName: {
        type: String,
        required: true,
        max: 150,
        min: 5
    },
    password:{
        type: String,
        required: true,
        max: 255,
        min: 10
    },
    email:{
        type: String,
        required: true,
        max: 200,
        mins: 10
    },
    date:{
        type: Date,
        default: Date.now

    }
})

module.exports = mongoose.model('User', userSchema)