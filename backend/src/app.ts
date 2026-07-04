import cookieParser from 'cookie-parser';
import express from 'express';
import { userRoutes } from './modules/user/user.route';

import cors from "cors"
import configuration from './config';

import { authROute } from './modules/auth/auth.route';
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors({
  origin: configuration.AppPort,
  credentials:true
}))


app.use("/api/", userRoutes)
app.use('/api/auth', authROute);


export  default app
