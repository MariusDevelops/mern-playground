import { useSelector } from 'react-redux';
import ReduxUserProfile from '../redux-fetures/redux-components/ReduxUserProfile';

const Redux = () => {
  const user = useSelector((state) => state.user.value);

  return (
    <div>
      <h1>Redux</h1>
      <h2>{user.name}</h2>
      <h2>{user.email}</h2>
      <ReduxUserProfile />
    </div>
  );
};

export default Redux;
