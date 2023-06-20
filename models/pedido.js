const {Schema, model} = require('mongoose')

const pedidoSchema = Schema({
    cliente : { type: String, required: [true,'El nombre del cliente es obligatorio'], match: /^[A-Za-z\s]+$/ },
    contacto : { type: String, required: [true,'El nombre del contacto es obligatorio'], match: /^[A-Za-z\s]+$/ },
    ordenTrabajo :  {type:Number,require:[true,'El numero de orden de trabajo es obligatorio'],unique:true,min:1},
    fechaOrdenTrabajo: { type: Date, required: [true,'La fecha de la orden de trabajo es obligatorio'] },
    fechaEntregaOrdenTrabajo : { type: Date, required: [true,'La fecha de la orden de trabajo es obligatorio'] },
    formaPago : { type: String, enum: ['Contado', 'Credito'], required: [true,'La forma de pago es obligatorio'] },
    valorTotal : {type:Number,require:[true,'El valor total es obligatorio'],min:1},
    observaciones : { type: String, required: false, max:500 },
    estado : {type:String,num:['Ingresado','En producción','Terminado','Entregado'],default:'Ingresado'}
});

module.exports = model('Pedido',pedidoSchema)