import CityServiceFactory from "@/services/cities/CityServiceFactory";

class GetCityWeather {
  static async execute(cityAndCountry) {
    const cityService = CityServiceFactory.factory();
    return await cityService.getWeather(cityAndCountry);
  }
}

export default GetCityWeather;
