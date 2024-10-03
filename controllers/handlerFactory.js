/*eslint-disable*/
const About = require('../models/aboutModel');
const AppError = require('../utils/appError');
exports.createOne = (Model)=>{
    return async(req,res,next)=>{
        try{
            const doc = await About.create(req.body);
            res.status(201).json({
                status:'success',
                data:doc
            })
    
        }catch(err){
            next(err)
        }
    
    }

}

exports.deleteOne = (Model)=>{
    return async(req,res,next)=>{
        try{
            const doc =  await About.findByIdAndDelete(req.params.id);
            if(!doc){
                return next(new AppError('No document found with that ID',404));
            }
    
            res.status(204).json({
                data:'success',
                data:null
            })
    
    
        }catch(err){
            next(err)
        }
    
    }

}
exports.updateOne = (Model)=>{
    return async(req,res,next)=>{
        try{
            const doc = await About.findByIdAndUpdate(req.params.id,req.body,{
                new:true,
                runValidators:true
            });
            if(!doc){
                return next(new AppError('No document found with that ID',404));
            }
            res.status(200).json({
                status:'success',
                data:doc
            })
    
        }catch(err){
            next(err)
        }
    
    }

}
exports.getOne = (Model)=>{
    return async(req,res,next)=>{
        try{
            const  doc = await About.findById(req.params.id);
            if(!doc){
                return next(new AppError('No document found with that ID',404));
            }
    
            res.status(200).json({
                status:'success',
                data:doc
            })
    
    
        }catch(err){
            next(err)
        }
    
    }
}
exports.getAll = (Model)=>{
    return async(req,res,next)=>{
        try{
            const docs = await About.find();
            res.status(200).json({
                status:'success',
                data:docs
            })
    
        }catch(err){
            next(err)
        }
    }
}


