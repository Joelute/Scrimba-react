import { useState } from 'react'
import {Link, Routes, Route} from 'react-router-dom'
import styled from 'styled-components'
import BusinessCard from './pages/Business Card/BusinessCard'
import Home from './pages/Home/Home'
import TravelJournal from './pages/Travel Journal/TravelJournal'
import MemeGenerator from './pages/Meme Generator/MemeGenerator'
import Tenzies from './pages/Tenzies/Tenzies'
import PicSome from './pages/Pic Some/PicSome'




function App() {
  return (
    <div>
      <NavBar>
        <StyledLink to='/'><i className="fa-solid fa-house"></i><StyledText>Home</StyledText></StyledLink>
        <StyledLink to='/business-card'><i className="fa-solid fa-id-badge"></i><StyledText>Business Card</StyledText></StyledLink>
        <StyledLink to='/travel-journal'><i className="fa-solid fa-book"></i><StyledText>Travel Journal</StyledText></StyledLink>
        <StyledLink to='/meme-generator'><i className="fa-solid fa-face-laugh-squint"></i><StyledText>Meme Generator</StyledText></StyledLink>
        <StyledLink to='/tenzies'><i className="fa-solid fa-dice"></i><StyledText>Tenzies</StyledText></StyledLink>
        <StyledLink to='/picsome'><i className="fa-solid fa-image"></i><StyledText>Pic Some</StyledText></StyledLink>
      </NavBar>
      
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/business-card' element={<BusinessCard />} />
        <Route path='/travel-journal' element={<TravelJournal />} />
        <Route path='/meme-generator' element={<MemeGenerator />} />
        <Route path='/tenzies' element={<Tenzies />} />
        <Route path='/picsome/*' element={<PicSome />} />
      </Routes>
    </div>
  )
}

export default App

const NavBar = styled.nav`
  width: 5rem;
  height: 100vh;
  position: fixed;
  display:flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  transition: width 200ms ease;
  box-shadow: 0 0 .25rem 0 rgba(0, 0, 0, .5);
  background-color: white;
  z-index: 100;

  &:hover {
    width: 17rem;
  }

  i {
    margin: 0 1.5rem;
    min-width: 2rem;
    font-size:1.5rem;
  }

  &:hover span {
    display:block;
  }
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 5rem;
  text-decoration: none;
  color: #F47B6E;
  transition: opacity 150ms ease;

  &:hover {
    opacity: 0.75;
  }
`

const StyledText = styled.span`
  display: none;
  margin-left: 1rem;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
`

