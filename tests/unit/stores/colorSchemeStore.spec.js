import { setActivePinia, createPinia } from "pinia";
import useColorSchemeStore from "@/stores/colorSchemeStore";
import "../../mocks/windowMatchMedia.mock.js";

describe("Color scheme store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should start the dark mode as false", () => {
    const colorSchemeStore = useColorSchemeStore();

    expect(colorSchemeStore.isDarkMode).toBeFalsy();
  });

  it("should toggle the dark mode to true", () => {
    const colorSchemeStore = useColorSchemeStore();

    colorSchemeStore.toggleAppColorScheme();
    expect(colorSchemeStore.isDarkMode).toBeTruthy();
  });

});
