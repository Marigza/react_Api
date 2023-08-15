import { FC } from 'react';

import './Login.scss';
import getToken from '../client_Api';

const Login: FC = () => {
  const validation = () => {
    getToken();

    return;
  };

  return (
    <button onClick={validation} className="button" type="submit" name="form_auth_submit">
      Log in
    </button>
  );
};

export default Login;
