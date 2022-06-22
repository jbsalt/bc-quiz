import { createContext, useEffect, useContext, useState } from "react";

export const QuizContext = createContext();

export function AppWrapper({ children }) {
  const [questions, setQuestions] = useState();
  const [userAnswers, setUserAnswers] = useState({});
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const res = await fetch("/api/questions");
        const questions = await res.json();
        setQuestions(questions);
      } catch (e) {
        setFailed(true);
        console.error(e);
      }
    };
    loadQuestions();
  }, []);

  const answerQuestion = ({ questionNumber, answer }) => {
    const ua = { ...userAnswers };
    if (userAnswers[questionNumber - 1] === answer) {
      delete ua[questionNumber - 1];
    } else {
      ua[questionNumber - 1] = answer;
    }
    setUserAnswers(ua);
  };

  return (
    <QuizContext.Provider value={{ userAnswers, answerQuestion, questions }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useAppContext() {
  return useContext(QuizContext);
}
