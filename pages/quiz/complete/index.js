import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { QuizContext } from "../../../context/quiz";
import Quiz from "../";
import TweetButton from "../../../components/tweet-button";
import styles from "./index.module.css";

export default function QuizComplete() {
  const { userAnswers } = useContext(QuizContext);
  const router = useRouter();
  const [result, setResult] = useState();
  const [failed, setFailed] = useState();

  useEffect(() => {
    if (Object.keys(userAnswers).length === 0) {
      console.log("No answers found");
      router.push("/");
      return;
    }
    const loadResults = async () => {
      try {
        const res = await fetch("/api/submit", {
          method: "POST",
          body: JSON.stringify({ answers: userAnswers }),
        });
        const result = await res.json();
        setResult(result);
      } catch (e) {
        setFailed(true);
        console.error(e);
      }
    };
    loadResults();
  }, [userAnswers, router]);

  if (!result) return null; 

  const correctAnswers = result.answers.filter((r) => r.correct);
  const score = `${correctAnswers.length}/${result.answers.length}`;

  return (
    <Quiz>
      <div className={styles.container}>
        <h1 className={styles.title}>You scored {score}</h1>
        <TweetButton tweet={`I scored ${score} on the Book Creator Quiz`} />
      </div>
    </Quiz>
  );
}
