import { shallowMount } from "@vue/test-utils";
import CityCard from "@/components/CityCard/CityCard.vue";
import CityCardHeader from "@/components/CityCard/CityCardHeader.vue";
import CityCardContent from "@/components/CityCard/CityCardContent.vue";
import CityCardFooter from "@/components/CityCard/CityCardFooter.vue";

describe("CityCard.vue", () => {
  const wrapper = shallowMount(CityCard, { props: { city: "sao paulo,br" }});
  const cardElement = wrapper.find("div");

  it("should have card class", () => {
    expect(cardElement.classes()).toContain("card");
  });

  it("should find CityCardHeader element", () => {
    expect(cardElement.findComponent(CityCardHeader).exists()).toBeTruthy();
  });

  it("should find CityCardContent element", () => {
    expect(cardElement.findComponent(CityCardContent).exists()).toBeTruthy();
  });

  it("should find CityCardFooter element", () => {
    expect(cardElement.findComponent(CityCardFooter).exists()).toBeTruthy();
  });

  it("should have cityData with city and country name", () => {
    expect(wrapper.vm.cityData.name).toBe("Sao Paulo");
    expect(wrapper.vm.cityData.country).toBe("BR");
  });

});
