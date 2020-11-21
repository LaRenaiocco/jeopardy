import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Board from './components/Board';


// import './App.css';


const CATEGORIES = ['animals', 'brain-teasers', 'celebrities', 
    'entertainment', 'general', 'geography', 'history', 'hobbies', 
    'humanities', 'literature', 'movies', 'music', 'people', 
    'religion-faith', 'science-technology', 'sports', 'television', 
    'video-games', 'world']

function App() {
  const [roundOne, setRoundOne] = useState([])
  const [roundTwo, setRoundTwo] = useState([])

  useEffect(() => {

  const shuffled = CATEGORIES.sort(() => Math.random() - 0.5)
  setRoundOne(shuffled.slice(0,6))
  setRoundTwo(shuffled.slice(6,12))
  console.log(roundOne)
  console.log(roundTwo)
  }, [])

  return (
    <Container>
      <div className="App">
        <Board
          roundOne={roundOne}
          roundTwo={roundTwo} />
      </div>
    </Container>
  );
}

export default App;
