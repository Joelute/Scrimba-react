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
        <StyledLink to='/'><StyledIcon className="fa-solid fa-house"></StyledIcon><StyledText>Home</StyledText></StyledLink>
        <StyledLink to='/business-card'><StyledIcon className="fa-solid fa-id-badge"></StyledIcon><StyledText>Business Card</StyledText></StyledLink>
        <StyledLink to='/travel-journal'><StyledIcon className="fa-solid fa-book"></StyledIcon><StyledText>Travel Journal</StyledText></StyledLink>
        <StyledLink to='/tenzies'><StyledIcon className="fa-solid fa-dice"></StyledIcon><StyledText>Tenzies</StyledText></StyledLink>
        <StyledLink to='/picsome'><StyledIcon className="fa-solid fa-image"></StyledIcon><StyledText>Pic Some</StyledText></StyledLink>
      </NavBar>
      
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/business-card' element={<BusinessCard />} />
        <Route path='/travel-journal' element={<TravelJournal />} />
        <Route path='/tenzies' element={<Tenzies />} />
        <Route path='/picsome/*' element={<PicSome />} />
      </Routes>
    </div>
  )
}

export default App

const NavBar = styled.nav`
  width: 5em;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  transition: width 200ms ease;
  box-shadow: 0 0 .25rem 0 rgba(0, 0, 0, .5);
  background-color: white;
  z-index: 100;

  @media (min-width:601px) {
    &:hover {
      width: 17em;
    }

    &:hover span {
      display:block;
    }  
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 4em;
    flex-direction: row;
    bottom: 0;
    justify-content: space-around;
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

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 1.2em 0;
  }
`

const StyledIcon = styled.i.attrs(props => ({ className: props.className}))`
  margin: 0 1.5rem;
  min-width: 2rem;
  font-size:1.5rem;

  @media (max-width: 600px) {
    margin: 0 auto;
    padding: 0 .8em;
  }
`

const StyledText = styled.span`
  display: none;
  margin-left: 1rem;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
`

