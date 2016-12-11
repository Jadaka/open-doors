import User from '../models/user.model';
import Auth from '../services/auth';

exports.signin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = (await User.findAll({
      where: {
        username,
      },
    }))[0];

    if (!user || !await user.checkPassword(password, user.password)) {
      res.status(400).send({ message: 'Incorrect username/password' });
    }
    res.json({ token: Auth.generateToken({ id: user.id, username: user.username }) });
  } catch (err) {
    res.status(400).send({ message: err });
  }
};

exports.signup = async (req, res, next) => {
  console.log('inside signup', req.body);
  req.assert('email', 'Valid email required').isEmail();

  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;

  if (!email || !password || !username) {
    return res.status(422).send({ error: 'You must provide email, username, and password' });
  }

  try {
    const userResponse = await User.findAll({
      where: {
        email,
      },
    });

    if (userResponse.length > 0) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    const userDetails = {
      username,
      email,
      password,
    };

    const createUser = await User.create(userDetails);

    if (createUser) {
      const user = JSON.stringify(createUser);
      res.json({ token: Auth.generateToken({ id: user.id, username: user.username }) });
    }
  } catch (err) {
    next(err);
  }
};
