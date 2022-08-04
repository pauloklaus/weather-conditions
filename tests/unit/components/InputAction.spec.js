import { shallowMount } from "@vue/test-utils";
import InputAction from "@/components/InputAction.vue";

describe("InputAction.vue", () => {
  const wrapper = shallowMount(InputAction);
  const divElement = wrapper.find("div");

  it("should have specific class", () => {
    expect(divElement.classes()).toContain("input-action");
  });

  it("should find the elements", () => {
    const divInput = divElement.find(".input-action__input");
    const input = divInput.find("input");
    const buttons = divElement.findAll(".input-action__button");

    expect(divInput.exists()).toBeTruthy();
    expect(input.exists()).toBeTruthy();
    expect(buttons.length).toBe(2);
  });

  it("should have a value in the input element", () => {
    const value = "input test";
    const wrapper = shallowMount(InputAction, { props: { value }});
    const input = wrapper.find("input[type='text']");

    expect(input.element.value).toBe(value);
  });

  it("should have the disabled confirm button", () => {
    const button = divElement.find("[data-test='confirm-button-test']");

    expect(button.element.disabled).toBeTruthy();
  });

  it("should have the enabled confirm button", async () => {
    await wrapper.setProps({ isValid: true });
    const button = divElement.find("[data-test='confirm-button-test']");

    expect(button.element.disabled).toBeFalsy();
  });

});
