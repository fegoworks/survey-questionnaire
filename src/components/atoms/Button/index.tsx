import Checkmark from "../../../svg/checkmark";
import styles from "./button.module.css";

interface IButton {
  text: string;
  checkmark?: boolean;
  handleClick: (value?: string) => void;
}
const Button: React.FC<IButton> = ({
  text,
  checkmark = false,
  handleClick,
}) => (
  <button onClick={() => handleClick()} className={styles.button} type="button">
    {text}{" "}
    {checkmark && (
      <span className={styles.checkmark}>
        <Checkmark width="18" height="18" color="rgba(247,247,247)" />
      </span>
    )}
  </button>
);

export default Button;
