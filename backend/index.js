const express = require('express')
var cors = require('cors')
const routes = require('./routes')

const app = express()
const port = 3333

app.use(cors())
routes(app)

app.listen(port, () => console.log(`Escutando na porta ${port}`))

module.exports = app