
import { useState, useEffect } from "react";
import axios from "axios";
//import style from "./Home.module.css"

export default function Home() {
 
    const [pagination, setPagination] = useState([]);
    const [currentPage, setCurrentPage] = useState(pagination);
  
    const getPokemonPagination = async () => {
      try {
        const response = await axios(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${(currentPage - 1) * 10}`);
        setPagination(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
    getPokemonPagination();
    }, [currentPage]);
  
    return (
      <div>
        <h1>POKEMONS</h1>
        <div>
        <ol>
          {pagination.map((pokemon) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))}
        </ol>
        <button onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}>
          Prev
        </button>
        <button onClick={() => setCurrentPage((prevPage) => prevPage + 1)}>
          Next
        </button>
        </div>
     
      </div>
    );
}

