const express = require('express');

const db = require('../dbConfig');

const router = express.Router();


router.get('/', (req, res) => {
    db
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
    db
    .select('*')
    .from('accounts')
    .where( 'id', '=', req.params.id)
    .then(account => {
        res.status(200).json(account)
    })
    .catch(error => {
        res.status(404).json({ error: 'could not display account'})
    })
})

router.post('/', (req, res) => {
    db
    .insert(req.body)
    .into('accounts')
    .then( account => {
        res.status(200).json('account was added');
    })
    .catch(error => {
        res.status(400).json({ error: 'could not post account'})
    })
})

router.delete('/:id', (req, res) => {
    db('accounts')
    .where('id', '=', req.params.id)
    .del()
    .then(account => {
        res.status(200).json('account was deleted');
    })
    .catch(error => {
        res.status(400).json({ error: 'could not delete account'})
    })
})

router.put('/:id', (req, res) => {
    db
    .update(req.body)
    .into('accounts')
    .where('id', '=', req.params.id)
    .then(account => {
        res.status(200).json('account was updated');
    })
    .catch(error => {
        res.status(400).json({ error: 'could not update account'})
    })
})

module.exports = router;
