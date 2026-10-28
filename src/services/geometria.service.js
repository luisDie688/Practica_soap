const geometriaService = {

    GeometriaService: {

        GeometriaPort: {

            AreaRectangulo(args) {

                const base =
                    Number(args.base);

                const altura =
                    Number(args.altura);

                const area =
                    base * altura;

                return {
                    area: area
                };
            },

            PerimetroRectangulo(args) {

                const base =
                    Number(args.base);

                const altura =
                    Number(args.altura);

                const perimetro =
                    2 * (base + altura);

                return {
                    perimetro: perimetro
                };
            }

        }

    }

};

module.exports = geometriaService;