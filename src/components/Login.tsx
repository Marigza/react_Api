import { FC } from 'react';

import './Login.scss';
import { getToken, getInProject, setInProject } from '../client_Api';

const Login: FC = () => {
  const validation = async () => {
    const requestBody = {
      email: 'hancharuk345678@mail.ru',
      password: '#Qwerty888888$',
    };

    const objToken = await getToken();
    // setInProject(objToken, 'customers', JSON.stringify(requestBody)).then(responce =>
    //   console.log(responce)
    // );

    getInProject(objToken, 'customers/6afb3d83-3f25-4540-a456-6ee7592a9ad1').then(responce =>
      console.log(responce)
    );
    return;
  };

  return (
    <button onClick={validation} className="button" type="submit" name="form_auth_submit">
      Log in
    </button>
  );
};

export default Login;
