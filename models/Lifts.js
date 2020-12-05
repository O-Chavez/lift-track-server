const mongoose = require('mongoose');

const LiftSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  liftname: {
    type: String,
    required: true
  },
  workout: [{
    type: mongoose.Schema.Types.ObjectId, ref:"Event"
  }]
});

const Lift = mongoose.model("Lift", LiftSchema);
module.exports = Lift