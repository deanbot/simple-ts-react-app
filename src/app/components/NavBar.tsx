import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const activeStyle = { color: 'blue' };
  return (
    <div>
      <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
      {' | '}
      <NavLink to="/hello" activeStyle={activeStyle}>Hello</NavLink>
      {' | '}
      <NavLink to="/about" activeStyle={activeStyle}>Counter</NavLink>
    </div>
  )
}

export default NavBar