const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({

  userId: {
    type: String,
    required: true
  },
  liftRPE: {
    type: String,
    required: true
  },
  liftDate: {
    type: Date,
    required: true
  },
  liftReps: {
    type: Number,
    required: true
  },
    liftSets: {
      type: Number,
      required: true
  },
    liftWeight: {
      type: Number,
      require: true
  },
    liftVolume: {
      type: Number,
      require: true
  }
  
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;