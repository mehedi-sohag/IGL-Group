/* eslint-disable */
const path = require('path')
const express = require('express');
const cors = require('cors')

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const aboutRouter = require('./routes/aboutRoutes')

const app = express();

app.use(express.json())
app.use(cors())
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/',aboutRouter);

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