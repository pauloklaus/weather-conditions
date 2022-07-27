import { shallowMount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import TheTopbar from "@/components/TheTopbar.vue";
import "../../mocks/windowMatchMedia.mock.js";

describe("TheTopbar.vue", () => {

  const wrapper = shallowMount(TheTopbar, { global: { plugins: [createTestingPinia()] }});
  const headerElement = wrapper.find("header");

  it("should find the header element", () => {
    expect(headerElement.exists()).toBeTruthy();
    expect(headerElement.classes()).toContain("topbar");
  });

  it("should find the img element", () => {
    const imgElement = headerElement.find("img");

    expect(imgElement.exists()).toBeTruthy();
    expect(imgElement.classes()).toContain("topbar__logo");
  });

});
