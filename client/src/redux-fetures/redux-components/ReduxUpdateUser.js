import React from 'react';
import { useDispatch } from 'react-redux';
import { updateHair } from '../redux-users';
import ReduxChangeUserName from './ReduxChangeUserName';

const ReduxUpdateUser = () => {
  const dispatch = useDispatch();

  const update = () => {
    dispatch(updateHair());
  };

  return (
    <div>
      <button onClick={update}>UPDATE USER HAIR</button>
      <ReduxChangeUserName />
    </div>
  );
};

export default ReduxUpdateUser;
