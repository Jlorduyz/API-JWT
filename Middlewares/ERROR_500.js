const ERROR_500 = (error, req, res, next) => {
    console.log(error);

    return res.status(500).json({
        success: false,
        response: error,
        message: "Fatal Error ",
    });
};

export default ERROR_500;