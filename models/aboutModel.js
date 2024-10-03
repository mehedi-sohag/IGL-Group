/* eslint-disable */
const mongoose = require('mongoose');
const aboutSchema = new mongoose.Schema({
    short_description:{
        type:String,
        required:[true,'A short description is required']

    },
    long_description:{
        type:String,
        required:[true,'A long description is required']

    },
    images:[
        {
            type:String,
        }
    ],
    created_at:{
        type:Date,
        default:Date.now()

    },
    imageCover:{
        type:String,
    },
    choose_us:[{
        type:String,
        trim:true,

    }]
})


const About =  mongoose.model('About',aboutSchema);
module.exports = About;
