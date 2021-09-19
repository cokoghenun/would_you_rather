import { useDispatch } from 'react-redux';
import updateUser from '../actionCreators/user';
import { Redirect } from 'react-router';

const Auth = ({ children }) => {
  const user = localStorage.getItem('user');
  const dispatch = useDispatch();
  if (user) {
    dispatch(updateUser(JSON.parse(user)));
    return children;
  }
  return <Redirect to='/signin' />;
};

export default Auth;
