/* eslint-disable react/button-has-type */
import React from 'react';


import { NavLink } from 'react-router-dom';
import '../styles/navBar.css'

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  return (
    <nav className="navBar">
      <h1>BookStore CMS</h1>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}

      </ul>
      <button className='icon-button' type='button'>
      <span className='user'>user</span>
      </button>  

    </nav>
  );
};
export default Navbar;
