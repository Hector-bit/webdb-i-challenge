const express = require('express');

const knex = require('../dbConfig');

const router = express.Router();


router.get('/', (req, res) => {
    knex
    .select('*')
    .from('accounts')
    .then(customer => {
        res.status(200).json(customer);
    })
    .catch(error => {
        res.status(500).json({ error: 'Failed to get accounts info'})
    })
})

router.get('/:id', (req, res) => {
    knew
    .select('*')
    .from('accounts')
    .then(account => {
        res.status(200).json(account)
    })
    .catch(error => {
        res.status(404).json({ error: 'could not display account'})
    })
})

module.exports = router;
