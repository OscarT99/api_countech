const {Router} = require('express')

const route = Router()

const{ clienteGet, clientePost, clientePut, clienteDelete } = require('../controllers/cliente')

route.get('/cliente',clienteGet)

route.post('/cliente',clientePost)

route.put('/cliente',clientePut)

route.delete('/cliente',clienteDelete)

module.exports = route