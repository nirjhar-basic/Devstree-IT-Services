const express=require('express');
const cors=require('cors')

const testimonialRoute=require('../routes/testimonialRoute');

const app=express();

app.use(cors());
app.use(express.json())

app.use('testimonial',testimonialRoute);

module.exports=app;