import { shallowMount } from "@vue/test-utils";
import TheTopbar from "@/components/TheTopbar.vue";

describe("TheTopbar.vue", () => {
  const wrapper = shallowMount(TheTopbar);
  const headerElement = wrapper.find("header");

  it("should find header element", () => {
    expect(headerElement.exists()).toBeTruthy();
    expect(headerElement.classes()).toContain("topbar");
  });

  it("should find img element", () => {
    const imgElement = headerElement.find("img");

    expect(imgElement.exists()).toBeTruthy();
    expect(imgElement.classes()).toContain("topbar__logo");
  });

});
