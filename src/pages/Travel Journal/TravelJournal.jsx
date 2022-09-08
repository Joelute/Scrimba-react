import Navbar from './components/Navbar';
import Card from './components/Card'
import Data from './data'
import styles from './TravelJournal.module.css'

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
    <div className={styles["TravelJournal"]}>
      <Navbar />
      {cardElements}
    </div>
  );
}

export default App;
