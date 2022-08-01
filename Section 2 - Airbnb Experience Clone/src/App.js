import './App.css';
import './style.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import cardData from './data.js'
function App() {
  const cardElements = cardData.map(card => {
    return (
      <Card 
        img={card.coverImg} 
        rating={card.stats.rating} 
        reviews={card.stats.reviewCount} 
        country = {card.location} 
        title={card.title} 
        price={card.price}
        openSpots={card.openSpots}
      />
    )
  })
  return (
    <div className = 'App'>
      <Navbar />
      <Hero />
      <section className='card--list'>
        {cardElements}
      </section>
    </div>
  );
}

export default App;
