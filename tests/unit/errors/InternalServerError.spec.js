import InternalServerError from "@/errors/InternalServerError";

describe("InternalServerError", () => {
  it("should throw a InternalServerError", () => {
    const testField = "test-error";
    const test = () => {
      throw new InternalServerError(testField);
    };

    expect(test).toThrow(InternalServerError);
    expect(test).toThrow(testField);
  });
});
