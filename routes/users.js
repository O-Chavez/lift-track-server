const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
let User = require('../models/User');
const auth = require('../middleware/auth');

// MAKE MAIN LOG IN ROUTE
router.route('/signin').post(async (req, res) => {

  // res.json(req.body)


  try{
    const {username, password} = req.body;
      const user = await User.findOne({username: username});

      if(!user){
        // create account
            // password hashing
            const salt = await bcrypt.genSalt();
            const passwordHash = await bcrypt.hash(password, salt);
            // create new mongo User
            const newUser = new User({username: username, password: passwordHash});

            await newUser.save()
              .then(async () => {
                const newlySignInUser = await User.findOne({username: username});
                // get token for newly created user
                const token = jwt.sign({id: newlySignInUser._id}, process.env.JWT_SECRET)
                res.json({
                            token,
                            user: {
                              id: newlySignInUser._id,
                              username: newlySignInUser.username
                            }
                        }) 
              }).catch(err => res.status(400).json('Error: ' + err));    
      } else {
          // if account with username exists, check password
        const isMatch = await bcrypt.compare(password, user.password);
        // if passwords match, sign in and create web token
          if(!isMatch){
            return res.status(400).json({ msg: "Invalid credentials... Password and email on file do not match..."})
          } else {
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
              res.json({
                token,
                user: {
                  id: user._id,
                  username: user.username
                }
            })  
          }     
      }
  } catch (error) {
    res.status(500).json({error: error.message})
  }
  
});

router.route("/tokenIsValid").post(async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if(!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if(!verified) return res.json(false);

    const user = await User.findById(verified.id);

    if(!user) return res.json(false);

    return res.json(true);

  } catch (err) {
    res.status(500).json( { error: err.message } )
  }
});



router.route("/").get(auth, async (req, res) => {
  const user = await User.findById(req.user)
    // what data is pushed to the front end after authorizaion
  res.json(user)
});


module.exports = router;