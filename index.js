const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const usersRouter = require('./routes/users');
const liftsRouter = require('./routes/lifts');
const workoutRouter = require('./routes/workouts');

require('dotenv').config();

const app = express();

app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
  res.send('hello to LiftTracker API!');
})


const uri = process.env.ATLAS_URI;

// CHANGE FOR DEPLOYMENT!!!
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connected successfully");
})

app.use('/workouts', workoutRouter);
app.use('/users', usersRouter);
app.use('/lifts', liftsRouter);


var PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log('Server is running on port 3001...');
})