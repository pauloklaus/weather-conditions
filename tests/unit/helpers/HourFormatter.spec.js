import hourFormatter from "@/helpers/HourFormatter";

describe("hourFormatter", () => {
  
  it("should format morning time", () => {
    const morningTime = hourFormatter(new Date("2022-07-23T09:10:11"));
    expect(morningTime).toBe("09:10:11 AM");
  });

  it("should format afternon time", () => {
    const afternonTime = hourFormatter(new Date("2022-07-23T15:10:11"));
    expect(afternonTime).toBe("03:10:11 PM");
  });

  it("should format morning time", () => {
    const morningTime = hourFormatter(new Date("2022-07-23T12:10:11"));
    expect(morningTime).toBe("12:10:11 PM");
  });

  it("should format morning time", () => {
    const morningTime = hourFormatter(new Date("2022-07-23T00:10:11"));
    expect(morningTime).toBe("00:10:11 AM");
  });

});
