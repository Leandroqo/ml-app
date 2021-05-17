import Layout from "containers/Layout";
import { GetStaticPropsContext } from "next";
import { Category, DescriptionsProps, ItemProps } from "lib/api";
import Text from "components/Text";
import { getWebpThumbnail } from "lib/images";
import Button from "components/Button";
import styles from "styles/pages/Item.module.scss";
import { useTranslation } from "react-i18next";
import { getItemDetail } from "../api/item";
import Meta from "components/Meta";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Error from "components/Error";
import { formatCents, formatCurrency, getCurrencyString } from "lib/currency";

interface Props {
  item?: {
    status: string;
    value?: ItemProps;
    reason?: Error;
  };
  description?: {
    status: string;
    value?: DescriptionsProps;
    reason?: Error;
  };
  categories?: Category[];
}

export default function Item({ item, description, categories }: Props) {
  const { t } = useTranslation();
  const product = item?.value;
  const desc = description?.value;
  const failedAllRequests =
    item?.status === "rejected" && description?.status === "rejected";

  const Gallery = () => {
    if (item?.status === "rejected") {
      return <Error />
    } else if (!product) {
      return <></>
    }

    return (
      <>
        <div className="flex" data-testid="gallery">
          <div className={styles.itemImage}>
            <img
              src={getWebpThumbnail(product?.thumbnail, "F")}
              alt={product?.title}
            />
          </div>
          <div className={`${styles.itemInfo} ml-32`}>
            <Text.Span size="14px">
              {t(product?.condition as string)} - {product?.sold_quantity}{" "}
              {t("vendidos")}
            </Text.Span>
            <Text.H1 className="mt-16 mb-32" size="24px">
              {product?.title}
            </Text.H1>
            <div className="flex">
              <Text.Span size="46px" className="mr-10">
                {getCurrencyString(product?.currency_id)}
              </Text.Span>
              <Text.Span size="46px">
                {formatCurrency(product?.price)}
              </Text.Span>
              <Text.Span size="24px">
                {formatCents(product?.price)}
              </Text.Span>
            </div>
            <Button.Default className="mt-32" size="large">
              {t("Comprar")}
            </Button.Default>
          </div>
        </div>
        <Text.Span size="12px">{t(item?.reason?.message as string)}</Text.Span>
      </>
    );
  };

  const Description = () => {
    if (description?.status === "rejected") {
      return <Error />
    } else if (!description) {
      return <></>
    }
  
    return (
      <div className={styles.itemDescription} data-testid="description">
        <Text.H2 size="28px" className="mb-32">
          {t("Descrição do produto")}
        </Text.H2>
        <Text.Span size="12px">
          {t(description?.reason?.message as string)}
        </Text.Span>
        <Text.P size="16px" color="secondary">
          {desc?.plain_text}
        </Text.P>
      </div>
    );
  };

  const Page = () => {
    if (failedAllRequests) {
      return <Error />
    }

    return (
      <div className="content-page p-32">
        <Gallery />
        <Description />
      </div>
    );
  };

  return (
    <>
      <Meta
        title={product?.title}
        description={desc?.plain_text}
        image={getWebpThumbnail(product?.thumbnail)}
      />
      <Layout categories={categories}>
        <Page />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params, locale }: GetStaticPropsContext) {
  return {
    props: {
      ...await getItemDetail(params?.id as string),
      ...await serverSideTranslations(locale as string, ["common"])
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
