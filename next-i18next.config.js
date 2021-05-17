module.exports = {
  i18n: {
    locales: ["pt", "ar"],
    defaultLocale: "pt",
    localeDetection: false,
    domains: [
      {
        domain: "localhost",
        defaultLocale: "pt",
      },
      {
        domain: "127.0.0.1",
        defaultLocale: "ar",
      }
    ],
  }
}