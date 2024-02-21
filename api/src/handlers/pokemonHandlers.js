
// /pokemon
const pokemonHandler = (req,res) => {
    res.status(200).send("aca estan todos los pokemon")
}
// /:id
const idHandler = (req,res) => {
    res.status(200).send("pokemon filtrados por id")
}
// /name
const nameHandler =  (req,res) => {
    res.status(200).send("pokemon filtrados por name")
}

module.exports = {
    pokemonHandler,
    idHandler,
    nameHandler
}


/*
El handler se va a encargar de recibir las rutas
unificar datos 
 y devolver la respuesta
 INVOCA AL CONTROLLER 

 Controller
 Maneja la informacion que viene desde la fuente externa. API Y DB
Es una funcion


*/