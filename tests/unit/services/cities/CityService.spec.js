import City from "@/services/cities/City";
import CityService from "@/services/cities/CityService";

describe("CityService", () => {
  const repository = {
    getWeather: (city) => new City({
      name: city.name,
      temp: 30,
      pressure: 50,
      humidity: 40,
    })
  };
  
  let cityService = null;

  beforeEach(() => {
    cityService = new CityService(repository);
  });

  it("should get city weather", () => {
    const name = "Some City,BR";
    const cityWeather = cityService.getWeather(new City({ name }));

    expect(cityWeather.name).toBe(name);
    expect(cityWeather.temp).toBe(30);
    expect(cityWeather.pressure).toBe(50);
    expect(cityWeather.humidity).toBe(40);
  });

});
