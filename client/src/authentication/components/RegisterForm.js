import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';
import emailValidate from '../plugins/validateEmail';
import http from '../plugins/http';

const RegisterForm = () => {
  const nav = useNavigate();
  const [getError, setError] = useState('');

  // USEREF - TO GET INPUT VALUE. PASS TO INPUT.
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordTwoRef = useRef();

  // DUOMENU SIUNTIMAS I SERVERI
  // fetch is a built-in JavaScript function that allows you to make network requests to retrieve resources from a server using HTTP protocol.
  const callFetch = async (user) => {
    const res = await http.post(user, 'register');
    console.log(res);
    if (!res.success) {
      setError(res.message);
    } else {
      nav('/authentication');
    }
  };

  const validUser = () => {
    // CREATE OBJECT FROM INOPUT DATA
    const user = {
      email: emailRef.current.value,
      passwordOne: passwordRef.current.value,
      passwordTwo: passwordTwoRef.current.value,
    };

    // const emailValid = emailValidate.valid('dfgd@fsdf.com');
    // console.log(emailValid);

    // CHECK IF DATA IS VALID
    const emailValid = emailValidate.valid(user.email);
    if (!emailValid) return setError('Email is invalid');
    if (user.passwordTwo !== user.passwordOne)
      return setError('Password should match');
    if (user.passwordOne.length < 5 && user.passwordOne.length > 20)
      return setError('Password length max 20 min 5');
    let hasUpperCase = false;
    let hasNumber = false;
    for (let i = 0; i < user.passwordTwo.length; i++) {
      if (!Number(user.passwordTwo[i])) {
        if (user.passwordTwo[i].toUpperCase() === user.passwordTwo[i]) {
          hasUpperCase = true;
        }
      }
      if (Number(user.passwordTwo[i]) || Number(user.passwordTwo[i]) === 0) {
        hasNumber = true;
      }
    }

    console.log(hasUpperCase, hasNumber);

    // if(!hasUpperCase) return setError("Password should have at least one upper case letter")
    // if(!hasNumber) return setError("Password should have at least one number")

    setError('');
    return callFetch(user);
  };

  return (
    <div className="d-flex column form">
      <input type="text" ref={emailRef} placeholder="email" />
      <input type="text" ref={passwordRef} placeholder="pass one" />
      <input type="text" ref={passwordTwoRef} placeholder="pass two" />
      {/* GET ERROR MESSAGE */}
      {/* <ErrorMessage error="Error" /> */}
      {/* if there is an error (getError is truthy), and if there is, it renders an <ErrorMessage> component passing the error object as a prop to display the error message. */}
      {getError && <ErrorMessage error={getError} />}
      {/* ONCLICK BUTTON CALLS TO EXECUTE FUNCTION */}
      <button onClick={validUser}>Register</button>
    </div>
  );
};

export default RegisterForm;
