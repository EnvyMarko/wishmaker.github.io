const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wishSchema = new Schema({
    Wishitem: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    itemUrl: {
        type: String,
        required: true
    },
    wishimg: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
    
}, {timestamps: true});

const Wishes = mongoose.model("wishes", wishSchema);
module.exports = Wishes;