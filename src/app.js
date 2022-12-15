const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');
require('dotenv').config()
const express = require('express'); 
const cors = require('cors'); 
const mongoose = require('./database/mongooseConnect'); 
const filmesRoutes = require('./routes/filmesRoute'); 
const seriesRoutes = require('./routes/seriesRoute');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));
mongoose.connect();

app.use('/blackmow/filmes', filmesRoutes); 
app.use('/blackmow/series', seriesRoutes)

module.exports = app;