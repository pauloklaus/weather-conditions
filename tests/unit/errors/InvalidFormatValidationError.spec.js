import InvalidFormatValidationError from "@/errors/InvalidFormatValidationError";

describe("InvalidFormatValidationError", () => {
  it("should throw a InvalidFormatValidationError", () => {
    const testField = "test-field";
    const test = () => {
      throw new InvalidFormatValidationError(testField);
    };

    expect(test).toThrow(InvalidFormatValidationError);
    expect(test).toThrow(testField);
  });
});
