import { FC } from 'react';

import './Login.scss';
import { RegObj } from '../bodyObjects/ReggistrationFields';
import { getToken, getInProject, setInProject } from '../client_Api';

const Login: FC = () => {
  const validation = async () => {
    const requestBody = {
      email: 'mamama@mail.ru',
      password: '#Qwerty8234$',
    };

    const objToken = await getToken();
    // setInProject(objToken, 'customers', JSON.stringify(requestBody)).then(responce =>
    //   console.log(responce)
    // );

    // отправка полей из формы регистрации в commercetools
    // оставляю закоментированным, т.к. приходит ошибка для одних и тех же данных

    // setInProject(
    //   objToken,
    //   'customers/2119541f-de45-47fe-bed1-4c8d09c93b44',
    //   JSON.stringify(RegObj)
    // ).then(responce => {
    //   console.log(responce.addresses);
    //   return responce.addresses;
    // });

    getInProject(objToken, 'customers').then(responce => console.log(responce));

    // установка адреса в качестве адреса доставки и юридического адреса

    getInProject(objToken, 'customers/2119541f-de45-47fe-bed1-4c8d09c93b44').then(responce => {
      console.log(responce);
      console.log(responce.addresses);
      setInProject(
        objToken,
        'customers/2119541f-de45-47fe-bed1-4c8d09c93b44',
        JSON.stringify({
          version: 8, // повторные запросы по тем же кастомерам
          actions: [{ action: 'addShippingAddressId', addressId: responce.addresses[0].id }],
        })
      );
      setInProject(
        objToken,
        'customers/2119541f-de45-47fe-bed1-4c8d09c93b44',
        JSON.stringify({
          version: 8, // повторные запросы по тем же кастомерам
          actions: [{ action: 'addBillingAddressId', addressId: responce.addresses[1].id }],
        })
      );
    });
    return;
  };

  return (
    <button onClick={validation} className="button" type="submit" name="form_auth_submit">
      Log in
    </button>
  );
};

export default Login;
