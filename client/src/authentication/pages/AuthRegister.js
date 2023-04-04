import React from 'react';
import AuthToolbar from '../components/AuthToolbar';
import RegisterForm from '../components/RegisterForm';

const AuthRegister = () => {
  return (
    <div>
      <AuthToolbar />
      <div className="d-flex j-center">
        <RegisterForm />
      </div>
    </div>
  );
};

export default AuthRegister;
