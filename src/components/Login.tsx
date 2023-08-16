import { FC } from 'react';

import './Login.scss';
import { getToken, getProject } from '../client_Api';

const Login: FC = () => {
  const validation = async () => {
    const responce = await getToken();
    getProject(responce);
    return;
  };

  return (
    <button onClick={validation} className="button" type="submit" name="form_auth_submit">
      Log in
    </button>
  );
};

export default Login;
