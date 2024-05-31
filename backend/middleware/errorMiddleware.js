const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode ? res.statusCode : 500;
  let message = err.message;

  // Check for Mongoose bad ObjectId
  // if (err.name === "CastError" && err.kind === "ObjectId") {
  //   message = `Resource not found`;
  //   statusCode = 404;
  // }

  res.status(statusCode).json({
    message: message,
    stack: err.stack,
  });
};

exports.notFound = notFound;
exports.errorHandler = errorHandler;
