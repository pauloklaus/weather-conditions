import ColorSchemeHandler from "@/helpers/ColorSchemeHandler";
import "../../mocks/windowMatchMedia.mock.js";

describe("ColorSchemeHandler", () => {

  it("should get the document root element", () => {
    const rootElement = ColorSchemeHandler.getRootElement();

    expect(rootElement).toBeInstanceOf(HTMLHtmlElement);
  });

  it("should return false mocked value", () => {
    expect(ColorSchemeHandler.isEnvironmentDarkMode()).toBeFalsy();
  });

  it("should turn dark mode off", () => {
    ColorSchemeHandler.updateAndSaveAppColorScheme(false);

    expect(ColorSchemeHandler.isAppDarkMode()).toBeFalsy();
  });

  it("should turn dark mode on", () => {
    ColorSchemeHandler.updateAndSaveAppColorScheme(true);

    expect(ColorSchemeHandler.isAppDarkMode()).toBeTruthy();
  });

  it("should toggle dark mode states", () => {
    ColorSchemeHandler.updateAndSaveAppColorScheme(true);

    ColorSchemeHandler.toggleAppColorScheme();
    expect(ColorSchemeHandler.isAppDarkMode()).toBeFalsy();

    ColorSchemeHandler.toggleAppColorScheme();
    expect(ColorSchemeHandler.isAppDarkMode()).toBeTruthy();
  });

  it("should load mocked color scheme", () => {
    localStorage.removeItem("dark-mode");

    ColorSchemeHandler.loadAndListenerEnvironmentColorScheme();
    expect(ColorSchemeHandler.isAppDarkMode()).toBeFalsy();
  });

  it("should load stored color scheme", () => {
    localStorage.setItem("dark-mode", "true");

    ColorSchemeHandler.loadAndListenerEnvironmentColorScheme();
    expect(ColorSchemeHandler.isAppDarkMode()).toBeTruthy();
  });

});
