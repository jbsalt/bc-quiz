import questions from "../questions";

const getQuestions = (req, res) => {
  let questionResponse = questions.map(question => {
    const { title, answers } = question;
    return { title, answers };
  });
  res.status(200).json(questionResponse);
};

export default getQuestions;
