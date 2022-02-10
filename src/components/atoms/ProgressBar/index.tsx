import styles from "./progessBar.module.css";

interface IProgressBar {
  width: number;
}

const ProgressBar: React.FC<IProgressBar> = ({ width }) => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.progress} style={{ width: `${width}%` }}></div>
    </div>
  );
};

export default ProgressBar;
