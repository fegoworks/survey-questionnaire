import useProgress from "../../../hooks/useProgress";
import ProgressBar from "../../atoms/ProgressBar";
import ArrowNavigation from "../../molecules/ArrowNavigation";
import styles from "./footer.module.css";

interface IFooter {
  moveUp: () => void;
  moveDown: () => void;
  checked: boolean | undefined;
}

const Footer: React.FC<IFooter> = ({ moveDown, moveUp, checked }) => {
  const { progress } = useProgress();
  return (
    <div className={styles.footer}>
      <ProgressBar width={progress} />
      <ArrowNavigation moveDown={moveDown} moveUp={moveUp} checked={checked} />
    </div>
  );
};

export default Footer;
