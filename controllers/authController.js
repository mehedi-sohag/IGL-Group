/*eslint-disable*/
const crypto = require('crypto');
const {Op} = require('sequelize')
const { promisify } = require('util');
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const AppError = require('../utils/appError');


const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
};

  const createSendToken = (user=null,id=null, statusCode, res) => {
    const token = signToken(id);
    const cookieOptions = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true
    };
    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
  
    res.cookie('jwt', token, cookieOptions);
  
    res.status(statusCode).json({
      status: 'success',
      token,
      data:user
    });
};
  


exports.signup = async(req,res,next)=>{
    try{
          
        const user = await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            passwordConfirm:req.body.passwordConfirm
        });

        createSendToken(user.dataValues,user.id,201,res);

    }catch(err){
        next(err)
    }
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    try{
        if(!email || !password){
            return next(new AppError('Please provide email and password!',400))
        }
        const user = await User.findOne({where:{email}});
        console.log(user)
        if(!user || !(await user.correctPassword(password,user.password))){
            return next(new AppError('Incorrect email or password',401))
        }

        createSendToken(user,user.id,200,res);
        

    }catch(err){
        next(err)
    }
 
}

exports.logout = (req, res) => {
    const cookieOptions = {
        expires: new Date(
          Date.now() + 10 * 1000
        ),
        httpOnly: true
    };
    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
    res.cookie('jwt', 'loggedout', cookieOptions);
    res.status(200).json({ status: 'success',message:'Logout successfully done!' });
};


exports.forgotPassword = async (req, res, next) => {
    try{
        const user = await User.findOne({
            where: { email: req.body.email }
          });

          if (!user) {
            return next(new AppError('There is no user with that email address.', 404));
          }
        
         
          const resetToken = user.createPasswordResetToken();
        
          
          await user.update(
            {
              passwordResetToken: user.passwordResetToken, 
              passwordResetExpires: user.passwordResetExpires 
            },
            { individualHooks: true } 
          );
        
          
          try {
            const resetURL = `${req.protocol}://${req.get(
              'host'
            )}/api/v1/users/resetPassword/${resetToken}`;
        
    
          //   await new Email(user, resetURL).sendPasswordReset();
          console.log(resetURL)
        
            res.status(200).json({
              status: 'success',
              message: 'Token sent to email!',
              resetToken,
              resetURL
            });
          } catch (err) {
        
            await user.update(
              {
                passwordResetToken: null,
                passwordResetExpires: null
              },
              { individualHooks: true }
            );
        
            return next(
              new AppError('There was an error sending the email. Try again later!', 500)
            );
          }

    }catch(err){
        next(err)
    }
    
  
  
    
}
  

  exports.resetPassword = async (req, res, next) => {
    try{
           
            const hashedToken = crypto
              .createHash('sha256')
              .update(req.params.token)
              .digest('hex');
          
            
            const user = await User.findOne({
              where: {
                passwordResetToken: hashedToken,
                passwordResetExpires: { [Op.gt]: Date.now() } 
              }
            });
          

            if (!user) {
              return next(new AppError('Token is invalid or has expired', 400));
            }
          
          
            user.password = req.body.password;
            user.passwordConfirm = req.body.passwordConfirm;
            user.passwordResetToken = null; 
            user.passwordResetExpires = null; 
          
            await user.save({ individualHooks: true });
          
            createSendToken(user,user.id, 200, res);

    }catch(err){
        next(err)
    }
}


exports.updatePassword = async(req,res,next)=>{
    try{
        const user = await User.findByPk(req.user.id, {
        attributes: { include: ['password'] } 
      });
    
      if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
        return next(new AppError('Your current password is wrong.', 401));
      }
    
      user.password = req.body.password;
      user.passwordConfirm = req.body.passwordConfirm;
      await user.save({ individualHooks: true });
      createSendToken(user, 200, res);

    }catch(err){
        next(err)
    }


}

exports.isLoggedIn = async (req, res, next) => {
    if (req.cookies.jwt) {
      try {
        
        const decoded = await promisify(jwt.verify)(
          req.cookies.jwt,
          process.env.JWT_SECRET
        );
  
   
        const currentUser = await User.findByPk(decoded.id); 
        if (!currentUser) {
          return next(); 
        }
  
      
        if (currentUser.changedPasswordAfter(decoded.iat)) {
          return next();
        }
  
        
        res.status(200).json({
            status: 'success',
            data:currentUser  
        }) 
        return next();
      } catch (err) {
        return next(); 
      }
    }
    next();
  };
  