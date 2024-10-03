/* eslint-disable */
const mongoose = require('mongoose');
const navSchema = new mongoose.Schema({
   title:{
    type:String,
    required:[true,"Nav have must be a title"]
   },
   link:{
    type:String,
   },
   subItems:[{
    title:String,
    link:String,
   }],
   created_at:{
    type:Date,
    default:Date.now(),
   }
    
})

const  Nav = mongoose.model('Nav', navSchema);
module.exports = Nav;
