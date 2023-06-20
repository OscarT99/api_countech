const {Schema,model} = require('mongoose');

// Definir el esquema del empleado
const empleadoSchema = Schema({
  tipoDocumento: { type: String, enum: ['C.C', 'C.E'], required: [true,'El tipo de documento es obligatorio'] },
  cedula: { type: Number, required: [true,'el numero de identificación es obligatorio'], min: 5, unique:true},
  nombres: { type: String, required: [true,'El nombre es obligatorio'], match: /^[A-Za-z\s]+$/ },
  apellidos: { type: String, required: [true,'El apellido es obligatorio'], match: /^[A-Za-z\s]+$/ },
  correo: {type: String,required: [true,'El correo electronico es obligatorio'],match: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{3,}$/,unique:true},
  telefono: { type: String, required: [true,'El numero de telefono es obligatorio'],unique:true },
  ciudad: { type: String, required: [true,'La ciudad es obligatorio'], match: /^[A-Za-z\s]+$/ },
  direccion: { type: String, required: [true,'La dirección de residencia es obligatorio'] },
  fechaIngreso: { type: Date, required: [true,'La fecha de ingreso del trabajador es obligatorio'] },
  estado: { type: Boolean, default: true },
});

// Crear el modelo del empleado
module.exports = model('Empleado', empleadoSchema)
