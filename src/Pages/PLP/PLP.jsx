import PokemonCard from '../../Components/PokemonCard/PokemonCard';
import './PLP.css'
import Navbar from '../../Components/Navbar/Navbar';
//import { fetchData } from '../../Utils/pokemonUtils';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from '@/features/fetchData/fetchDataSlice';

//PLP - Pokemon Listing Page -> displays the fetched pokemons in Cards

//const apiURL = 'https://pokeapi.co/api/v2/pokemon/';

const PLP = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchData({ apiURL: "https://pokeapi.co/api/v2/pokemon/", page: "PLP" }));
  },[])


  const darkMode = useSelector((state)=>state.theme.darkMode);
   // const {data, isLoading, error} = useQuery('pokemons', () => fetchData(apiURL));
   const data = useSelector((state) => state.fetchData.pokemons);
   const isLoading = useSelector((state) => state.fetchData.isLoading);
   const error = useSelector((state) => state.fetchData.error);
   // console.log(data);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
      <div>
      <Navbar /> 
        <div className={`PLPtitle ${darkMode ? 'dark' : ''}`}>Pokemons List</div>
        <div className={`pokemon-grid ${darkMode ? 'dark' : ''}`}>
          {data.results?.length > 0 ? data.results.map((pokemon, index) => (
            <PokemonCard key = {index} pokemon={pokemon} id={index + 1}/>
          )): <div>No Data</div>}
        </div>
      </div>
    );

}

export default PLP