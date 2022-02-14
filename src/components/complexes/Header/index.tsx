import styles from "./header.module.css";
import { Link } from "react-router-dom";
interface IHeader {
  children: React.ReactNode;
  isGrey?: boolean;
}

const Header: React.FC<IHeader> = ({ children, isGrey }) => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.menuBar}>
        <div className={`${styles.line} ${isGrey ? styles.isGrey : ""}`}></div>
        <div className={`${styles.line} ${isGrey ? styles.isGrey : ""}`}></div>
        <div className={`${styles.line} ${isGrey ? styles.isGrey : ""}`}></div>
      </Link>
      <div>{children}</div>
    </header>
  );
};

export default Header;
