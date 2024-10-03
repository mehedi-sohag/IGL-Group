/* eslint-disable */
const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:[true,'A contact must have an email'],

    },
    address:{
        type:String,
        required:[true,'A contact must have an address'],

    },
    created_at:{
        type:Date,
        default:Date.now()
    }

})

const Contact =  mongoose.model('Contact', contactSchema);
module.exports =  Contact;

