import HttpRequester from "@/externals/HttpRequester";

describe("HttpRequester", () => {

  const fieldValue = "value";

  beforeAll(() => {
    global.fetch = () =>
      Promise.resolve({
        json: () => Promise.resolve({ field: fieldValue })
      });
  });

  it("should return a json from a get request", async () => {
    const httpRequester = new HttpRequester("", "https://test.com/");
    const jsonResponse = await httpRequester.get();

    expect(jsonResponse.field).toBe(fieldValue);
  });

});
