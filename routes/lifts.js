const router = require('express').Router();
const Lift = require('../models/Lifts');
const Workout = require('../models/Workout');
const auth = require('../middleware/auth');

// get all lifts
router.route('/').get(auth, async (req, res) => {
  const lifts = await Lift.find({userId: req.user});
    res.json(lifts)
});

// get selected lift
router.route('/:id').get(auth, async (req, res) => {
  try{
    const liftId = req.params.id;

    if(!liftId) return res.json({ msg: "No liftId recieved!"})

    const lift = await Lift.findById({_id: liftId});

    if(!lift) return res.json({ msg: "No lift found with that current lift id..."})
        
    res.json(lift)
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
});

// add lift
router.route('/add').post(auth, async (req, res) => {
  try {
    const { liftname, liftdate } = req.body;
    if(!liftname) 
      return res.status(400).json({ msg: "Not all fields have been entered."});
    
    const newLift = new Lift({
      userId: req.user,
      liftname: liftname,
      date: liftdate
    });

  const savedLift = await newLift.save();
    res.json(savedLift);
  } catch (error) {
    res.status(500).json({ error: error.message});
  } 
});


// delete lift
router.route('/delete/:id').delete(auth, async (req, res) => {
  const lift = await Lift.findOne({userId: req.user, _id: req.params.id});

  if(!lift)
    return res.status(400).json({ msg: "No lift found with this id that belongs to the current user."});

  const deletedLift = await Lift.findByIdAndDelete(req.params.id)
    res.json(deletedLift)
    // .catch(err => res.status(400).json('Error: ' + err));
});

// edit lift
router.route('/edit/:id').put(auth, async (req, res) => {
  try {
    Lift.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
      Lift.findOne({_id: req.params.id}).then((Lift) => {
        res.json({Lift})
      })
    }
   )
  } catch (error) {
    res.status(500).json({ error: error.message});
  } 
})


// add workout
router.route('/update/:id').post(auth, async (req, res) => {
  try{
    // create new workout with new data   
    const { liftdate, liftsets, liftreps, liftweight, liftRPE } = req.body;

    const liftVolume = liftsets * liftreps * liftweight;
      // validation
    if(!liftdate || !liftsets || !liftreps || !liftweight || !liftRPE) {
      return res.status(400).json({ msg: "Not all fields have been entered."});
    }
    const newWorkout = new Workout({
      userId: req.user,
      liftRPE: liftRPE,
      liftDate: liftdate,
      liftReps: liftreps,
      liftSets: liftsets,
      liftWeight: liftweight,
      liftVolume: liftVolume
    });
    newWorkout.save();
    // get current lift
    const currentLift = await Lift.findById(req.params.id)
    // push created workout to current lift
        currentLift.workout.push(newWorkout)
      // save lift with new workout
        currentLift.save()
        res.json(currentLift);
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
});





module.exports = router;