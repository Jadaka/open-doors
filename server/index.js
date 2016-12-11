import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './db/db';
import {
  authRouter,
  companiesRouter,
  reviewsRouter,
  } from './routes/';
import expressValidator from 'express-validator';

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(expressValidator());

// set up HTTP endpoints
app.use('/api/auth', authRouter);
app.use('/api/companies', companiesRouter);
app.use('/api/reviews', reviewsRouter);

(async () => {
  try {
    await sequelize.authenticate();
    app.listen(port);
    console.log(`app listening on port ${port}`);
  } catch (err) {
    console.error(`App failed to start. error = ${err.toString()}`);
  }
})();
