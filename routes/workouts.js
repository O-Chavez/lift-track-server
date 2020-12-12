const router = require('express').Router();
const Workout = require('../models/Workout');
const Lift = require('../models/Lifts');
const auth = require('../middleware/auth');
const mongoose = require('mongoose');

// get workouts from lift
router.route('/:ids').get(auth, async (req, res) => {
  try {
    // possible solution...
        // get request for specific lift which has workout ids inside it, then run a search and return those objects... 
        const LiftId = req.params.ids;
        const lift = await Lift.findById({_id: LiftId});
        const workouts = lift.workout;
        const foundWorkouts = await Workout.find({_id: {$in: workouts}})
        res.json(foundWorkouts)
  }
        // --------------------
   catch (error) {
    res.status(500).json({ error: error.message});
  }
})

// add workout 
router.route('/add').post(auth, async (req, res) => {
  try {
    const { liftdate, liftsets, liftreps, liftweight, liftRpe } = req.body;

    const liftVolume = liftsets * liftreps * liftweight;

    res.json(liftVolume);

    if(!liftDate || !liftsets || !liftreps || !liftweight || !liftRpe) 
      return res.status(400).json({ msg: "Not all fields have been entered."});
    
    const newWorkout = new Workout({
      userId: req.user,
      liftRpe: liftRpe, 
      liftDate: liftdate,
      liftReps: liftreps,
      liftSets: liftsets,
      liftWeight: liftweight,
      liftVolume: liftVolume
    });

  const savedWorkout = await newWorkout.save();

    res.json(req);
    // res.json(savedWorkout);
  } catch (error) {
    res.status(500).json({ error: error.message});
  } 
});

// delete workout
router.route('/delete/:id').delete(auth, async (req, res) => {
  try {
    await Lift.findByIdAndUpdate({
      _id: req.body.liftId
    },
    {
      $pull: {
        workout: req.params.id
      },
    })

    const deletedWorkout = await Workout.findByIdAndDelete(req.params.id)
      res.json(deletedWorkout)
  } catch(error) {
    res.json({error: error.message})
  }
 
});


module.exports = router;