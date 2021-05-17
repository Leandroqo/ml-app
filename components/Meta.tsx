import Head from "next/head";
import { useTranslation } from "react-i18next";

interface Props {
  title?: string;
  description?: string;
  image?: string;
}

export default function Meta({ title = "", description, image }: Props) {
  const { t } = useTranslation();
  const titleTag = title
    ? `${title} | ${t("Mercado Liver")}`
    : t("Mercado Livre");
  const desc = description || t("Mercado Livre Descrição");
  const img = image || "/images/Logo_ML.png";

  return (
    <Head>
      <title>{titleTag}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={titleTag} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={img} />
      <meta property="twitter:title" content={titleTag} />
      <meta property="twitter:description" content={desc} />
      <meta property="twitter:image" content={img} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
