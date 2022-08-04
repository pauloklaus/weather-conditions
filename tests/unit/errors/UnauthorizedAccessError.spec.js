import UnauthorizedAccessError from "@/errors/UnauthorizedAccessError";

describe("UnauthorizedAccessError", () => {
  it("should throw a UnauthorizedAccessError", () => {
    const testField = "test-error";
    const test = () => {
      throw new UnauthorizedAccessError(testField);
    };

    expect(test).toThrow(UnauthorizedAccessError);
    expect(test).toThrow(testField);
  });
});
