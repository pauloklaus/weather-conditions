import { shallowMount } from "@vue/test-utils";
import CityCardContent from "@/components/CityCard/CityCardContent.vue";

describe("CityCardContent.vue", () => {
  const wrapper = shallowMount(CityCardContent, { props: { temp: 25 }});

  it("should have specific class", () => {
    const divElement = wrapper.find("div");
    expect(divElement.classes()).toContain("card-content");
  });

  it("should have two div children elements", () => {
    const divElement = wrapper.find("div");
    expect(divElement.findAll("div")).toHaveLength(2);
  });

  it("should have .card-content--blue class when temp is less than or equal to 5 degrees", async () => {
    const wrapperTemp = shallowMount(CityCardContent, { props: { temp: 5 }});
    const divElement = wrapperTemp.find("div");

    expect(divElement.classes()).toContain("card-content--blue");
  });

  it("should have .card-content--orange class when temp is between 6 and 24 degrees", async () => {
    const wrapperTemp = shallowMount(CityCardContent, { props: { temp: 20 }});
    const divElement = wrapperTemp.find("div");

    expect(divElement.classes()).toContain("card-content--orange");
  });

  it("should have .card-content--red class when temp is greater than or equal to 25 degrees", async () => {
    const wrapperTemp = shallowMount(CityCardContent, { props: { temp: 25 }});
    const divElement = wrapperTemp.find("div");

    expect(divElement.classes()).toContain("card-content--red");
  });

});
