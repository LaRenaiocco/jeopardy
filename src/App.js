import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Board from './components/Board';

// import './App.css';

function App() {
  return (
    <Container>
      <div className="App">
        <Board />
      </div>
    </Container>
  );
}

export default App;
