import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Card from './components/Card.js'
import Data from './data.js'
import './style.css'

function App() {
  let cardElements = Data.map(cardData => {
    return (<Card 
      title = {cardData.title}
      location = {cardData.location}
      googleMapsUrl = {cardData.googleMapsUrl}
      startDate = {cardData.startDate}
      endDate = {cardData.endDate}
      description = {cardData.description}
      imageUrl = {cardData.imageUrl} />
  )})

  return (
    <div className="App">
      <Navbar />
      {cardElements}
    </div>
  );
}

export default App;
