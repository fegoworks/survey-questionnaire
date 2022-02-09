import ArrowNavigation from "../../molecules/ArrowNavigation";
import styles from "./footer.module.css";

interface IFooter {
  moveUp: () => void;
  moveDown: () => void;
  checked: boolean | undefined;
}

const Footer: React.FC<IFooter> = ({ moveDown, moveUp, checked }) => {
  return (
    <div className={styles.footer}>
      <ArrowNavigation moveDown={moveDown} moveUp={moveUp} checked={checked} />
    </div>
  );
};

export default Footer;
