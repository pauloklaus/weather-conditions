import { shallowMount } from "@vue/test-utils";
import CityCardHeader from "@/components/CityCard/CityCardHeader.vue";
import InputAction from "@/components/InputAction.vue";

describe("CityCardHeader.vue", () => {
  const city = "Brasilia, BR";
  const wrapper = shallowMount(CityCardHeader, { props: { city }});
  const divElement = wrapper.find("div");

  it("should have specific class", () => {
    expect(divElement.classes()).toContain("card-header");
  });

  it("should find the title and link element", () => {
    const divTitle = divElement.find("div");
    const linkTitle = divTitle.find("a");
    
    expect(divTitle.classes()).toContain("card-header__title");
    expect(linkTitle.text()).toBe(city);
  });

  it("should find the InputAction element", async () => {
    wrapper.vm.editing = true;
    await wrapper.vm.$nextTick();
    const inputAction = divElement.findComponent(InputAction);
    
    expect(inputAction.exists()).toBeTruthy();
  });

});
