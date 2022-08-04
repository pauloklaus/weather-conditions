import HttpStatusCode from "@/enums/HttpStatusCode";
import InternalServerError from "@/errors/InternalServerError";
import NotFoundError from "@/errors/NotFoundError";
import UnauthorizedAccessError from "@/errors/UnauthorizedAccessError";
import HttpRequester from "@/plugins/HttpRequester";

describe("HttpRequester", () => {

  const fieldValue = "value";

  it("should return a json from a get request", async () => {
    global.fetch = () =>
      Promise.resolve({
        status: HttpStatusCode.OK,
        json: () => ({ field: fieldValue })
      });

    const httpRequester = new HttpRequester("", "https://test.com/");
    const jsonResponse = await httpRequester.get();

    expect(jsonResponse.field).toBe(fieldValue);
  });

  it("should throw NotFoundError", async () => {
    global.fetch = () =>
      Promise.resolve({
        status: HttpStatusCode.NOT_FOUND,
      });

    const test = async () => {
      const httpRequester = new HttpRequester("", "https://test.com/");
      await httpRequester.get();
    };

    await expect(test).rejects.toThrow(NotFoundError);
  });

  it("should throw UnauthorizedAccessError", async () => {
    global.fetch = () =>
      Promise.resolve({
        status: HttpStatusCode.UNAUTHORIZED,
      });

    const test = async () => {
      const httpRequester = new HttpRequester("", "https://test.com/");
      await httpRequester.get();
    };

    await expect(test).rejects.toThrow(UnauthorizedAccessError);
  });

  it("should throw UnauthorizedAccessError", async () => {
    global.fetch = () =>
      Promise.resolve({
        status: HttpStatusCode.INTERNAL_SERVER_ERROR,
      });

    const test = async () => {
      const httpRequester = new HttpRequester("", "https://test.com/");
      await httpRequester.get();
    };

    await expect(test).rejects.toThrow(InternalServerError);
  });

});
