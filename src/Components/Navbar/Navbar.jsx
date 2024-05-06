import React,{ useContext }  from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import '../Navbar/Navbar.css'
import { Toggle } from '../Toggle/Toggle'

import NameModal from '../NameModal/NameModal'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '@/features/auth/authSlice'


const Navbar = () => {
  //const { isAuthenticated, userName, logout } = useContext(AuthContext);
 // const { darkMode } = useContext(themeContext);
  const dispatch = useDispatch();
  const darkMode = useSelector((state)=>state.theme.darkMode);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userName = useSelector((state) => state.auth.userName);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>  
        <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
          <div className="title">Pokémon App</div>
          <div className='usertext'>{isAuthenticated ? `Hi, ${userName}` : <NameModal />}</div>
          <Toggle />
          <div className='buttonsRight'>
           
            <div >
                <Link className = "nav-item nav-link active" to="/">
                  <Button className="m-2">Home</Button>
                </Link>
                <Link className = "nav-item nav-link" to="/pokemons"> 
                  <Button className="m-2">Pokemon List</Button>
                </Link>
                {isAuthenticated?
                  <Button onClick={handleLogout} className="m-2">Logout</Button>:""
                }
                
            </div>
           
          </div>
        </nav>
    </div>
  )
}

export default Navbar