import React from 'react';
import './styles.css'

const Results = props => {
const {percentage, correct, incorrect} = props.data
console.log(props)
return (<div className='results-container'>
          <div className='results-modal'>
            <div className='results'>
              <h2>YOUR SCORE</h2>
              <div className='score'>{percentage}%</div>
              <div className='correct'><img src='./images/Tick.png' alt="correct" /> {correct} Correct</div>
              <div className='incorrect'><img src='./images/Cross.png' alt="incorrect" /> {incorrect} Incorrect</div>
            </div>
          </div>
       </div>)
}

export default Results