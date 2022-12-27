import dotenv from 'dotenv';

import express from 'express';
import passport from 'passport';
import mongoose from 'mongoose';

// Pass the global passport object into the configuration function
import configPassport from './config/passport.js';

// importing routes
import clubsRoutes from './routes/clubs.js';

import playersRoutes from './routes/players.js';

import seasonsRoutes from './routes/seasons.js';

import usersRoutes from './routes/users.js';

import fantasyTeamsRoutes from './routes/fantasyTeams.js';

import matchdaysRoutes from './routes/matchdays.js';

dotenv.config();

const app = express();
const port = 3000;
configPassport(passport);

// This will initialize the passport object on every request
app.use(passport.initialize());

// body parser
app.use(express.json());

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE',
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use(clubsRoutes);
app.use(playersRoutes);
app.use(seasonsRoutes);
app.use(usersRoutes);
app.use(fantasyTeamsRoutes);
app.use(matchdaysRoutes);

// root route
app.get('/', (req, res) => {
  res.send({ message: 'Hello World!' });
});

// 404 route
app.get('*', (req, res) => {
  res.status(404).send({ message: 'Route not found' });
});

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
