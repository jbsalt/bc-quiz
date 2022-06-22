import questions from "../questions";

const checkAnswers = (req, res) => {
  const { answers } = JSON.parse(req.body);
  let checkedAnswers = Object.entries(answers).map(
    ([questionIndex, answer]) => {
      return {
        correct: questions[questionIndex].correctAnswer === answer,
      };
    }
  );
  res.status(200).json({ answers: checkedAnswers });
};

export default checkAnswers;
