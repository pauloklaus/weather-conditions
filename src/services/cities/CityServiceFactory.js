import HttpRequester from "@/externals/HttpRequester";
import CacheHandler from "@/externals/CacheHandler";
import CityRepository from "./CityRepository";
import CityService from "./CityService";

class CityServiceFactory {
  static factory() {
    const appId = process.env.VUE_APP_KEY_ID ?? "";
    const baseUrl = process.env.VUE_APP_URL ?? "";

    const httpRequester = new HttpRequester(appId, baseUrl);
    const cacheHandler = new CacheHandler();
    const repository = new CityRepository(httpRequester, cacheHandler);
    return new CityService(repository);
  }
}

export default CityServiceFactory;
