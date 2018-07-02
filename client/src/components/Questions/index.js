import React from 'react';
import Question from './Question'
import Answers from './Answers'
import './styles.css'

const Questions = props => {
  //console.log('Questions', props)
  //const selectedAnswer = (props.selectedAnswer === '' ? null : props.selectedAnswer)
  return(
    <div className='questions-container'>
      <Question 
        label={props.data.q} 
        id={props.data.id} 
      />
      <Answers 
        questionIndex={props.questionIndex} 
        data={props.data.a} 
        acceptableAnswer={props.data.c} 
        onClick={props.onClick}
        selectedAnswer={props.selectedAnswer}
      />
    </div>
  )
}

export default Questions