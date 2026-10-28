const conversionesService = {

    ConversionesService: {

        ConversionesPort: {

            CelsiusAFahrenheit(args) {

                const celsius = Number(args.celsius);

                const fahrenheit =
                    (celsius * 9 / 5) + 32;

                return {
                    fahrenheit: fahrenheit
                };
            },

            KilometrosAMillas(args) {

                const kilometros =
                    Number(args.kilometros);

                const millas =
                    kilometros * 0.621371;

                return {
                    millas: millas
                };
            }

        }

    }

};

module.exports = conversionesService;