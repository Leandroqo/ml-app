import Meta from "components/Meta";
import Layout from "containers/Layout";
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  return (
    <>
      <Meta />
      <Layout />
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...await serverSideTranslations(locale as string, ["common"]),
    }
  }
}
