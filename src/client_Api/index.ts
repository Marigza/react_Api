const clientId: string = 'Y9pvMOb17U_r6UZgw88xMLfc';
const clientSecret: string = 'CTSei9hn6l50tkMSS7ewfHT9fLzLJ_F7';
const region: string = 'europe-west1.gcp';
const scope: string[] = [
  'view_products:just-develop23 manage_my_quotes:just-develop23 manage_my_payments:just-develop23 view_published_products:just-develop23 view_categories:just-develop23 create_anonymous_token:just-develop23 manage_my_business_units:just-develop23 manage_my_shopping_lists:just-develop23 manage_my_quote_requests:just-develop23 manage_my_profile:just-develop23 manage_my_orders:just-develop23',
];

export const getToken = async () => {
  const baseUrl = `https://${clientId}:${clientSecret}@auth.${region}.commercetools.com/oauth/token?grant_type=client_credentials
  &scope=${scope}`;
  const response: Response = await fetch(baseUrl, { method: 'POST' });
  console.log(response);
};

export default getToken;

// "https://auth.europe-west1.gcp.commercetools.com/oauth/token"
// `https://${clientId}:${clientSecret}@auth.${region}.commercetools.com/oauth/token`
