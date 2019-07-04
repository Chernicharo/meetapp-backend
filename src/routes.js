import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'test1',
    email: 'test1c@test',
    password_hash: 'testhash',
  });
  return res.json(user);
});

export default routes;
