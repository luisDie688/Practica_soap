const app = require('./app');

const config =
    require('./config/app.config');


app.listen(config.port, () => {

    console.log(
        `Servidor iniciado en http://localhost:${config.port}`
    );

    console.log(
        `WSDL Conversiones: ` +
        `http://localhost:${config.port}` +
        `/soap/conversiones?wsdl`
    );

    console.log(
        `WSDL Geometría: ` +
        `http://localhost:${config.port}` +
        `/soap/geometria?wsdl`
    );

});