import { shallowMount } from "@vue/test-utils";
import CityCardFooter from "@/components/CityCard/CityCardFooter.vue";
import hourFormatter from "@/helpers/HourFormatter";

describe("CityCardFooter.vue", () => {

  const pressure = 930;
  const humidity = 85;
  const updatedAt = new Date();

  const wrapper = shallowMount(CityCardFooter, {
    props: {
      pressure,
      humidity,
      updatedAt,
    }
  });

  it("should have specific class", () => {
    const divElement = wrapper.find("div");
    expect(divElement.classes()).toContain("card-footer");
  });

  it("should show pressure value", () => {
    const pressureElement = wrapper.find(".card-footer__data__pressure");
    expect(pressureElement.text()).toBe(`${pressure}`);
  });

  it("should show humidity value", () => {
    const humidityElement = wrapper.find(".card-footer__data__humidity");
    expect(humidityElement.text()).toBe(`${humidity}`);
  });
  
  it("should show updated date", () => {
    const pressureElement = wrapper.find(".card-footer__updated");
    expect(pressureElement.text()).toContain(hourFormatter(updatedAt));
  });

});
