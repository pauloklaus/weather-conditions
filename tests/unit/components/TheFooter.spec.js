import { shallowMount } from "@vue/test-utils";
import TheFooter from "@/components/TheFooter.vue";

describe("TheFooter.vue", () => {

  const wrapper = shallowMount(TheFooter);
  const footerElement = wrapper.find("footer");

  it("should find the footer element", () => {
    expect(footerElement.exists()).toBeTruthy();
    expect(footerElement.classes()).toContain("footer");
  });

  it("should find the a element", () => {
    const linkElement = footerElement.find("a");
    expect(linkElement.exists()).toBeTruthy();
  });

});
