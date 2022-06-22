import styles from "./index.module.css";
import Checkbox from "../../../checkbox";

export default function Answer(props) {
  const { answer, onAnswer, chosen } = props;

  return (
    <div
      className={`${styles.container} ${chosen ? styles.chosen : ""}`}
      onClick={onAnswer}
      data-testid="answer">
      {answer}
      <Checkbox checked={chosen} />
    </div>
  );
}
