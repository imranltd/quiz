import React from 'react';
import './styles.css'

const Button = props => {

  return(<div className='btn-container'>
      <button onClick={props.onClick} className='btn'>{props.label}</button>
    </div>)
}

export default Button