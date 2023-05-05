import { Router } from 'express';
import { getRoom, getRooms } from './controller.js';
import validateToken from '../../middleware/Auth.js';

// import { addBooking, deleteBooking, editBooking, checkoutBooking, getAllBooking, getBooking } from "./controller.js";

const roomsRoute = Router().get('/', validateToken(), getRooms);
// .get("/:id", getRoom);
//   .post("/edit", editBooking)
//   .post("/checkout", checkoutBooking)
//   .get("/get", getBooking)
//   .get("/getAll", getAllBooking)
//   .post("/delete", deleteBooking);

export default roomsRoute;
