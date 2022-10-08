const fecha = new Date();
console.log(fecha);

const fechaNacimiento = new Date("november 29, 2001");
console.log(fechaNacimiento);

console.log(fecha > fechaNacimiento);

const dia = fechaNacimiento.getDate();
const mes = fechaNacimiento.getMonth() + 1;
const año = fechaNacimiento.getFullYear(); 
