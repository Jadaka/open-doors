import jwt from 'jsonwebtoken';
import authCredentials from '../config';

const auth = {};

auth.generateToken = (user) => {
  console.log('user inside generateToken', authCredentials.secret);
  return jwt.sign({ id: user.id, username: user.username },
    authCredentials.secret,
    { expiresIn: 60000 });
};

auth.ifAuthorized = (req, res, next) => {
  const token = req.body.token;

  if (token) {
    jwt.verify(token, authCredentials.secret, (err) => {
      if (err) {
        console.error('err');
        res.sendStatus(401);
      } else {
        next();
      }
    });
  } else {
    res.sendStatus(401);
  }
};

export default auth;
