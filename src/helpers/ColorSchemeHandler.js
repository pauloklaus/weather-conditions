class ColorSchemeHandler {
  static getRootElement() {
    return document.querySelector(":root");
  }

  static updateAndSaveAppColorScheme(darkModeState, runAfterUpdate) {
    const htmlElement = ColorSchemeHandler.getRootElement();

    if (darkModeState) {
      htmlElement.classList.add("dark-mode");
    } else {
      htmlElement.classList.remove("dark-mode");
    }

    localStorage.setItem("dark-mode", darkModeState);

    if (typeof runAfterUpdate === "function") {
      runAfterUpdate(darkModeState);
    }
  }

  static environmentDarkMode() {
    return window.matchMedia("(prefers-color-scheme: dark)");
  }

  static isEnvironmentDarkMode() {
    return ColorSchemeHandler.environmentDarkMode().matches;
  }

  static loadAndListenerEnvironmentColorScheme(runAfterUpdate) {
    const hasDarkModeConfig = typeof localStorage.getItem("dark-mode") === "string";

    ColorSchemeHandler.updateAndSaveAppColorScheme(
      hasDarkModeConfig
        ? (localStorage.getItem("dark-mode") === "true")
        : ColorSchemeHandler.isEnvironmentDarkMode(),
      runAfterUpdate
    );

    ColorSchemeHandler.environmentDarkMode().addEventListener("change", (darkModeState) => {
      ColorSchemeHandler.updateAndSaveAppColorScheme(darkModeState, runAfterUpdate);
    });
  }

  static isAppDarkMode() {
    return ColorSchemeHandler.getRootElement().classList.contains("dark-mode");
  }

  static toggleAppColorScheme(runAfterUpdate) {
    ColorSchemeHandler.updateAndSaveAppColorScheme(
      !ColorSchemeHandler.isAppDarkMode(),
      runAfterUpdate,
    );
  }
}

export default ColorSchemeHandler;
