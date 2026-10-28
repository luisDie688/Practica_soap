function requestLogger(req, res, next) {

    const inicio = process.hrtime.bigint();

    res.on('finish', () => {

        const fin = process.hrtime.bigint();

        const tiempo =
            Number(fin - inicio) / 1_000_000;

        console.log(
            `${req.method} ${req.originalUrl} ` +
            `${res.statusCode} ${tiempo.toFixed(2)} ms`
        );
    });

    next();
}

module.exports = requestLogger;