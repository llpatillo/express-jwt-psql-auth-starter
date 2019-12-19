var express = require('express');
var router = express.Router();
const Journal= require('../models').Journal;
const jwt = require('jwt-simple');
const jwtCheck = require('express-jwt');
const passport = require('../passport-config/passport')
const config = require('../passport-config/config');


// GET all journals
router.get('/', (req, res) => {
    Journal.findAll()

    .then(journals => {
        res.json({ journals })
    })

});

// CREATE a journal
router.post('/', jwtCheck({ secret: config.jwtSecret }), (req, res) => {
    let decoded = jwt.decode(req.headers.authorization.split(' ')[1], config.jwtSecret)

    Journal.create({title: req.body.title, thoughts: req.body.thoughts, user_id: decoded.id})
    .then(newJournal => {
        res.json ({ newJournal })
    })
});



//UPDATE a journal
router.put('/:id', (req, res) => {
    Journal.update(req.body, {
        where: {id: req.params.id}
    })
    .then (() => {
        return Journal.findByPk(req.params.id)
    })
    .then(journal => {
        res.json({ journal })
    })
  })

//DELETE a journal
router.delete('/:id', jwtCheck({ secret: config.jwtSecret }), (req, res) => {
    let decoded = jwt.decode(req.headers.authorization.split(' ')[1], config.jwtSecret)

    Journal.destroy({ where: {id: req.params.id } })
      .then(() => {
        return Journal.findAll()
      })
      .then(journals => {
        res.json({ journals })
      })
  })


module.exports = router;