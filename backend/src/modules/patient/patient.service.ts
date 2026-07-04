import { prisma } from "../../lib/prisma"
import { check } from "../../utils/checkDb"


const createAppointmentInDb = async (doctorId:string,patientId:string,paylaod:any) => {
  

  const isDoctorExists = await check(prisma.doctors,doctorId)
  if (!isDoctorExists) {
    throw new Error("Doctor not found")

  }

  const { timeSlot, reason }= paylaod

  const result = await prisma.appointment.create({
    data: {
      doctorId,
      patientId,
      timeSlot,reason
    },
    include: {
      patient: true,
      doctor:true
    }
  })




  return result


}


const findmyAppointmentInDb = async (selfPatientId: string) => {
  

  const result = await prisma.appointment.findUniqueOrThrow({
    where: {
      patientId:selfPatientId
    }
  })


  return result
  



}


const cancelAppointmentInDb = (selfPatientId:string,appointmentId:string) => {
  
  
}



export const patientService = {
  createAppointmentInDb,
  findmyAppointmentInDb,
};