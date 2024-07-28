import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import '../public/styles/style.css'
import { Route, Routes } from 'react-router-dom'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import GameList from './components/game-list/GameList'
import GameCreate from './components/game-create/GameCreate'
import GameDetails from './components/game-details/GameDetails'
import { AuthenticationContext } from './contexts/AuthenticationContext'

function App() {
  const [authenticationState, setAuthenticationState] = useState({});

  const changeAuthenticationState = (state) => {
    localStorage.setItem('accessToken', state.accessToken);

    setAuthenticationState(state);
  };

  const contextData = {
    userId: authenticationState._id,
    email: authenticationState.email,
    accessToken: authenticationState.accessToken,
    isAuthenticated: !!authenticationState.email,
    changeAuthenticationState
  };

  return (
    <AuthenticationContext.Provider value={contextData}>
      <div id="box">
        <Header />

        <main id="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/games' element={<GameList />} />
            <Route path='/games/create' element={<GameCreate />} />
            <Route path='/games/:gameId/details' element={<GameDetails />} />
          </Routes>
        </main>
      </div>
    </AuthenticationContext.Provider>
  )
}

export default App

