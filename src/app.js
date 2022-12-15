require('dotenv').config()
const express = require('express'); 
const cors = require('cors'); 
const mongoose = require('./database/mongooseConnect'); 
const filmesRoutes = require('./routes/filmesRoute'); 
const seriesRoutes = require('./routes/seriesRoute');

const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect();

app.use('/blackmow/filmes', filmesRoutes); 
app.use('/blackmow/series', seriesRoutes)

module.exports = app;