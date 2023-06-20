const {response, json} =require('express')

const Cliente = require('../models/cliente')

const clienteGet = async(req, res = response)=>{
    const {numeroIdentificacion} = req.query

    const clientes = await Cliente.find()
    res.json({
        clientes
    })
}

const clientePost = async(req, res = response) =>{
    const body = req.body
    let  mensaje = ''

    try{
        const cliente = new Cliente(body)
        await cliente.save()
        mensaje = 'La insercion se realizo exitosamente'
    }catch(error){
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

const clientePut = async(req, res = response) => {
    const {numeroIdentificacion,tipoCliente,tipoIdentificacion,razonSocial,nombreComercial,ciudad,direccion,contacto,telefono,correo,estado} = req.body
    let mensaje = ''

    try{
        const cliente = await Cliente.findOneAndUpdate({numeroIdentificacion:numeroIdentificacion},{tipoCliente:tipoCliente,tipoIdentificacion:tipoIdentificacion,razonSocial:razonSocial,nombreComercial:nombreComercial,ciudad:ciudad,direccion:direccion,contacto:contacto,telefono:telefono,correo:correo,estado:estado})
        mensaje = 'La modificacion se efectuo exitosamente'
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la modificación'
    }

    res.json({
        msg: mensaje
    })
}

const clienteDelete = async (req,res = response) => {
    const {_id} = req.body
    let mensaje = ''

    try{
        const cliente = await Cliente.findOneAndDelete({_id:_id})
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
    clienteGet,
    clientePost,
    clientePut,
    clienteDelete
})