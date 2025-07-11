import styles from "../../styles/common/Button.module.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string;
};

function Button({ value, ...rest }: Props) {
  return (
    <button className={styles.button} {...rest}>
      {value}
    </button>
  );
}

export default Button;
