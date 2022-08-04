import NotFoundError from "@/errors/NotFoundError";

describe("NotFoundError", () => {
  it("should throw a NotFoundError", () => {
    const testField = "test-error";
    const test = () => {
      throw new NotFoundError(testField);
    };

    expect(test).toThrow(NotFoundError);
    expect(test).toThrow(testField);
  });
});
