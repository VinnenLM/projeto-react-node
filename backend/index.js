const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()
const port = 3333

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
    credentials: true
}));

routes(app)

app.listen(port, () => console.log(`Escutando na porta ${port}`))

module.exports = app