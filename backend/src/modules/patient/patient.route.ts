import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { Role } from "../../../prisma/generated/prisma/enums";
import { patientController } from "./patient.controller";



const router = Router();


router.post('/appointments/:doctorId',auth(Role.ADMIN,Role.PATIENT),patientController.createAppointment)

router.get('/me/appointment',auth(Role.ADMIN,Role.PATIENT), patientController.findmyAppointment)


export const patientRoute = router;
