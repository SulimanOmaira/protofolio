const root = document.documentElement;
const btn = document.getElementById("themeToggle");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

function setTheme(mode){
  if(mode === "light"){
    root.setAttribute("data-theme","light");
    btn.textContent = "☀️";
  }else{
    root.removeAttribute("data-theme");
    btn.textContent = "🌙";
  }
  localStorage.setItem("theme", mode);
}

const saved = localStorage.getItem("theme");
setTheme(saved || "dark");

btn.addEventListener("click", () => {
  const isLight = root.getAttribute("data-theme") === "light";
  setTheme(isLight ? "dark" : "light");
});