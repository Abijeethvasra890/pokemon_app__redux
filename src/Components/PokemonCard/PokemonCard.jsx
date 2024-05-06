import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../PokemonCard/PokemonCard.css'
import { getImageURL } from '../../Utils/pokemonUtils';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"

import { useSelector } from 'react-redux';


//Pokemon Card -> Displays the data of each pokemon in the form of Cards

const PokemonCard = ({pokemon, id}) => {
  const imageURL = getImageURL(id);
  //const {darkMode} = useContext(ThemeContext);
  const darkMode = useSelector((state)=>state.theme.darkMode);

  return (
    <div className = {`pokemon-card-container ${darkMode ? 'dark' : ''}`}>
      <Card className="m-1">
        <CardHeader>
          <CardTitle>{pokemon.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <img className='size-56' src={imageURL} alt="Card image cap" />
        </CardContent>
        <CardFooter>
        <Link to={`/pokemons/${id}`}>
          <Button className="w-52" variant="default">Details</Button>
        </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default PokemonCard