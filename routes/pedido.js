const {Router} = require('express')

const route = Router()

const { pedidoGet, pedidoPost, pedidoPut, pedidoDelete } = require('../controllers/pedido')

route.get('/pedido',pedidoGet)

route.post('/pedido',pedidoPost)

route.put('/pedido',pedidoPut)

route.delete('/pedido',pedidoDelete)

module.exports = route