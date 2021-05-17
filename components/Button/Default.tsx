import styles from "styles/components/Button.module.scss";

interface Props {
  children: string;
  type?: "button" | "reset" | "submit";
  onClick?: () => void;
  className?: string;
  color?: "primary";
  size?: "large";
}

export default function DefaultButton({
  children,
  type = "button",
  className = "",
  color = "primary",
  size = "large",
  onClick,
}: Props) {
  const buttonSize = styles[size];
  const buttonColor = styles[color];

  return (
    <button
      data-testid={`button-${type}`}
      type={type}
      onClick={() => onClick?.()}
      className={`${styles.button} ${buttonColor} ${buttonSize} ${className}`}
    >
      {children}
    </button>
  );
}
