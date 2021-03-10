import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'green',
  textDecoration: 'none',
  color: 'white',
}

const currentPage = {
  border:'2px solid darkgreen', 
  background:'white', 
  color:'darkgreen'
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact style={link} activeStyle={currentPage}>Home</NavLink>
      <NavLink to="/actors" exact style={link} activeStyle={currentPage}>Actors</NavLink>
      <NavLink to="/directors" exact style={link} activeStyle={currentPage}>Directors</NavLink>
      <NavLink to="/movies" exact style={link} activeStyle={currentPage}>Movies</NavLink>
    </div>
  );
};

export default NavBar;
