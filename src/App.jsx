import { useState } from 'react'
import ScoreScreen from './components/ScoreScreen'
import CardScreen from './components/CardScreen'
import './App.css'

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [currScore, setCurrScore] = useState(0);
  const [prevCards, setPrevCards] = useState([])

  function handleCardSelection(charId) {
    if (prevCards.includes(charId)) {
      setBestScore(currScore);
      setCurrScore(0);
    } else {
      setPrevCards([...prevCards, charId]);
      currScore += 1;
    }
  }
;
  return (
    <>
      <ScoreScreen bestScore={bestScore} currScore={currScore} />
      <CardScreen onClick={handleCardSelection} />
    </>
  )
}

export default App
