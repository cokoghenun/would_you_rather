import Signin from '../pages/Signin';

const Auth = ({ children }) => {
  const user = localStorage.getItem('user');
  if (user) return children;
  return <Signin />;
};

export default Auth;
