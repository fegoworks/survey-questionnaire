import ResponseList from "../../molecules/ResponseList";
import styles from "./content.module.css";
import Text from "../../atoms/Text";
import { Question } from "../../../types/types";

interface IContent {
  question: Question;
  handleClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Content: React.FC<IContent> = ({ question, handleClick }) => (
  <div className={styles.content}>
    <Text text={question.headline} />
    <ResponseList
      responseList={question.choices}
      handleClick={(event: React.MouseEvent<HTMLDivElement>) =>
        handleClick(event)
      }
    />
  </div>
);

export default Content;
