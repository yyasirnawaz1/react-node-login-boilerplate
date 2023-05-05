import { Router } from 'express';
import { add } from './controller.js';
import Roles from '../../utils/Roles.js';
import validateToken from '../../middleware/Auth.js';

const userRoute = Router().post(
  '/add',
  validateToken([Roles.OWNER, Roles.MANAGER]),
  add
);

export default userRoute;
