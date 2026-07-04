import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { patientService } from "./patient.service";
import sendResponse from "../../utils/sendResponse";


import httpstatus from "http-status"
import { isOwner } from "../../utils/isOwner";
import { prisma } from "../../lib/prisma";





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



const cancelAppointment=catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {

    const appointmentId = req.params.appointmentId
    const userId = req.user?.id;

    const is_Owner=isOwner(prisma.appointment,patientId,appointmentId)

    
  })
export const patientController = {
  createAppointment,
  findmyAppointment,
  cancelAppointment,
}; 
