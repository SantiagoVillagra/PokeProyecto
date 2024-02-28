
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import style from './detail.module.css'

export default function Detail() {
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(({ data }) => {
        setPokemon({
          imagen: data.sprites.front_default,
          nombre: data.name,
          vida: data.stats.find((stat) => stat.stat.name === "hp").base_stat,
          ataque: data.stats.find((stat) => stat.stat.name === "attack").base_stat,
          defensa: data.stats.find((stat) => stat.stat.name === "defense").base_stat,
          velocidad: data.stats.find((stat) => stat.stat.name === "speed").base_stat,
          altura: data.height,
          peso: data.weight,
        });
      })
      .catch((error) => {
        console.error(error);
        setPokemon({}); // Si hay error piso el estado. 
      });
  }, [id]);

  return (
    <div>
      <img src={pokemon.imagen} alt={pokemon.nombre} />
      <div className={style.nombre}>
        <p >{pokemon.nombre}</p>
        <p>Vida: {pokemon.vida}</p>
        <p>Ataque: {pokemon.ataque}</p>
        <p>Defensa: {pokemon.defensa}</p>
        <p>Velocidad: {pokemon.velocidad}</p>
        <p>Altura: {pokemon.altura}</p>
        <p>Peso: {pokemon.peso}</p>
      </div>
    </div>
  );
}