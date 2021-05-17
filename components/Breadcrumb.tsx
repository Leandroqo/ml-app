import Text from "components/Text";
import { Category } from "lib/api";
import styles from "styles/components/breadcrumb.module.scss";

interface Props {
  categories?: Category[];
}

export default function Breadcrumb({ categories }: Props) {
  const renderItem = (category: Category) => {
    return (
      <li key={category.id} data-testid={`breadcrumb-${category.id}`}>
        <Text.Span size="14px" color="secondary">
          {category.name}
        </Text.Span>
      </li>
    );
  };

  return categories?.length ? (
    <ul className={`${styles.breadcrumb} mt-16 mb-16`} data-testid="breadcrumb">
      {categories.map((category: Category) => renderItem(category))}
    </ul>
  ) : (
    <></>
  );
}
