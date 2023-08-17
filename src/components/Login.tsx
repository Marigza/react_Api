import { FC } from 'react';

import './Login.scss';
import { getToken, getInProject, setInProject } from '../client_Api';

const Login: FC = () => {
  const validation = async () => {
    const requestBody = {
      email: 'hancharuk270185@mail.ru',
      password: '#Qwerty12345$',
    };
    const objToken = await getToken();
    setInProject(objToken, 'customers', JSON.stringify(requestBody)).then(responce =>
      console.log(responce)
    );
    getInProject(objToken, 'customers').then(responce => console.log(responce));
    return;
  };

  return (
    <button onClick={validation} className="button" type="submit" name="form_auth_submit">
      Log in
    </button>
  );
};

export default Login;
