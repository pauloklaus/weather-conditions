import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import TheTopbar from "@/components/TheTopbar.vue";
import TheContent from "@/components/TheContent.vue";
import TheFooter from "@/components/TheFooter.vue";

describe("App.vue", () => {

  it("should find TheTopbar and TheContent element", () => {
    const wrapper = shallowMount(App);

    expect(wrapper.findComponent(TheTopbar)).toBeTruthy();
    expect(wrapper.findComponent(TheContent)).toBeTruthy();
    expect(wrapper.findComponent(TheFooter)).toBeTruthy();
  });

});
