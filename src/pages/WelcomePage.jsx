import React from 'react';
import { NavLink } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div>
      <NavLink to="/auth/register">Registration</NavLink>
      <NavLink to="/auth/login">Log In</NavLink>
    </div>
  );
};

export default WelcomePage;
