import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { patientService } from "./patient.service";
import sendResponse from "../../utils/sendResponse";


import httpstatus from "http-status"





const createAppointment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const doctorId = req.params.doctorId as string;
    const patientId = req.user?.id as string;
    const payload = req.body;

    const profile = await patientService.createAppointmentInDb(
      doctorId,
      patientId,
      payload,
    );

    sendResponse(res, {
      success: true,
      statusCode: httpstatus.OK,
      message: 'Success',
      data: profile,
    });
  },
);


const findmyAppointment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const patientId = req.user?.id as string;

    const result = await patientService.findmyAppointmentInDb(patientId)

    sendResponse(res, {
      success: true,
      statusCode: httpstatus.OK,
      message: 'Success',
      data: result,
    });
  
  },
);


export const patientController = {
  createAppointment,
  findmyAppointment
}; 
