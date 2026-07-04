import { NextFunction, Request, Response, Router } from 'express';

import userController from '../user/user.controller';
import { jwtUtils } from '../../utils/jwt';

import { auth } from '../../middlewares/auth';
import { Role } from '../../../prisma/generated/prisma/enums';


const router = Router();




router.post('/register', userController.registerUser);


router.get(
  '/user/me',auth(Role.ADMIN,Role.DOCTOR,Role.PATIENT),
  userController.getMyProfile,
);


router.put(
  '/user/my-profile',
  auth(Role.ADMIN, Role.DOCTOR, Role.PATIENT),
  userController.updateMyProfile,
);


export const userRoutes = router;
