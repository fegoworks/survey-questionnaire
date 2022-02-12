import Checkmark from "../../../svg/checkmark";
import styles from "./response.module.css";

interface IResponse {
  label: string;
  value?: string;
  selected: boolean;
  alphabet: string;
  handleClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Response: React.FC<IResponse> = ({
  label,
  value,
  selected,
  alphabet,
  handleClick,
}) => (
  <div
    onClick={handleClick}
    className={`${selected ? styles.selected : ""} ${styles.response}`}
    id={value}
  >
    <div className={styles.text}>
      <span>{alphabet}</span>
      {label}
    </div>
    <span className={styles.check}>
      {selected && (
        <Checkmark width="14" height="14" color="rgb(245,245,245, 0.5)" />
      )}
    </span>
  </div>
);

export default Response;
