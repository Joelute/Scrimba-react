import logo from './logo.svg';
import './App.css';
import Joke from './Joke'

function App() {
  return (
    <div className="App">
      <Joke setup = 'How did the telephone propose to its girlfriend?' punchline = 'He gave her a ring.' />
      <Joke setup = 'Why was the dead man not living well?' punchline = 'Because he was dead broke.' />
    </div>
  );
}

export default App;
