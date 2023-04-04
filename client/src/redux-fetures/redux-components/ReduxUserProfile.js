import React from 'react';
import { useSelector } from 'react-redux';
import ReduxUpdateUser from './ReduxUpdateUser';

const ReduxUserProfile = () => {
  const user = useSelector((state) => state.user.value);

  return (
    <div>
      <h2>Has hair: {String(user.hair)}</h2>
      <ReduxUpdateUser />
    </div>
  );
};

export default ReduxUserProfile;
