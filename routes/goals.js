var express = require('express');
var router = express.Router();
const Goal= require('../models').Goal;
const jwt = require('jwt-simple');
const jwtCheck = require('express-jwt');
const passport = require('../passport-config/passport')
const config = require('../passport-config/config');

// GET all goals
router.get('/', (req, res) => {
    console.log('QUE', req.query);
    Goal.findAll({where: {user_id: req.query.userId }})
    .then(goals => {
        res.json({ goals })
    })
});

// CREATE a goal
router.post('/', jwtCheck({ secret: config.jwtSecret }), (req, res) => {
    let decoded = jwt.decode(req.headers.authorization.split(' ')[1], config.jwtSecret)

    Goal.create({category: req.body.category, target_completion_date: req.body.target_completion_date, goal: req.body.goal, status: req.body.status, user_id: decoded.id})
    .then(newGoal => {
        res.json ({ newGoal })
    })
});



//UPDATE a goal
router.put('/:id', (req, res) => {
    Goal.update(req.body, {
        where: {id: req.params.id}
    })
    .then (() => {
        return Goal.findByPk(req.params.id)
    })
    .then(goal => {
        res.json({ goal })
    })
  })

//DELETE a goal
router.delete('/:id', jwtCheck({ secret: config.jwtSecret }), (req, res) => {
    let decoded = jwt.decode(req.headers.authorization.split(' ')[1], config.jwtSecret)

    Goal.destroy({ where: {id: req.params.id } })
      .then(() => {
        return Goal.findAll()
      })
      .then(goals => {
        res.json({ goals })
      })
  })


module.exports = router;