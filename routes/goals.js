var express = require('express');
var router = express.Router();
const Goal= require('../models').Goal;

// GET all goals
router.get('/', (req, res) => {
    Goal.findAll()

    .then(goals => {
        res.json({ goals })
    })

});

// CREATE a goal
router.post('/', (req, res) => {
    Goal.create({category: req.body.category, target_completion_date: req.body.target_completion_date, goal: req.body.goal, status: req.body.status})
    .then(newGoal => {
        res.json ({ goal: newGoal })
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
router.delete('/:id', (req, res) => {
    Goal.destroy({ where: {id: req.params.id } })
      .then(() => {
        return Goal.findAll()
      })
      .then(goals => {
        res.json({ goals })
      })
  })


module.exports = router;