import React from 'react';
import './styles.css'

const Header = props => {
  return(
    <div className='header-container'>
      <h1>{props.children}</h1>
    </div>
  )
}

export default Header