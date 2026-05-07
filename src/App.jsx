import { useState } from 'react'
import Header from './components/Header'
import NavigationBar from './components/NavigationBar'
import ScoreScreen from './components/ScoreScreen'
import CardScreen from './components/CardScreen'
import './App.css'

function App() {
  const [bestScore, setBestScore] = useState({characters: 0, locations: 0});
  const [currScore, setCurrScore] = useState(0);
  const [prevCards, setPrevCards] = useState([]);
  const [gameMode, setGameMode] = useState('characters');

  function handleCardSelection(cardUuid) {
    if (prevCards.includes(cardUuid)) {
      if (currScore > bestScore[gameMode]) setBestScore({...bestScore, [gameMode]: currScore});
      setCurrScore(0);
      setPrevCards([]);
    } else {
      setPrevCards([...prevCards, cardUuid]);
      setCurrScore(currScore + 1);
    }
  }

  function handleModeSwitch(event) {
    if (event.target.getAttribute('data-mode') !== gameMode) {
      setGameMode(event.target.getAttribute('data-mode'));
      setCurrScore(0);
    }
  }

  return (
    <>
      <div className="overlay"></div>
      <Header />
      <NavigationBar onClick={handleModeSwitch} />
      <div className="section-divider"></div>
      <ScoreScreen bestScore={bestScore[gameMode]} currScore={currScore} />
      <div className="section-divider"></div>
      <CardScreen gameMode={gameMode} onClick={handleCardSelection} />
    </>
  )
}

export default App
