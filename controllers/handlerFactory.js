/*eslint-disable*/
const About = require('../models/aboutModel');
const AppError = require('../utils/appError');
exports.createOne = (Model)=>{
    return async(req,res,next)=>{
        try{
          
            const doc = await Model.create(req.body);
            console.log(doc)
            res.status(201).json({
                status:'success',
                data:doc.dataValues
            })
    
        }catch(err){
            next(err)
        }
    
    }

}

exports.deleteOne = (Model)=>{
    return async(req,res,next)=>{
        try{
            const doc =  await Model.destroy({where:{id:req.params.id}});
            console.log(doc,'delete data count')
            if(doc === 0){
                return next(new AppError('No document found with that ID',404));
            }
    
            res.status(200).json({
                status:'success',
                message:'Deleted data successfully!'
            })
    
    
        }catch(err){
            next(err)
        }
    
    }

}

exports.updateOne = (Model) => {
    return async (req, res, next) => {
      try {
        const doc = await Model.update(req.body, {
          where: { id: req.params.id },
          returning: true,
        });
        
        if (doc[1] === 0) {
          return next(new AppError('No document found with that ID', 404));
        }
        res.status(200).json({
          status: 'success',
          message:'Data successfully updated!'
        });
      } catch (err) {
        next(err);
      }
    };
  };
exports.getOne = (Model)=>{
    return async(req,res,next)=>{
        try{
            const  doc = await Model.findOne({where:{id:req.params.id}});
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
            const docs = await Model.findAll();
            res.status(200).json({
                status:'success',
                results:docs.length,
                data:docs
            })
    
        }catch(err){
            next(err)
        }
    }
}


