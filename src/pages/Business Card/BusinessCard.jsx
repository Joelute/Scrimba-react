import Info from './components/Info'
import About from './components/About'
import Interest from './components/Interests'
import './style.css'

function BusinessCard() {
  return (
    <div className="App">
      <Info />
      <About />
      <Interest />
    </div>
  );
}

export default BusinessCard;
