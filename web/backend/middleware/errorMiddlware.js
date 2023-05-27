// errorMiddleware.js

const errorMiddleware = (err, req, res, next) => {
  console.error(err); // Log the error to the console

  // Set a default status code and error message
  let statusCode = 500;
  let message = "Internal Server Error";

  // Check the type of error and set the status code and message accordingly
  if (err instanceof CustomError) {
    // CustomError is a custom error class you can define
    statusCode = err.statusCode;
    message = err.message;
  }

  // Send the error response
  res.status(statusCode).json({ error: message });
};

module.exports = errorMiddleware;
