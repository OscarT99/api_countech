const {Schema,model} = require('mongoose');

const clienteSchema = Schema({
    tipoCliente : {type:String, enum:['Empresa','Persona natural'],require:[true,'El tipo de cliente es requerido']},
    tipoIdentificacion : {type:String, enum:['C.C','C.E','T.E','NIT','T.I'], require:[true,'El tipo de identificación es obligatorio'] },
    numeroIdentificacion : {type:Number,require:[true,'El numero de identificación es obligatorio'],unique:true, min:5},
    razonSocial: { type: String, required: [true,'La razon social es obligatoria'], match: /^[A-Za-z\s]+$/ },
    nombreComercial: { type: String, required: [true,'El nombre comercial es obligatorio'], match: /^[A-Za-z\s]+$/ },
    ciudad: { type: String, required: [true,'La ciudad es obligatorio'], match: /^[A-Za-z\s]+$/ },
    direccion: { type: String, required: [true,'La dirección de residencia es obligatorio'] },
    contacto : { type: String, required: [true,'El nombre comercial es obligatorio'], match: /^[A-Za-z\s]+$/ },
    telefono: { type: String, required: [true,'El numero de telefono es obligatorio'],unique:true },
    correo: {type: String,required: [true,'El correo electronico es obligatorio'],match: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{3,}$/,unique:true},
    estado: { type: Boolean, default: true },
});

module.exports = model('Cliente',clienteSchema)

