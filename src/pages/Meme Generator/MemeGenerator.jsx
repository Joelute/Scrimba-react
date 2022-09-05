import styles from './style.module.css'
import Header from './components/Header'
import Meme from './components/Meme'
function App() {
  return (
    <div className={styles["app"]}>
      <Header />
      <Meme />
    </div>
  );
}

export default App;
