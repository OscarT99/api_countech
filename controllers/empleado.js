//Importar paquetes requeridos de node
const {response, json} = require('express')

//Importacion de los modelos 
const Empleado = require('../models/empleado')


const empleadoGet = async(req, res = response)=>{
    const {cedula}=req.query 

    const empleados = await Empleado.find()
    res.json({
        empleados 
    })
}
        
const empleadoPost = async(req, res = response) =>{
    const body = req.body
    let mensaje =''
 
    try{
        const empleado = new Empleado(body)
        await empleado.save()
        mensaje = 'La insercion se realizo exitosamente'
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
const empleadoPut = async(req, res = response) => {

    const {cedula,tipoDocumento,nombres,apellidos,correo,telefono,ciudad,direccion,fechaIngreso,estado} = req.body
    let mensaje = ''

    try{
        const empleado = await Empleado.findOneAndUpdate({cedula:cedula},{tipoDocumento:tipoDocumento,nombres:nombres,apellidos:apellidos,correo:correo,telefono:telefono,ciudad:ciudad,direccion:direccion,fechaIngreso:fechaIngreso,estado:estado}) 
        mensaje = 'La modificacion se efectuo exitosamente'
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la modificación'
    }

    res.json({
        msg : mensaje
    })
}

const empleadoDelete = async(req, res = response) => {
    const {_id} = req.body
    let mensaje = ''

    try{
        const empleado = await Empleado.deleteOne({_id:_id})
        mensaje = 'La eliminación se efectuo exitosamente'
    }
    catch{
        mensaje = 'Se presentaron problemas en la eliminación'
    }
    res.json({
        msg : mensaje
    })
}

module.exports = {
    empleadoGet,
    empleadoPost,
    empleadoPut,
    empleadoDelete
}
