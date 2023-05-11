const customError = (status, message, res) => {
    res.status(status);
    res.json({
        'status': status,
        'message': message
    });
}

export default customError;