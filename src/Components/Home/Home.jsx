import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';

import '../Home/Home.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const darkMode = useSelector((state)=>state.theme.darkMode)
  const pokemonImg = 'https://images8.alphacoders.com/124/1243956.jpg'
  return (
    <>
      <Navbar />
      <div className = {`home ${darkMode ? 'dark' : ''}`} style={{ padding: '20px' }}>
        <center><h1 className = {`titletext ${darkMode ? 'dark' : ''}`}>Welcome to the Pokémon App!</h1><br/></center>
        <div className='hero-container'>
          <img className='hero' src = {pokemonImg}/>
        </div>
        
        {/*<h1 className="text-4xl font-bold text-gray-900">Heading 1</h1>*/}
        <p className = {`text ${darkMode ? 'dark' : ''}`}>
          This is a fun and interactive application where you can explore information about various Pokémon.
          Whether you're a seasoned Pokémon Trainer or just starting your journey, our app has something for everyone!
        </p>
        <p className = {`text ${darkMode ? 'dark' : ''}`}>
          Get started by browsing through the Pokédex, discovering the unique abilities, base experience, height, and weight of each Pokémon.
          You can also search for specific Pokémon or navigate through different pages to find the information you need.
        </p><br />
        <p className = {`text ${darkMode ? 'dark' : ''}`}>
          Ready to begin your adventure? <Link className='link' to="/pokemons"> Start exploring now!</Link>
        </p>
      </div>
    
  
    </>
  );
};

export default Home;
