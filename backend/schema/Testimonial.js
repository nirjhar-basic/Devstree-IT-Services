const mongoose=require('mongoose');

const testimonialSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    photo:{
        type:String,
    },
    post:{
        type:String
    },
    description:{
       type:String
    },
    createdOn:{
        type:Date,
        default:Date.now
    },
    lastUpdatedOn:{
        type:Date
    },
    active:{
        type:Boolean
    }

    
})

module.exports=mongoose.model("Testimonial",testimonialSchema);