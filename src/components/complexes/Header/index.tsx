import styles from "./header.module.css";
import { Link } from "react-router-dom";
interface IHeader {
  text: string;
  isGrey?: boolean;
}

const Header: React.FC<IHeader> = ({ text, isGrey }) => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.menuBar}>
        <div className={`${styles.line} ${isGrey ? styles.isGrey : ""}`}></div>
        <div className={`${styles.line} ${isGrey ? styles.isGrey : ""}`}></div>
        <div className={`${styles.line} ${isGrey ? styles.isGrey : ""}`}></div>
      </Link>
      <div>{text}</div>
    </header>
  );
};

export default Header;
