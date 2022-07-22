import CacheHandler from "@/plugins/CacheHandler";

describe("CacheHandler", () => {

  const cacheKey = "cache-key";
  const testValue = "test-value";
  const testJson = { test: testValue };

  let cacheHandler = null;

  beforeEach(() => {
    cacheHandler = new CacheHandler();
  });

  afterEach(() => {
    cacheHandler.remove(cacheKey);
  });

  it("should set and get data", async () => {
    cacheHandler = new CacheHandler(0.1);
    cacheHandler.set(cacheKey, testJson);

    const isValid = cacheHandler.isValid(cacheKey);
    const cacheData = cacheHandler.get(cacheKey);

    expect(isValid).toBeTruthy();
    expect(cacheData.test).toBe(testValue);
  });

  it("should return undefined on get non cached key", () => {
    const cacheData = cacheHandler.get(cacheKey);

    expect(cacheData).toBeUndefined();
  });

  it("should return false on check undetermined key", () => {
    const isValid = cacheHandler.isValid(cacheKey);

    expect(isValid).toBeFalsy();
  });

  it("should return false on expired key", async () => {
    cacheHandler = new CacheHandler(0.1);
    cacheHandler.set(cacheKey, testJson);

    const waitAMoment = 500;
    await new Promise(resolve => setTimeout(() => resolve(), waitAMoment));
    const isValid = cacheHandler.isValid(cacheKey);

    expect(isValid).toBeFalsy();
  });

  it("should return false on removed key", async () => {
    cacheHandler = new CacheHandler(0.1);
    cacheHandler.set(cacheKey, testJson);
    cacheHandler.remove(cacheKey);
    const isValid = cacheHandler.isValid(cacheKey);

    expect(isValid).toBeFalsy();
  });

});
