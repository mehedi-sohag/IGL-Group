/*eslint-disable */
const mongoose = require('mongoose');
const homeSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'A title is  required'],
        trim:true

    },
    description:{
        type:String,
        required:[true,'A description is required'],
        trim:true
    },
    imageCover:{
        type:String,
    },
    about_us:{
        type:String,
        trim:true,
    },
    logos:[{
        type:String
    }]

})

const Home = mongoose.model("Home",homeSchema);
module.exports = Home;