import React from 'react'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Player from './pages/Player/Player.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import TitleCards from './components/TitleCards/TitleCards.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player/:id' element={<Player/>}/> 
      </Routes>
    </div>
  )
}

export default App
