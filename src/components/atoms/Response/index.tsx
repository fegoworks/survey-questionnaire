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
    <span>{alphabet}</span>
    {label}
  </div>
);

export default Response;
