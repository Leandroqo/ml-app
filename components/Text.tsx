import { TFunctionResult } from "i18next";
import styles from "styles/components/Text.module.scss";

interface Props {
  id?: string;
  size?: "12px" | "14px" | "16px" | "18px" | "24px" | "28px" | "46px";
  color?: "primary" | "secondary" | "tertiary";
  children?: string | number | string[] | number[] | TFunctionResult;
  className?: string;
}

interface InnerProps extends Props {
  type: "span" | "p" | "h1" | "h2";
}

function Text({
  id,
  type,
  color = "primary",
  size,
  className = "",
  children,
}: InnerProps) {
  const Tag = type;
  const fontSize = styles[`f${size}`];
  const fontColor = styles[color];

  return (
    <Tag data-testid={id} className={`${fontSize} ${className} ${fontColor}`}>{children}</Tag>
  );
}

export default {
  Span: (props: Props) => <Text type="span" {...props} />,
  P: (props: Props) => <Text type="p" {...props} />,
  H1: (props: Props) => <Text type="h1" {...props} />,
  H2: (props: Props) => <Text type="h2" {...props} />,
};
