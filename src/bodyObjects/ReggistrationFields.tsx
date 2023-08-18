export const RegObj = {
  version: 1,
  // если повторно отправлять запрос к тому же кастомеру(если надо еще что-то добавить), надо увеличивать version на 1
  actions: [
    { action: 'setLastName', lastName: 'myNewFamilia' },
    { action: 'setFirstName', firstName: 'myNewName' },
    { action: 'setDateOfBirth', dateOfBirth: '1990-11-21' },
    {
      action: 'addAddress',
      address: {
        streetName: 'Wall2 Street',
        streetNumber: '2585',
        postalCode: '22229',
        city: 'New York city',
        country: 'US',
      },
    },
    // можно еще добавить необходимые поля
  ],
};
