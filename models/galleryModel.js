/* eslint-disable */
const mongoose = require('mongoose');
const gallerySchema = new mongoose.Schema({
    imageCover:{
        type:String,
        required:[true,'A  gallery must have an image cover']

    },
    images:[
        {
            type:String
        }
    ],
    created_at:{
        type:Date,
        default:Date.now()
    }
})

const Gallery = mongoose.model("Gallery",gallerySchema);
module.exports = Gallery