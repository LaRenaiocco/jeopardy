import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';


function QuestionButton(props) {

  const [complete, setComplete] = useState(false)

  function handleClick() {
    setComplete(true)
  }

  const questionTemplate = (
    <div>
    <Card onClick={handleClick} id={props.id}>{props.points}</Card>
  </div>
  )

  const completeTemplate = 
  (
    <div>
    <Card>Question Complete</Card>
  </div>
  )


  return <div>{complete ? completeTemplate : questionTemplate }</div>
}

export default QuestionButton;