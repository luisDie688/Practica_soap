const express = require('express');

const soapRouter =
    require('./routes/soap.routes');


const app = express();


/*
 * Configuración general
 */
app.disable('x-powered-by');


/*
 * Montar Router
 */
app.use(soapRouter);


module.exports = app;