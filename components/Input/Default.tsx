import { ChangeEvent } from "react";
import styles from "styles/components/Input.module.scss";

export interface CommonProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface Props extends CommonProps {
  type: "text" | "search" | "hidden";
}

export default function DefaultInput({
  type,
  placeholder,
  value,
  onChange,
}: Props) {
  return (
    <input
      data-testid={`input-${type}`}
      className={`${styles.input} pl-15`}
      type={type}
      placeholder={placeholder}
      defaultValue={value}
      onChange={(event: ChangeEvent<HTMLInputElement>) => onChange?.(event)}
    />
  );
}
