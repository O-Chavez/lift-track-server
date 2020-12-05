const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const usersRouter = require('./routes/users');
const liftsRouter = require('./routes/lifts');
const workoutRouter = require('./routes/workouts');

require('dotenv').config();

var PORT = process.env.PORT || 3001;

const app = express();


app.use(express.json())
app.use(cors());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello to LiftTracker API!');
})

// CHANGE FOR DEPLOYMENT!!!
mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
  .catch((error) => console.log(error.message));

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connected successfully");
})

app.use('/workouts', workoutRouter);
app.use('/users', usersRouter);
app.use('/lifts', liftsRouter);




// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}...`);
// })