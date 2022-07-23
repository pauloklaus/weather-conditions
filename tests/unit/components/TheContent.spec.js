import { shallowMount } from "@vue/test-utils";
import TheContent from "@/components/TheContent.vue";
import CityCard from "@/components/CityCard/CityCard.vue";

describe("TheContent.vue", () => {
  const wrapper = shallowMount(TheContent);
  const mainElement = wrapper.find("main");

  it("should find main element", () => {
    expect(mainElement.exists()).toBeTruthy();
    expect(mainElement.classes()).toContain("main");
  });

  it("should find div element", () => {
    const divElement = mainElement.find("div");

    expect(divElement.exists()).toBeTruthy();
    expect(divElement.classes()).toContain("main__container");
  });

  it("should have three CityCard elements", () => {
    const divElement = mainElement.find("div");
    const cityCardElements = divElement.findAllComponents(CityCard);

    expect(cityCardElements).toHaveLength(3);
  });

});
