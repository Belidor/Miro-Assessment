/// <reference types="@shelex/cypress-allure-plugin" />
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on: any, config: any) => {
  allureWriter(on, config);
  return config;
};
