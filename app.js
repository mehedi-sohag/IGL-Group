/* eslint-disable */
const express = require('express');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const aboutRouter = require('./routes/aboutRoutes');

const app = express();

app.use(express.json())
app.use('/',aboutRouter);


app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;