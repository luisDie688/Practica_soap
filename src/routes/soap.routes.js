const express = require('express');
const soap = require('soap');
const fs = require('fs');

const config = require('../config/app.config');

const requestLogger =
    require('../middleware/requestlogger.middleware');

const conversionesService =
    require('../services/conversiones.service');

const geometriaService =
    require('../services/geometria.service');


const router = express.Router();


/*
 * El middleware se registra ANTES
 * de los servicios SOAP.
 */
router.use(requestLogger);


/*
 * Leer contratos WSDL
 */
const conversionesWSDL =
    fs.readFileSync(
        config.services.conversiones.wsdlPath,
        'utf8'
    );

const geometriaWSDL =
    fs.readFileSync(
        config.services.geometria.wsdlPath,
        'utf8'
    );


/*
 * Registrar ConversionesService
 */
soap.listen(
    router,
    config.services.conversiones.endpoint,
    conversionesService,
    conversionesWSDL
);


/*
 * Registrar GeometriaService
 */
soap.listen(
    router,
    config.services.geometria.endpoint,
    geometriaService,
    geometriaWSDL
);


module.exports = router;