import Signin from '../pages/Signin';

const Auth = ({ component }) => {
  const user = localStorage.getItem('user');
  if (user) return <>{component}</>;
  return <Signin />;
};

export default Auth;
