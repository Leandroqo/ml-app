import Link from "next/link";
import Layout from "containers/Layout";
import { Category, ItemProps } from "lib/api";
import { GetServerSidePropsContext } from "next";
import Text from "components/Text";
import styles from "styles/pages/Items.module.scss";
import { getWebpThumbnail } from "lib/images";
import { getItems } from "../api/items";
import Meta from "components/Meta";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import Error from "components/Error";
import { formatCents, formatCurrency, getCurrencyString } from "lib/currency";

interface Props {
  items?: ItemProps[];
  categories?: Category[];
  error?: Error;
}

export default function Items({ items, error, categories }: Props) {
  const { t } = useTranslation();

  return (
    <>
      <Meta />
      <Layout categories={categories}>
        <>
          {error && <Error message={error.message} />}
          {items && (
            <ul className="content-page pl-16 pr-16 pb-16">
              {items.map((item: ItemProps) => (
                <Link href={`/items/${item.id}`} key={item.id}>
                  <li className={`${styles.listItem} pt-16`} data-testid="item">
                    <div className={`${styles.thumbnail} mr-16`}>
                      <img
                        src={getWebpThumbnail(item.thumbnail)}
                        alt={item.title}
                      />
                    </div>
                    <div className={`${styles.listDescription} mb-16`}>
                      <div>
                        <div className="flex mb-16">
                          <div className="flex">
                            <Text.Span className="mr-10" size="24px">
                              {getCurrencyString(item.currency_id)}
                            </Text.Span>
                            <Text.Span id="price" size="24px">
                              {formatCurrency(item.price)}
                            </Text.Span>
                            <Text.Span size="16px">
                              {formatCents(item.price)}
                            </Text.Span>
                          </div>
                          {item.shipping.free_shipping && (
                            <img
                              src="/images/ic_shipping.png"
                              className="ml-10"
                              width="18px"
                              height="18px"
                              alt={t("entrega grátis")}
                            />
                          )}
                        </div>
                      </div>
                      <Text.Span size="18px">{item.title}</Text.Span>
                    </div>
                    <div className={`${styles.locale} mt-25`}>
                      <Text.Span id="state" size="12px" color="tertiary">
                        {item.address.state_name}
                      </Text.Span>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      ...await getItems(context),
      ...await serverSideTranslations(context.locale as string, ["common"])
    }
  }
}
