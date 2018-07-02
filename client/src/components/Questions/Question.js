import React from 'react';
const Question = props => {
  return (<div className='question'>
    <span>{`${(props.id<10) ? `0${props.id}_` : `${props.id}_`}`}</span>
    <p>{props.label}</p>
  </div>)
}

export default Question