import { Router } from 'express';
import { getDashboard } from './controller.js';
import validateToken from '../../middleware/Auth.js';

// import { addBooking, deleteBooking, editBooking, checkoutBooking, getAllBooking, getBooking } from "./controller.js";

const dashboardRoute = Router().get('/', validateToken(), getDashboard);
//   .post("/edit", editBooking)
//   .post("/checkout", checkoutBooking)
//   .get("/get", getBooking)
//   .get("/getAll", getAllBooking)
//   .post("/delete", deleteBooking);

export default dashboardRoute;
