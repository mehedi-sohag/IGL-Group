/* eslint-disable */
const express = require('express');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

app.use(express.json())


app.get('/',(req,res)=>{
  res.status(200).json({
    status:'success',
    message:'Welcome to the API'
  })
})


app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;