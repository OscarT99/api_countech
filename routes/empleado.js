const { Router } = require("express");

const route = Router()

const { empleadoGet, empleadoPost, empleadoPut, empleadoDelete } = require ('../controllers/empleado')

route.get('/empleado',empleadoGet)

route.post('/empleado',empleadoPost)

route.put('/empleado',empleadoPut)

route.delete('/empleado',empleadoDelete)

module.exports = route


