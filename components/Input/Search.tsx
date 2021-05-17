import { useTranslation } from "react-i18next";
import Input, { CommonProps } from "./Default";
import styles from "styles/components/Input.module.scss";

interface Props extends CommonProps {
  onClick?: () => void;
  buttonType?: "button" | "reset" | "submit";
}

export default function SearchInput({
  placeholder,
  onClick,
  buttonType = "button",
  ...rest
}: Props) {
  const { t } = useTranslation();
  return (
    <>
      <Input type="search" placeholder={placeholder} {...rest} />
      <button
        data-testid="input-search-button"
        className={styles.searchButton}
        type={buttonType}
        onClick={() => onClick?.()}
      >
        {t("Buscar")}
      </button>
    </>
  );
}
