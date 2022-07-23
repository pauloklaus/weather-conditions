import HourFormatter from "@/helpers/HourFormatter";

describe("HourFormatter", () => {
  
  it("should format morning time", () => {
    const morningTime = HourFormatter(new Date("2022-07-23T09:10:11"));
    expect(morningTime).toBe("09:10:11 AM");
  });

  it("should format afternon time", () => {
    const afternonTime = HourFormatter(new Date("2022-07-23T15:10:11"));
    expect(afternonTime).toBe("03:10:11 PM");
  });

});
