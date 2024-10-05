/* eslint-disable */
const path = require('path')
const express = require('express');
const cors = require('cors')

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const aboutRouter = require('./routes/aboutRoutes')
const  userRouter = require('./routes/userRoutes')
const contactRouter =  require('./routes/contactRoutes')
const galleryRouter = require('./routes/galleryRoutes')
const homeRouter = require('./routes/homeRoutes')
const navRouter = require('./routes/navRoutes')
const sisterRouter = require('./routes/sisterRoutes')

const app = express();


app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
app.use(cors())
app.use('/',aboutRouter);
app.use('/',userRouter);
app.use('/',contactRouter);
app.use('/',galleryRouter);
app.use('/',homeRouter);
app.use('/',navRouter);
app.use('/',sisterRouter);




app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
