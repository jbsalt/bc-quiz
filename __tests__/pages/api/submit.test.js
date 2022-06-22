import { createMocks } from "node-mocks-http";
import checkAnswers from "../../../pages/api/submit";

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
    expect(JSON.parse(res._getData())).toEqual({
      answers: [{ correct: false }, { correct: false }, { correct: true }],
    });
  });
});
