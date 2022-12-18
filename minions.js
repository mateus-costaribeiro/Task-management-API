// Require and call express
const express = require('express');
const app = express()

// Require all utils
const {createMeeting, getAllFromDatabase, getFromDatabaseById, addToDatabase, 
        updateInstanceInDatabase, deleteFromDatabasebyId, deleteAllFromDatabase} = require('./db')

// Create router for '/minions'
const minionsRouter = express.Router()
module.exports = minionsRouter

// Get minions array
minionsRouter.get('/', (req, res, next) => {
    const allMinions = getAllFromDatabase('minions')
    res.status(200).send(allMinions)
})

// Add minion to minions array
minionsRouter.post('/', (req, res, next) => {
    const newMinion = addToDatabase('minions', req.body)
    res.status(201).send(newMinion)
})

// Get a single minion by ID
minionsRouter.get('/:minionId', (req, res, next) => {
    const minionFound = getFromDatabaseById('minions', req.params.minionId)
    if(minionFound) {
        res.status(200).send(minionFound)    
    } else {
        res.status(404).send('Minion not found.')
    }
})

// Update minion by ID
minionsRouter.put('/:minionId', (req, res, next) => {
    const minionToUpdate = getFromDatabaseById('minions', req.params.minionId)
    if(minionToUpdate) {
        let updatedMinion = updateInstanceInDatabase('minions', req.body)
        res.status(200).send(updatedMinion)
    } else {
        res.status(404).send('Minion not found.')
    }    
})

// Delete minion by ID
minionsRouter.delete('/:minionId', (req, res, next) => {
    const minionToDelete = getFromDatabaseById('minions', req.params.minionId)
    if(minionToDelete) {
        let minionDeleted = deleteFromDatabasebyId('minions', req.params.minionId)
        res.status(204).send(minionDeleted)
    } else {
        res.status(404).send('Minion not found.')
    }
})