import styles from "../../styles/common/Button.module.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string;
  variant?: "edit" | "delete";
};

function Button({ value, variant, ...rest }: Props) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} {...rest}>
      {value}
    </button>
  );
}

export default Button;
