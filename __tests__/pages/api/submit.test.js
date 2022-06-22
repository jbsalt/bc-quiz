import { createMocks } from "node-mocks-http";
import checkAnswers from "../../../pages/api/submit";
import submissionsRepo from "../../../repositories/submissions";

describe("/api/submit", () => {
  test("returns the marked answers", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: JSON.stringify({
        answers: { 0: 1, 1: 0, 2: 2 },
      }),
    });
    await checkAnswers(req, res);
    expect(res._getStatusCode()).toBe(200);
    const data = JSON.parse(res._getData());
    expect(data.answers).toEqual([{ correct: false }, { correct: false }, { correct: true }]);
  });

  test("saves & returns the submission", async () => {
    let initialSubmissionsCount = await submissionsRepo.count();
    const { req, res } = createMocks({
      method: "POST",
      body: JSON.stringify({
        answers: { 0: 1, 1: 0, 2: 2 },
      }),
    });

    await checkAnswers(req, res);
    const data = JSON.parse(res._getData())

    expect(res._getStatusCode()).toBe(200);
    expect(data).toHaveProperty('submission.id');
    expect(data).toHaveProperty('submission.name', null);
    expect(data).toHaveProperty('submission.score', 1);
    expect(await submissionsRepo.count()).toBe(initialSubmissionsCount + 1);
  });
});
