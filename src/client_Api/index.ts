import { IgetProject } from './types';

const projectKey: string = 'just-develop23';
const clientId: string = '2PT-eztNLU3wgvgDpf8UwSxZ';
const clientSecret: string = 'IunouGO33BJdWp3ge2ocqTJBvuSSCJpq';
const region: string = 'europe-west1.gcp';
const scope: string[] = [
  'manage_project:just-develop23 view_audit_log:just-develop23 manage_api_clients:just-develop23',
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

export const setInProject = async (objToken: IgetProject, endPath: string, body: string) => {
  const baseUrl = `https://api.${region}.commercetools.com/${projectKey}/`;

  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `${objToken.token_type} ${objToken.access_token}`,
    },
    body: body,
  });

  return await response.json();
};

export const getInProject = async (objToken: IgetProject, endPath: string) => {
  const baseUrl = `https://api.${region}.commercetools.com/${projectKey}/${endPath}`;

  const response = await fetch(baseUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `${objToken.token_type} ${objToken.access_token}`,
    },
  });

  return await response.json();
};

/*
при втором запросе появляется ошибка: 'Insufficient scope. One of the following scopes is missing: view_project_settings.
Я так понял скоуп нужно кудато вставить или именносвойство "view_project_settings"..., только я не знаю куда...
*/
