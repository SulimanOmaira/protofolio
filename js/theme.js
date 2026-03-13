const THEME_KEY = "theme";

export function initTheme(toggleBtn) {
  const root = document.documentElement;

  const apply = (mode) => {
    if (mode === "light") {
      root.setAttribute("data-theme", "light");
      toggleBtn.querySelector(".icon").textContent = "☀️";
    } else {
      root.removeAttribute("data-theme");
      toggleBtn.querySelector(".icon").textContent = "🌙";
    }
    localStorage.setItem(THEME_KEY, mode);
  };

  const saved = localStorage.getItem(THEME_KEY);
  apply(saved || "dark");

  toggleBtn.addEventListener("click", () => {
    const isLight = root.getAttribute("data-theme") === "light";
    apply(isLight ? "dark" : "light");
  });
}