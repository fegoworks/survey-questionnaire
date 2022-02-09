import { Choice } from "../../../types/types";
import Response from "../../atoms/Response";
import styles from "./responseList.module.css";

interface IResponseList {
  responseList: Array<Choice> | undefined;
  handleClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ResponseList: React.FC<IResponseList> = ({
  responseList,
  handleClick,
}) => {
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  return (
    <ul className={styles.responseList}>
      {responseList?.map((response: Choice, index: number) => (
        <Response
          key={index}
          value={response.value}
          label={response.label}
          selected={response.selected}
          alphabet={alphabet[index]}
          handleClick={handleClick}
        />
      ))}
    </ul>
  );
};

export default ResponseList;
