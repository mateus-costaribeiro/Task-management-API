const express = require('express');
const app = express()

const apiRouter = express.Router()
app.use('/api', apiRouter)

const minionsRouter = require ('./minions')
const ideasRouter = require ('./ideas')

apiRouter.use('/minions', minionsRouter)
apiRouter.use('/ideas', ideasRouter)

module.exports = apiRouter;