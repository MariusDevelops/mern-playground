import AuthToolbar from '../authentication/components/AuthToolbar';
import LoginForm from '../authentication/components/LoginForm';

const Authentication = () => {
  const get = () => {
    const secret = localStorage.getItem('userSecret');
    console.log(secret);
  };

  // IF YOU WANT GENERATE SECRET FOR FEW DAYS AND HAVE LOG IN
  // useEffect(() => {
  //   const secret = localStorage.getItem('userSecret');

  //   if (secret) {
  //     // fetch to get new  token
  //   }
  // }, []);

  return (
    <div>
      <AuthToolbar />
      <div className="d-flex j-center">
        <LoginForm />
      </div>
      <div>
        <div>
          <button onClick={get}>GET SECRET</button>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
