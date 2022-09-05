import { useState } from 'react'
import {Link, Routes, Route} from 'react-router-dom'
import BusinessCard from './pages/Business Card/BusinessCard'
import Home from './pages/Home/Home'
import TravelJournal from './pages/Travel Journal/TravelJournal'
import MemeGenerator from './pages/Meme Generator/MemeGenerator'
import Tenzies from './pages/Tenzies/Tenzies'
import PicSome from './pages/Pic Some/PicSome'
import styles from './app.module.css'


function App() {
  return (
    <div>
      <nav className={styles['app']}>
        <Link to='/'>Home</Link>
        <Link to='/business-card'>Business Card</Link>
        <Link to='/travel-journal'>Travel Journal</Link>
        <Link to='/meme-generator'>Meme Generator</Link>
        <Link to='/tenzies'>Tenzies</Link>
        <Link to='/picsome'>Pic Some</Link>
      </nav>
      

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/business-card' element={<BusinessCard />} />
        <Route path='/travel-journal' element={<TravelJournal />} />
        <Route path='/meme-generator' element={<MemeGenerator />} />
        <Route path='/tenzies' element={<Tenzies />} />
        <Route path='/picsome' element={<PicSome />} />
      </Routes>
    </div>
  )
}

export default App
