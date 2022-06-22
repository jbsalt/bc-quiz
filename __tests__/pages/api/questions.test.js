import { createMocks } from "node-mocks-http";
import getQuestions from "../../../pages/api/questions/index";

describe("/api/questions", () => {
  test("returns the question data", async () => {
    const { req, res } = createMocks({
      method: "GET",
    });
    await getQuestions(req, res);
    expect(res._getStatusCode()).toBe(200);
  });
});
