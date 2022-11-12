const express = require('express');
const morgan = require('morgan');
const postRoutes = require('../routes/post.routes')
const cors = require('cors') 
const app = express();

app.use(morgan('dev'));
//Config Header app
app.use(cors());

app.use(express.json());
//routes
app.use('/api', postRoutes)


module.exports = app;