import jwt from 'jsonwebtoken';
import Roles from '../utils/Roles.js';

const validateToken = (roles = null) => {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(' ')[1];
      jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
          return res.status(403).json({ message: 'Invalid or expired token' });
        }
        // added roles, either role is not assigned to api, or user has the same role or user is admin
        if (!roles || roles.includes(user.role) || user.role === Roles.ADMIN) {
          req.session_user = user;
          next();
        } else {
          return res.status(403).json({ message: 'Forbidden' });
        }
      });
    } else {
      res.status(401).json({ message: 'Authentication token required' });
    }
  };
};

export const generateToken = (user) => {
  const payload = {
    uid: user.id,
    email: user.name,
    role: user.role,
  };
  const options = {
    expiresIn: '8h',
  };
  const secret = 'J987&^%$£adfJIL:'; //process.env.JWT_SECRET;

  return jwt.sign(payload, secret, options);
};

export default validateToken;
