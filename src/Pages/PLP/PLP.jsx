import React, { useContext } from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';
import './PLP.css'
import Navbar from '../../Components/Navbar/Navbar';
import { fetchData } from '../../Utils/pokemonUtils';
import { useSelector } from 'react-redux';

//PLP - Pokemon Listing Page -> displays the fetched pokemons in Cards

const apiURL = 'https://pokeapi.co/api/v2/pokemon/';

const PLP = () => {
    const darkMode = useSelector((state)=>state.theme.darkMode);
    const {data, isLoading, error} = useQuery('pokemons', () => fetchData(apiURL));
   // console.log(data);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
      <div>
      <Navbar /> 
        <div className={`PLPtitle ${darkMode ? 'dark' : ''}`}>Pokemons List</div>
        <div className={`pokemon-grid ${darkMode ? 'dark' : ''}`}>
          {data.results.map((pokemon, index) => (
            <PokemonCard key = {index} pokemon={pokemon} id={index + 1}/>
          ))}
        </div>
      </div>
    );

}

export default PLP