import React from 'react';
import { Link } from 'react-router-dom';

const AuthToolbar = () => {
  return (
    <div className="toolbar">
      <Link to="/authentication">Login</Link>
      <Link to="/authregister">Register</Link>
    </div>
  );
};

export default AuthToolbar;
