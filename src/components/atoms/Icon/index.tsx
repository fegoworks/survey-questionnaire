import styles from "./icon.module.css";

interface IIcon {
  rotate?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

const Icon: React.FC<IIcon> = ({ disabled, onClick, rotate }) => (
  <button disabled={disabled} className={styles.icon} onClick={onClick}>
    <span className={`${rotate ? styles.rotate : ""}`}>{">"}</span>
  </button>
);

export default Icon;
