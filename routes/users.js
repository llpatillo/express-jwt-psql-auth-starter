var express = require('express');
var router = express.Router();
const jwt = require('jwt-simple');
const jwtCheck = require('express-jwt');
const passport = require('../passport-config/passport')
const config = require('../passport-config/config');
const User = require('../models').User;
const Quote = require('../models').Quote;
const Goal = require('../models').Goal;
const Journal = require('../models').Journal;

/* GET users listing. */
router.get('/', (req, res) => {
  User.findAll()
    .then(users => {
      res.json({ users })
    })
});

/* SIGNUP a user. */
router.post('/signup', (req, res) => {
  if (req.body.email && req.body.password) {
    let newUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      profile_pic_url: req.body.profile_pic_url
    }
    User.findOne({ where: { email: req.body.email } })
      .then(user => {
        if (!user) {
          User.create(newUser)
            .then(user => {
              console.log(user)
              res.json({ user })
            })
        } else {
          console.log("line 33")
          res.sendStatus(401)
        }
      })
  } else {
    res.sendStatus(401)
  }
})

router.post('/login', (req, res) => {
  if (req.body.email && req.body.password) {
    User.findOne({ where: { email: req.body.email } })
      .then(foundUser => {
        if (foundUser) {
          if (foundUser.password === req.body.password) {
            const user = foundUser;
            const payload = {
              id: user.id
            }
            const token = jwt.encode(payload, config.jwtSecret)

            Goal.findAll({where: {user_id: user.id }})
              .then(goals => {
                const userGoals = goals
                Journal.findAll({where: {user_id: user.id }})
                .then(userJournals => {
                  res.json({ token, user, userGoals, userJournals})
                })
                
              })            
          } else {
            res.sendStatus(401)
          }
        } else {  
          res.sendStatus(401)
        }
      })
  } else {
    res.sendStatus(401)
  }
})

router.post('/', (req, res) => {
  console.log(req.headers)
  var decoded = jwt.decode(req.headers.authorization, config.jwtSecret);
  console.log(decoded);
  User.findByPk(decoded.id)
    .then(user => {
      res.json({ user })
    })
})

router.get('/:id', jwtCheck({ secret: config.jwtSecret }), (req, res) => {
  let decoded = jwt.decode(req.headers.authorization.split(' ')[1], config.jwtSecret)

  User.findByPk(req.params.id)
    .then(user => {
      if (user.id === decoded.id) {
        res.json(user)
      } else {
        res.json({ message: "You are not authorized to see that" })
      }
    })
})

module.exports = router;
