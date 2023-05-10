export const notFoundError = (req, res, next) => {
    const err = new Error('404 Not Found');
    err.status = 404;
    next(err);
}
export const catchErrors = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message;
    res.status(status);
    res.json({
        "status": status,
        "message": message
    });
}