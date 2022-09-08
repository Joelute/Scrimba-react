import Info from './components/Info'
import About from './components/About'
import Interest from './components/Interests'
import styles from './BusinessCard.module.css'

function BusinessCard() {
  return (
    <div className={styles['BusinessCard']}>
      <Info />
      <About />
      <Interest />
    </div>
  );
}

export default BusinessCard;
