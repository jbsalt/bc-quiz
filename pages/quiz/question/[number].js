import { useContext } from "react";
import { useRouter } from "next/router";
import Quiz from "../";
import Answers from "../../../components/quiz/answers";
import { QuizContext } from "../../../context/quiz";
import Button from "../../../components/button";
import styles from "./index.module.css";

export default function Question() {
  const router = useRouter();
  const { answerQuestion, userAnswers, questions } = useContext(QuizContext);

  if (!router.query.number || !questions) return null; // Set in a useEffect so undefined on first render

  const pageNumber = Number(router.query.number);
  const questionIndex = pageNumber - 1;
  const question = questions[questionIndex];

  const isLastQuestion = pageNumber === questions.length;

  return (
    <Quiz>
      <div>
        <h1 className={styles.questionNumber}>
          Question {pageNumber} <small>/ {questions.length}</small>
        </h1>
        <h2 className={styles.questionTitle}>{question.title}</h2>
        <Answers
          answers={question.answers}
          answerQuestion={answerQuestion}
          questionNumber={pageNumber}
          userAnswers={userAnswers}
        />
        <div className={styles.actions}>
          {pageNumber > 1 ? (
            <Button
              href={`/quiz/question/${pageNumber - 1}`}
              text
              style={{ marginRight: "auto" }}
              secondary
              icon="leftarrow">
              Back
            </Button>
          ) : null}
          <Button
            href={
              Object.keys(userAnswers).length === questions.length
                ? `/quiz/complete`
                : `/quiz/question/${pageNumber + 1}`
            }
            disabled={userAnswers[pageNumber - 1] === undefined}
            style={{ marginLeft: "auto" }}>
            {isLastQuestion ? "Finish" : "Next"}
          </Button>
        </div>
      </div>
    </Quiz>
  );
}
