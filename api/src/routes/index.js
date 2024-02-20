const { Router } = require('express');
//const { Type } = require('../db');
const PokemonRoute = require('../routes/PokemonRoute')
const TypeRoute = require('../routes/TypeRoute')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//LAS RUTAS TIENEN QUE IR DE LO ESPECIFICO A LO GENERAL


router.use("/pokemon",PokemonRoute )

router.use("/type", TypeRoute )
/*

router.get("/pokemon/name", (req,res) =>{
    res.status(200).send("nombres")
})  

router.get("/pokemon/:id", (req,res) =>{
    const {id}= req.params
    res.status(200).send(`id: ${id}`)
})


router.get("/type", (req,res) =>{
    res.status(200).send("tipos de pokemon")
})

router.get("/pokemon", (req,res) =>{
    const {name}= req.query
    res.status(200).send(`${name}`)
}) 
*/


// Por id: "https://pokeapi.co/api/v2/pokemon/{id}"
// Por nombre: "https://pokeapi.co/api/v2/pokemon/{name}"
// Por tipo: "https://pokeapi.co/api/v2/type"

module.exports = router;
