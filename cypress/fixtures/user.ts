// @ts-check

const succsessfulUser = {
  name: 'Username',
  email: (Math.random() + 1).toString(36).substring(3) + '@cypress.io',
  password: '1234567890'
};

const userWithLongPassword = {
  name: 'Username',
  email: (Math.random() + 1).toString(36).substring(3) + '@cypress.io',
  password: 'Fixturesareagreatwaytomockdataorresponsestooutesasdasdasdasdasdasd'
};

const userWithShortPassword = {
  name: 'Username',
  email: (Math.random() + 1).toString(36).substring(3) + '@cypress.io',
  password: '123'
};

const userWithExistingEmail = {
  name: 'Username',
  email: 'hello@cypress.io',
  password: '123456789'
};

const userWithInvalidEmail = {
  name: 'Username',
  email: (Math.random() + 1).toString(36).substring(3) + 'cypress.io',
  password: '123456789'
};

const userWithoutName = {
  name: '',
  email: (Math.random() + 1).toString(36).substring(3) + '@cypress.io',
  password: '123456789'
};

const userWithoutNews = {
  name: 'Username',
  email: (Math.random() + 1).toString(36).substring(3) + '@cypress.io',
  password: '123456789'
};

export {
  succsessfulUser,
  userWithLongPassword,
  userWithShortPassword,
  userWithExistingEmail,
  userWithInvalidEmail,
  userWithoutName,
  userWithoutNews
};
