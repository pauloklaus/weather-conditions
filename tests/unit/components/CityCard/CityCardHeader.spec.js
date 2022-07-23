import { shallowMount } from "@vue/test-utils";
import CityCardHeader from "@/components/CityCard/CityCardHeader.vue";

describe("CityCardHeader.vue", () => {
  const city = "Brasilia, BR";
  const wrapper = shallowMount(CityCardHeader, { props: { city }});
  const divElement = wrapper.find("div");

  it("should have specific class", () => {
    expect(divElement.classes()).toContain("card-header");
  });

  it("should find CityCardHeader element", () => {
    expect(divElement.text()).toBe(city);
  });

});
