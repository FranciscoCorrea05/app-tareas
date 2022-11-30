const path = require ("path");
const fs = require ("fs");
const { json } = require("express");

//console.log( path.resolve(__dirname, "./data/tareas.json") );
const rutaAlJson = path.resolve(__dirname, "./data/tareas.json");
//console.log(rutaAlJson);
//console.log (fs.readFileSync(rutaAlJson, { encoding: "utf-8" }));

//fs
//console.log(fs);
const tareas = fs.readFileSync(rutaAlJson, {encoding: "utf-8"});
let uno = JSON.parse(tareas);

switch(process.argv[2]){
case "listar":
listar()
break;
case undefined:
console.log("atencion- tienes que pasar una accion");
break;
default:
console.log("no entiendo que quieres hacer");
break;
}
  
function listar () {
console.log("listado de tareas");
uno.forEach(element => {
console.log(`el titulo ${element.titulo} esta en estado: ${element.estado}`);
});
}




