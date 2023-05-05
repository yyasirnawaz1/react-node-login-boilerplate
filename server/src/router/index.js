import dashboardRoute from '../controller/dashboard/index.js';
import roomsRoute from '../controller/room/index.js';
import authRoute from '../controller/auth/index.js';
import userRoute from '../controller/user/index.js';

const route = (app) => {
  app.use('/api/dashboard', dashboardRoute);
  app.use('/api/room', roomsRoute);
  app.use('/api/auth', authRoute);
  app.use('/api/user', userRoute);
};

export default route;
