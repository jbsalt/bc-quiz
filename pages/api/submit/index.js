import questions from "../questions";
import submissionsRepo from "../../../repositories/submissions";

const checkAnswers = async (req, res) => {
  const { answers } = JSON.parse(req.body);

  let checkedAnswers = Object.entries(answers).map(
    ([questionIndex, answer]) => {
      return {
        correct: questions[questionIndex].correctAnswer === answer,
      };
    }
  );

  const score = checkedAnswers.filter(answer => answer.correct).length;
  const submission = await submissionsRepo.create(score);
  const leaderboard = await submissionsRepo.allRanked();

  res.status(200).json({ answers: checkedAnswers, submission, leaderboard });
};

export default checkAnswers;
