const mongoose=require("mongoose");


const connectDatabase=()=>{
    mongoose.connect("mongodb://localhost:27017/testimonial").then((data)=>{
        console.log(`Database connected with server:${data.connection.host}`)
    })
}


module.exports=connectDatabase