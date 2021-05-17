const serverSideTranslate = jest.spyOn(require("next-i18next/serverSideTranslations"), "serverSideTranslations");

export function mockNextI18n() {
  serverSideTranslate.mockImplementation(() => ({
    locale: 'pt'
  }));
}
