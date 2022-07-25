import CityServiceFactory from "@/services/cities/CityServiceFactory";

class GetCityWeather {
  static async execute(city) {
    const cityService = CityServiceFactory.factory();
    return await cityService.getWeather(city);
  }
}

export default GetCityWeather;
