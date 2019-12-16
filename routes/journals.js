var express = require('express');
var router = express.Router();
const Journal= require('../models').Journal;

// GET all journals
router.get('/', (req, res) => {
    Journal.findAll()

    .then(journals => {
        res.json({ journals })
    })

});

// CREATE a journal
router.post('/', (req, res) => {
    Journal.create({title: req.body.title, thoughts: req.body.thoughts})
    .then(newJournal => {
        res.json ({ journal: newJournal })
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
router.delete('/:id', (req, res) => {
    Journal.destroy({ where: {id: req.params.id } })
      .then(() => {
        return Journal.findAll()
      })
      .then(journals => {
        res.json({ journals })
      })
  })


module.exports = router;