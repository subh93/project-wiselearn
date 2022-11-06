import { statusCode, statusMessage } from "../enums/status";

export const noContentResponse = (res: any, data: any, message = 'No data found') => {
  return res.status(statusCode.NO_CONTENT).json({
    message: message,
    data: data,
    status: statusMessage.NO_CONTENT,
    statusCode: statusCode.NO_CONTENT
  })
}

export const successResponse = (res: any, data: any, message = 'Operation Successfull') => {
  return res.status(statusCode.SUCCESS).json({
    message: message,
    data: data,
    status: statusMessage.SUCCESS,
    statusCode: statusCode.SUCCESS
  })
}

export const successResponseArr = (res: any, data: any, count = {}, message = 'Operation Successfull') => {
  return res.status(statusCode.SUCCESS).json({
    message: message,
    data: data,
    count: count,
    status: statusMessage.SUCCESS,
    statusCode: statusCode.SUCCESS
  })
}

export const errorResponse = (res: any, error: any, message = 'Something went wrong') => {
  return res.status(statusCode.ERROR).json({
    message: message,
    data: error,
    status: statusMessage.ERROR,
    statusCode: statusCode.ERROR
  })
}