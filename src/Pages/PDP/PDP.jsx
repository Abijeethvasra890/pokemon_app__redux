import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar';
import { fetchData, getImageURL } from '../../Utils/pokemonUtils';
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
import { useSelector } from 'react-redux';


//PDP - Pokemon Details Page -> Displays the details of the selected pokemons

const PDP = () => {
  //const {darkMode} = useContext(ThemeContext);
  const darkMode = useSelector((state)=>state.theme.darkMode);
  const { id } = useParams();
  const apiURL = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const imageURL = getImageURL(id);
  //console.log(apiURL);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const fetchedData = await fetchData(apiURL);
        //console.log(fetchedData)
        setData(fetchedData);
      } catch (error) {
        console.log(error);
      } 
    };
    fetchDataAsync();
  }, [apiURL]);

  const pokemonData = data;
  
  return (
    <>
    <Navbar/>
    <div className={`pdp-container ${darkMode ? 'dark' : ''}`}>
      {pokemonData && (
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
      )}
    </div>

    

    </>
  )
}

export default PDP