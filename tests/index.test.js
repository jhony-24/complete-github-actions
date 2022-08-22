const { average } = require("../src");

describe("average", () => {
  test("should average", () => {
    expect(average({ min: 10, max: 20 })).toEqual(5);
  });
});
