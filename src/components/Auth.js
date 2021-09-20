import { useDispatch, useSelector } from 'react-redux';
import updateUser from '../actionCreators/user';
import { Redirect } from 'react-router';

const Auth = ({ children }) => {
  const dispatch = useDispatch();
  const user = localStorage.getItem('user');
  const users = useSelector((state) => state.users);

  if (user) {
    dispatch(updateUser(users.filter((u) => u.id === user)[0] || {}));
    return children;
  }
  return <Redirect to='/signin' />;
};

export default Auth;
