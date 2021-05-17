import Input from "components/Input";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, ReactElement, useState } from "react";
import styles from "styles/containers/Layout.module.scss";
import { useTranslation } from "react-i18next";
import Breadcrumb from "components/Breadcrumb";
import { Category } from "lib/api";

interface Props {
  children?: ReactElement;
  categories?: Category[];
}

export default function Layout({ children, categories }: Props) {
  const { t } = useTranslation();
  const router = useRouter();
  const [search, setSearch] = useState(router.query?.search as string);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/items?search=${search}`);
  };

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <main>
      <header>
        <div className="container content">
          <Link href="/">
            <img src="/images/Logo_ML.png" alt={t("Mercado Livre")} />
          </Link>
          <form className={styles.searchForm} onSubmit={onSubmit}>
            <Input.Search
              buttonType="submit"
              placeholder={t("Nunca deixe de buscar")}
              onChange={onChangeSearch}
              value={search}
            />
          </form>
        </div>
      </header>
      <section className="container" data-testid="page-section">
        <Breadcrumb categories={categories} />
        {children}
      </section>
    </main>
  );
}
