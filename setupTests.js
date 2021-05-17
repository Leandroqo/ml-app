require("@testing-library/jest-dom/extend-expect");
const { mockNextI18n } = require("./tests-utils/next-i18n");
const fetch = require("node-fetch");
const { server } = require("mocks/server");

mockNextI18n();
global.fetch = fetch;
server.listen();

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));