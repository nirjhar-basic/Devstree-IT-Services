const Testimonial=require('../schema/Testimonial');
const ErrorHandler=require('../ErrorHandler/ErrorHandler');

exports.createTestimonial=async (req,res,next)=>{
    
    const newTestimonial=await Testimonial.create(req.body)
    res.status(200).json({message:"Created Successfully",newTestimonial})
}

exports.getTestimonial=async(req,res,next)=>{
  const testimonial=await Testimonial.find();
  res.status(200).json({message:"All found successfully",testimonial});

}

exports.editTestimonial=async (req,res,next)=>{

    let test = await Testimonial.findById(req.params.id);

  if (!test) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

    const edit=await Testimonial.findByIdAndUpdate(req.params.id,req.body,{new:true});

    res.status(200).json({message:"Updated",edit})
}

exports.deleteTestimonial=async(req,res,next)=>{
    const deleteTestimonial =await Testimonial.findByIdAndDelete(req.params.id,{active:0}) ;
    res.status(200).json({message:"Deleted successfully",deleteTestimonial})
}