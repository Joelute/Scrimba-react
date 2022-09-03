import { useState } from 'react'
import {Link, Routes, Route} from 'react-router-dom'
import BusinessCard from './pages/Business Card/BusinessCard'
import Home from './pages/Home/Home'

function App() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/business-card'>Business Card</Link> 
      </nav>
      

      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/business-card' element={<BusinessCard />}></Route>
      </Routes>
    </div>
  )
}

export default App
