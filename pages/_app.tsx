import { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import "styles/globals.scss";

if(process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("mocks").mockMSW();
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
