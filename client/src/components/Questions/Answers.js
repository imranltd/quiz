import React from 'react';

const Answer = props => {
  return(<div 
      data-ref-answer-id={props.questionIndex} 
      data-ref-question-id={props.answerId} 
      className='answer'
      onClick={props.onClick} >

    <span className={ props.isSelected ? 'selected-answer-bullet' : 'answer-bullet'}></span> {props.children}
  </div>)
}

const Answers = props => {
return (<div className='answers-container'>
          <div className='answers'>
          {
            props.data.map( (ans, ind) => {
              return <Answer 
                isSelected={props.selectedAnswer === ind ? true : false}
                key={`question-${props.id}-answer${ind}`} 
                questionIndex={props.questionIndex}
                answerId={ind}
                onClick={props.onClick}
              >{ans}</Answer>
            })
          }
        </div>
      </div>)
}

export default Answers