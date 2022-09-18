import Navbar from './components/Navbar';
import Card from './components/Card'
import Data from './data'
import styled from 'styled-components';

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
    <AppBody>
      <Navbar />
      {cardElements}
    </AppBody>
  );
}

export default App;

const AppBody = styled.div`

  font-family: Inter, sans-serif;
  
  margin: 0 auto;
  margin-left: 5em;
  
  @media (max-width: 600px) {
    margin-left: 0em;
    margin-bottom: 5em;
  }
`