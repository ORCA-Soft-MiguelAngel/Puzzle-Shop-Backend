import { Response } from "express";

//INTERFACES
export interface ApiResponse {
  <T>(res: Response, data: T, statusCode: number): Response;
}

export interface SuccessResponse<T = any> {
  success: true;
  errorMessage: null;
  data: T;
}

export interface FailedResponse<T = any> {
  success: false;
  errorMessage: string;
  data: T;
}

//EXPORTS
export const apiResponse: ApiResponse = (res, data, statusCode): Response => {
  return res.status(statusCode).json(data);
};

export const successResponse = (data: any): SuccessResponse => {
  return {
    success: true,
    errorMessage: null,
    data,
  };
};

export const failedResponse = (error: any): FailedResponse => {
  return {
    success: false,
    errorMessage: error,
    data: null,
  };
};
