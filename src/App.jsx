import { useState } from 'react'
import {Link, Routes, Route} from 'react-router-dom'
import BusinessCard from './pages/Business Card/BusinessCard'
import Home from './pages/Home/Home'
import TravelJournal from './pages/Travel Journal/TravelJournal'

function App() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/business-card'>Business Card</Link>
        <Link to='/travel-journal'>Travel Journal</Link>
      </nav>
      

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/business-card' element={<BusinessCard />} />
        <Route path='/travel-journal' element={<TravelJournal />} />
      </Routes>
    </div>
  )
}

export default App
