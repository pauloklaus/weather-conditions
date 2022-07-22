import RequiredFieldValidationError from "@/errors/RequiredFieldValidationError";

describe("RequiredFieldValidationError", () => {
  it("should throw a RequiredFieldValidationError", () => {
    const testField = "test-field";
    const test = () => {
      throw new RequiredFieldValidationError(testField);
    };

    expect(test).toThrow(RequiredFieldValidationError);
    expect(test).toThrow(testField);
  });
});
