/* eslint-disable */
const mongoose = require('mongoose');
const sisterSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'A sister-concern must have a name'],
        trim:true,
    },
    logo:{
        type:String
    },
    short_description:{
        type:String,
        required:[true,'A sister-concern must have a short description'],
        trim:true
    },
    long_description:{
        type:String,
        required:[true,'A sister-concern must  have a long description'],
        trim:true

    },
    created_at:{
        type:Date,
        default:Date.now()
    }

})