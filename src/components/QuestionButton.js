import React, { useState } from 'react';
import Question from './Question';
import Card from 'react-bootstrap/Card';



function QuestionButton(props) {

  const [complete, setComplete] = useState(false)
  const [showQuestion, setShowQuestion] = useState(false)

  function handleClick() {
    setComplete(true)
    setShowQuestion(true)

  }

  function handleSubmit(bool) {
    setShowQuestion(bool)
  }

  const questionTemplate = (
    <React.Fragment>
      <Card onClick={handleClick} id={props.id}>{props.points}</Card>

    </React.Fragment>
  )

  const completeTemplate = 
  (
    <div>
    <Card>Question Complete</Card>
    <Question showQuestion={showQuestion} key={props.points} handleSubmit={handleSubmit}/>
  </div>
  )


  return <div>{complete ? completeTemplate : questionTemplate }</div>
}

export default QuestionButton;