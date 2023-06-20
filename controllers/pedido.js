const {response, json} = require('express')

const Pedido = require('../models/pedido')

const pedidoGet = async (req, res = response) => {
    const {ordenTrabajo} = req.query

    const pedidos = await Pedido.find()

    res.json({
        pedidos
    })
}

const pedidoPost = async (req, res = response) => {
    const body = req.body
    mensaje = ''

    try{
        const pedido = new Pedido(body)
        await pedido.save()
        mensaje = 'La inserción se efectuo exitosamente'
    }
    catch(error){
        if (error){
            if (error.name   === 'ValidationError') {
                console.error(Object.values(error.errors).map(val => val.message))
                mensaje = Object.values(error.errors).map(val => val.message)
            }
        }
        console.log(mensaje)
    }
    res.json({
        msg: mensaje
    })
}

const pedidoPut = async(req, res = response) => {
    const{ordenTrabajo,fechaOrdenTrabajo,fechaEntregaOrdenTrabajo,formaPago,valorTotal,observaciones,estado} = req.body
    mensaje = ''

    try{
        const pedido = await Pedido.findOneAndUpdate({ordenTrabajo:ordenTrabajo},{fechaOrdenTrabajo:fechaOrdenTrabajo,fechaEntregaOrdenTrabajo:fechaEntregaOrdenTrabajo,formaPago:formaPago,valorTotal:valorTotal,observaciones:observaciones,estado:estado})
        mensaje = 'La modificación se efectuo exitosamente'
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la modificación'
    }

    res.json({
        msg : mensaje
    })    
}

const pedidoDelete = async ( req, res = response) =>{
    const {_id} = req.body
    mensaje = ''

    try{
        const pedido = await Pedido.findOneAndDelete({_id:_id})
        mensaje = 'La eliminación se efectuo exitosamente'
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la eliminación'
    }

    res.json({
        msg : mensaje
    })

}

module.exports = ({
    pedidoGet,
    pedidoPost,
    pedidoPut,
    pedidoDelete
})