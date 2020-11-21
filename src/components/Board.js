import React, { useEffect, useState } from 'react';
import QuestionButton from './QuestionButton';
import Category from './Category';
import Title from './Title';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const POINTVALUES = [100, 200, 300, 400, 500]

function Board(props) {

  const [showBoard, setShowBoard] = useState(false)
  const [round, setRound] = useState('round1')



  const questionColumn = POINTVALUES.map((points, index) => (
    <QuestionButton id={index} points={points} />
  ))

  const categoryColumns = props.roundOne.map((category) => (
    <Col>
      <Category category={category}/>
      {questionColumn}
    </Col>
  ))




  function showBoardToggle() {
    setShowBoard(true)
  }

  const startScreenTemplate = (
    <div>
      <Button onClick={showBoardToggle}>Start</Button>
    </div>
  )

  const gameViewTemplate = (
    <div>
      <Title />
      <Row>
        {categoryColumns}
      </Row>
    </div>
  )
  return <div>{showBoard ? gameViewTemplate : startScreenTemplate }</div>
}

export default Board
