import styles from "./index.module.css";
import Answer from "./answer";

export default function Answers(props) {
  const { answers, answerQuestion, questionNumber, userAnswers } = props;

  return (
    <div className={styles.container}>
      {answers.map((answer, i) => (
        <Answer
          answer={answer}
          chosen={userAnswers[questionNumber - 1] === i}
          answerIndex={i}
          key={i}
          onAnswer={() => answerQuestion({ questionNumber, answer: i })}
        />
      ))}
    </div>
  );
}
