import repo from "../../repositories/submissions";

describe("Submissions Repository", () => {
  test("all", async () => {
    const all = await repo.all();
    expect(all).toBeInstanceOf(Array);
  });

  test("count", async () => {
    const count = await repo.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test("create", async () => {
    const initialSubmissionsCount = await repo.count();

    const result = await repo.create(1, 'first last');
    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('name', 'first last');
    expect(result).toHaveProperty('score', 1);

    expect(await repo.count()).toBe(initialSubmissionsCount + 1);
  });

  test("updates name if submission id found", async () => {
    let [submission] = await repo.all();
    submission ??= await repo.create(1, 'first last');

    const result = await repo.updateName(submission.id, 'Name');

    expect(result).toHaveProperty('id', submission.id);
    expect(result).toHaveProperty('name', 'Name');
    expect(result).toHaveProperty('score', 1);

    // TODO more data checks...
  });
});
