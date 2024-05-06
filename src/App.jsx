import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import PLP from './Pages/PLP/PLP'
import PDP from './Pages/PDP/PDP'
import { QueryClient, QueryClientProvider } from 'react-query';

import { Provider } from 'react-redux'
import { store } from './app/store'



const queryClient = new QueryClient();


function App() {
  return (
    <Provider store={store}>
    
      <QueryClientProvider client={queryClient}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/pokemons" element={<PLP />} />
            <Route path="/pokemons/:id" element={<PDP />} />
          </Routes>  
        </QueryClientProvider>
      
    </Provider>
  )
}

export default App
