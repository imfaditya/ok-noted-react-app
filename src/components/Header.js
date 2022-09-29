import React from 'react'
import logo from '../images/logo.svg'

function Header () {
  return (
    <img className='note-app__header' src={logo} alt="ok-noted-logo"/>
  );
}

export default Header;