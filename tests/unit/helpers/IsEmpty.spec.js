import isEmpty from "@/helpers/IsEmpty";

describe("IsEmpty", () => {

  it("should return true with an empty string", () => {
    expect(isEmpty("")).toBeTruthy();
    expect(isEmpty(" ")).toBeTruthy();
    expect(isEmpty()).toBeTruthy();
    expect(isEmpty(undefined)).toBeTruthy();
    expect(isEmpty(null)).toBeTruthy();
  });

  it("should return false with an non empty string", () => {
    expect(isEmpty("t")).toBeFalsy();
    expect(isEmpty("test")).toBeFalsy();
    expect(isEmpty(" test ")).toBeFalsy();
    expect(isEmpty("0")).toBeFalsy();
    expect(isEmpty(0)).toBeFalsy();
    expect(isEmpty("null")).toBeFalsy();
    expect(isEmpty("undefined")).toBeFalsy();
  });

});
