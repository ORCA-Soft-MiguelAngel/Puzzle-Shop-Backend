import { handleMongoError } from "@utils/errorHandlers";
import { FailedResponse, apiResponse, failedResponse } from "@utils/response";
import { NextFunction, Response, Request } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

export const errorHandlerMiddleware = (
  err: Error,
  req: Request,
  res: Response<FailedResponse>,
  next: NextFunction
) => {
  // TODO: Change this to a logger
  console.error(err);

  let statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  let errorMessage: string = err.message;

  if (err.name === "MongoServerError") {
    statusCode = StatusCodes.BAD_REQUEST;
    errorMessage = handleMongoError(err);
  }

  return apiResponse(res, failedResponse(errorMessage), statusCode);
};
