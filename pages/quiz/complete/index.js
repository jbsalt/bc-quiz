import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { QuizContext } from "../../../context/quiz";
import Quiz from "../";
import Leaderboard from "../../../components/leaderboard";
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
  const entries = result.leaderboard
  const userId = result.submission.id
  const rank = entries.findIndex((entry) => entry.id === userId) + 1

  return (
    <Quiz>
      <div className={styles.container}>
        <h1 className={styles.title}>🏅{rank} » You scored {score}</h1>

        <Leaderboard entries={entries} userId={userId} />
      </div>
    </Quiz>
  );
}
