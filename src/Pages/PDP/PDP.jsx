import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar';
//import { fetchData, getImageURL } from '../../Utils/pokemonUtils';
import '../PDP/PDP.css'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../Components/ui/table"

import Graph from '@/Components/Graph/Graph';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '@/features/fetchData/fetchDataSlice';


//PDP - Pokemon Details Page -> Displays the details of the selected pokemons

export const getImage = (id) => {
  const paddedId = `00000${id}`.slice(-3);
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedId}.png`;
};
const PDP = () => {
  //const {darkMode} = useContext(ThemeContext);
  const darkMode = useSelector((state)=>state.theme.darkMode);
  const { id } = useParams();
  const apiURL = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const imageURL = getImage(id);
  
  //console.log(apiURL);
  
  const dispatch = useDispatch();
  useEffect(() => {
    //dispatch(fetchPokemonData(apiURL));
    dispatch(fetchData({ apiURL: apiURL, page: "PDP" }));
  }, [apiURL]);

  const pokemonData = useSelector((state) => state.fetchData.pokemonData);
  //console.log(pokemonData)
  return (
    <>
    <Navbar/>
    <div className={`pdp-container ${darkMode ? 'dark' : ''}`}>
      {pokemonData.abilities?.length > 0 ? pokemonData && (
        <div className={`pokemon-details ${darkMode ? 'dark' : ''}`}>
        <center><div className='PDPtitle'>Pokemon Details - {pokemonData.name}</div></center>
        <div className='detail-container'>
          <center><img className='pokemon-img' src={imageURL} alt={pokemonData.name} /></center>
          <Table className='detail-table'>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-bold">Name:</TableCell>
                <TableCell>{pokemonData.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-bold">Abilities:</TableCell>
                <TableCell>
                <ul>
                  {pokemonData.abilities.map((ability, index) => (
                    <li key={index}>{ability.ability.name}</li>
                  ))}
                  </ul>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-bold">Base Experience:</TableCell>
                <TableCell>{pokemonData.base_experience}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-bold">Height:</TableCell>
                <TableCell>{pokemonData.height}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-bold">Weight:</TableCell>
                <TableCell>{pokemonData.weight}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
          <Graph data={pokemonData} />
        </div>
      ): <div>No Data</div>}
    </div>

    

    </>
  )
}

export default PDP