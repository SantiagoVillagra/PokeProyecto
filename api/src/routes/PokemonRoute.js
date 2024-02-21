const {Router} = require('express')
const pokemonRouter = Router()
const {pokemonHandler, idHandler, nameHandler} = require("../handlers/pokemonHandlers") 

pokemonRouter.get("/pokemon",pokemonHandler )
pokemonRouter.get("/pokemon/:id",idHandler )
pokemonRouter.get("/pokemon/name", nameHandler)

module.exports = pokemonRouter



