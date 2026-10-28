const path = require('path');

module.exports = {
    port: 3000,

    services: {
        conversiones: {
            endpoint: '/soap/conversiones',
            wsdlPath: path.join(
                __dirname,
                '..',
                'wsdl',
                'conversiones.wsdl'
            )
        },

        geometria: {
            endpoint: '/soap/geometria',
            wsdlPath: path.join(
                __dirname,
                '..',
                'wsdl',
                'geometria.wsdl'
            )
        }
    }
};