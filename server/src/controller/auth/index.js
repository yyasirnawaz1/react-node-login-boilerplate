import { Router } from 'express';
import {
  login,
  logout,
  lock,
  resetPassword,
  forgotPassword,
} from './controller.js';

// import { addBooking, deleteBooking, editBooking, checkoutBooking, getAllBooking, getBooking } from "./controller.js";

const authRoute = Router()
  .post('/login', login)
  .post('/logout', logout)
  .post('/lock', lock)
  .post('/resetPassword', resetPassword)
  .post('/forgotPassword', forgotPassword);

export default authRoute;
