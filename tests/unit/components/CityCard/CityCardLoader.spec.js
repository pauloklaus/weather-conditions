import { shallowMount } from "@vue/test-utils";
import CityCardLoader from "@/components/CityCard/CityCardLoader.vue";

describe("CityCardLoader.vue", () => {
  const wrapper = shallowMount(CityCardLoader);
  const divElement = wrapper.find("div");

  it("should have specific class", () => {
    expect(divElement.classes()).toContain("card-loader");
  });

  it("should find img element", () => {
    expect(divElement.find("img").exists()).toBeTruthy();
  });

});
