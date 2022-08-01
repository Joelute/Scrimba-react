import logo from './logo.svg';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './App.css';
import './style.css';
import { useState } from 'react';


function App() {

  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(prevState => !prevState)
  }

  return (
    <div className='container'>
      <Navbar darkMode = {darkMode} toggleDarkMode = {toggleDarkMode}/>
      <Main darkMode = {darkMode} toggleDarkMode = {toggleDarkMode}/>
    </div>
  )
}

export default App;
