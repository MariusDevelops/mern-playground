import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { changeName } from '../redux-users';

const ReduxChangeUserName = () => {
  const inpRef = useRef();
  const dispatch = useDispatch();

  const change = () => {
    dispatch(changeName(inpRef.current.value));
  };

  return (
    <div>
      <input ref={inpRef} type="text" placeholder="new username" />
      <button onClick={change}>CHANGE USER NAME</button>
    </div>
  );
};

export default ReduxChangeUserName;
