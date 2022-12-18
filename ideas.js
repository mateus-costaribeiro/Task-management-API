// Require and call express
const express = require('express')
const app = express()

// Require all utils
const {getAllFromDatabase, getFromDatabaseById, addToDatabase, 
        updateInstanceInDatabase, deleteFromDatabasebyId, deleteAllFromDatabase} = require('./db')

// Create router for '/ideas'
const ideasRouter = express.Router()
module.exports = ideasRouter

// Route to get ideas array
ideasRouter.get('/', (req, res, next) => {
    const allIdeas = getAllFromDatabase('ideas')
    res.status(200).send(allIdeas)
})

// Route to add idea to ideas array
ideasRouter.post('/', (req, res, next) => {
    const newIdea = addToDatabase('ideas', req.body)
    res.status(201).send(newIdea)
})

// Route to get a single idea by ID
ideasRouter.get('/:ideaId', (req, res, next) => {
    const ideaById = getFromDatabaseById('ideas', req.params.ideaId)
    if(ideaById) {
        res.status(200).send(ideaById)
    } else {
        res.status(404).send('IdeaID not found.')
    }
})

// Route to update idea by ID
ideasRouter.put('/:ideaId', (req, res, next) => {
    const ideaById = getFromDatabaseById('ideas', req.params.ideaId)
    if(ideaById) {
        const updatedIdea = updateInstanceInDatabase('ideas', req.body)
        res.status(200).send(updatedIdea)
    } else {
        res.status(404).send('IdeaID not found.')
    }

})

// Route to delete idea by ID
ideasRouter.delete('/:ideaId', (req, res, next) => {
    const ideaById = getFromDatabaseById('ideas', req.params.ideaId)
    if(ideaById) {
        const deletedIdea = deleteFromDatabasebyId('ideas', req.params.ideaId)
        res.status(204).send(deletedIdea)
    } else {
        res.status(404).send('IdeaID not found.')
    }
})