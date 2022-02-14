import useProgress from "../../../hooks/useProgress";
import ProgressBar from "../../atoms/ProgressBar";
import ArrowNavigation from "../../molecules/ArrowNavigation";
import styles from "./footer.module.css";

interface IFooter {
  moveUp: () => void;
  moveDown: () => void;
  checked: boolean | undefined;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const Footer: React.FC<IFooter> = ({ moveDown, moveUp, setPage, checked }) => {
  const { progress } = useProgress();
  return (
    <div className={styles.footer}>
      <ProgressBar width={progress} />
      <ArrowNavigation
        moveDown={() => {
          setPage("Prev");
          moveDown();
        }}
        moveUp={() => {
          setPage("Next");
          moveUp();
        }}
        checked={checked}
      />
    </div>
  );
};

export default Footer;
