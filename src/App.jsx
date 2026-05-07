import { useState } from 'react'
import NavigationBar from './components/NavigationBar'
import ScoreScreen from './components/ScoreScreen'
import CardScreen from './components/CardScreen'
import './App.css'

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [currScore, setCurrScore] = useState(0);
  const [prevCards, setPrevCards] = useState([]);
  const [gameMode, setGameMode] = useState('characters');

  function handleCardSelection(cardUuid) {
    if (prevCards.includes(cardUuid)) {
      setBestScore(currScore);
      setCurrScore(0);
    } else {
      setPrevCards([...prevCards, cardUuid]);
      setCurrScore(currScore + 1);
    }
  }

  function handleModeSwitch(event) {
    if (event.target.getAttribute('data-mode') !== gameMode) {
      setGameMode(event.target.getAttribute('data-mode'));
      setCurrScore(0);
      setBestScore(0);
    }
  }

  return (
    <>
      <div className="overlay"></div>
      <NavigationBar onClick={handleModeSwitch} />
      <div className="section-divider"></div>
      <ScoreScreen bestScore={bestScore} currScore={currScore} />
      <div className="section-divider"></div>
      <CardScreen gameMode={gameMode} onClick={handleCardSelection} />
    </>
  )
}

export default App
