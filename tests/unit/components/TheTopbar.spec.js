import { shallowMount } from "@vue/test-utils";
import TheTopbar from "@/components/TheTopbar.vue";

describe("TheTopbar.vue", () => {

  it("should find header and img element", () => {
    const wrapper = shallowMount(TheTopbar);
    const header = wrapper.find("header");
    const headerHtml = header.html();

    expect(header.classes()).toContain("topbar");
    expect(headerHtml).toContain("<header");
    expect(headerHtml).toContain("<img");
  });

});
