import { IgetProject } from './types';

const projectKey: string = 'just-develop23';
const clientId: string = 'Y9pvMOb17U_r6UZgw88xMLfc';
const clientSecret: string = 'CTSei9hn6l50tkMSS7ewfHT9fLzLJ_F7';
const region: string = 'europe-west1.gcp';
const scope: string[] = [
  'view_products:just-develop23 manage_my_quotes:just-develop23 manage_my_payments:just-develop23 view_published_products:just-develop23 view_categories:just-develop23 create_anonymous_token:just-develop23 manage_my_business_units:just-develop23 manage_my_shopping_lists:just-develop23 manage_my_quote_requests:just-develop23 manage_my_profile:just-develop23 manage_my_orders:just-develop23',
];

export const getToken = async () => {
  const baseUrl = `https://auth.${region}.commercetools.com/oauth/token`;
  const requestBody = `grant_type=client_credentials&scope=${scope.join(' ')}`;

  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
    },
    body: requestBody,
  });

  const responseData = await response.json();
  console.log(responseData);
  return responseData;
};

export const getProject = async (obj: IgetProject) => {
  const baseUrl = `https://api.${region}.commercetools.com/${projectKey}/`;
  // const requestBody = `grant_type=client_credentials&scope=${scope.join(' ')}`;

  const response = await fetch(baseUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `${obj.token_type} ${obj.access_token}`,
    },
    // body: requestBody,
  });

  const responseData = await response.json();
  console.log(responseData);
};

/*
при втором запросе появляется ошибка: 'Insufficient scope. One of the following scopes is missing: view_project_settings.
Я так понял скоуп нужно кудато вставить или именносвойство "view_project_settings"..., только я не знаю куда...
*/
