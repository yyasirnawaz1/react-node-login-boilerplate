import { authenticate } from '../../database/auth.js';
import { generateToken } from '../../middleware/Auth.js';

export const register = (req, res) => {
  // const { id } = req.body;
  console.info('register user');
  res.send(req.body);
};

export const login = async (req, res) => {
  console.log(req.body, req.params, req.query);
  const { email, password } = req.body;

  const user = await authenticate(email, password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  // Generate JWT token
  const token = generateToken(user);
  delete user.id;

  res.json({ token, user });
};

export const logout = (req, res) => {
  // const { id } = req.body;
  res.send('logout.... ');
};

export const lock = (req, res) => {
  // const { id } = req.params;
  res.send('lock:.... ');
};

export const resetPassword = (req, res) => {
  // const { id } = req.body;
  res.send('resetPassword :.... ');
};

export const forgotPassword = (req, res) => {
  // const { id } = req.body;
  res.send('forgotPassword.... ');
};
