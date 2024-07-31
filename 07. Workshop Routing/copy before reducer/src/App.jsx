import { Route, Routes } from 'react-router-dom'

import { AuthenticationContextProvider } from './contexts/AuthenticationContext'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import GameList from './components/game-list/GameList'
import GameCreate from './components/game-create/GameCreate'
import GameDetails from './components/game-details/GameDetails'
import Logout from './components/logout/Logout'


function App() {
  
  return (
    <AuthenticationContextProvider>
      <div id="box">
        <Header />

        <main id="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/games' element={<GameList />} />
            <Route path='/games/create' element={<GameCreate />} />
            <Route path='/games/:gameId/details' element={<GameDetails />} />
          </Routes>
        </main>
      </div>
    </AuthenticationContextProvider>
  )
}

export default App
