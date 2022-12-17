const express = require('express');
const app = express()

const apiRouter = express.Router()
app.use('/api', apiRouter)

const minionsRouter = require('./minions')

apiRouter.use('/minions', minionsRouter)

module.exports = apiRouter;