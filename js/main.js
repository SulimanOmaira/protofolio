import { initTheme } from "./theme.js";
import { initReveal } from "./reveal.js";
import { initTyping, initParticles, initFloating, initPulse, initScrollProgress } from "./advanced.js";
import { siteData } from "./data.js";

function initData() {
  // Set avatar image
  const avatarImg = document.getElementById('avatarImg');
  if (avatarImg) avatarImg.src = siteData.personal.avatar;

  // Set project images by matching data keys with project cards
  const projects = document.querySelectorAll('.project');
  const projectKeys = Object.keys(siteData.projects);
  
  projects.forEach((project, index) => {
    if (index < projectKeys.length) {
      const projectKey = projectKeys[index];
      const projectData = siteData.projects[projectKey];
      
      // Try to set image on .project__img or .project__thumb
      let imgElement = project.querySelector('.project__img');
      if (!imgElement) {
        imgElement = project.querySelector('.project__thumb');
      }
      
      if (imgElement && projectData.image) {
        imgElement.style.backgroundImage = `url('${projectData.image}')`;
        imgElement.style.backgroundSize = 'cover';
        imgElement.style.backgroundPosition = 'center';
      }
    }
  });

  // Update social links
  const githubLinks = document.querySelectorAll('a[href*="github.com"]');
  const linkedinLinks = document.querySelectorAll('a[href*="linkedin.com"]');
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

  githubLinks.forEach(link => link.href = siteData.social.github);
  linkedinLinks.forEach(link => link.href = siteData.social.linkedin);
  emailLinks.forEach(link => link.href = siteData.social.email);
}



function initYear() { const year = document.getElementById("year"); if (year) year.textContent = String(new Date().getFullYear()); }

function initMobileMenu() {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("mobileMenu");
  if (!burger || !menu) return;

  burger.addEventListener("click", () => {
    const isOpen = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!isOpen));
    menu.hidden = isOpen;
  });

  // close when clicking a link
  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      burger.setAttribute("aria-expanded", "false");
      menu.hidden = true;
    });
  });
}

function initMicroInteractions() {
  // Optional micro animation using Web Animations API (Element.animate)
  // MDN: Element.animate :contentReference[oaicite:5]{index=5}
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  const buttons = document.querySelectorAll(".btn--primary");
  buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      btn.animate(
        [{ transform: "translateY(0)" }, { transform: "translateY(-2px)" }, { transform: "translateY(0)" }],
        { duration: 380, easing: "ease-out" }
      );
    });
  });
}

initYear();
initData();
// initLanguage();
initMobileMenu();
initTheme(document.getElementById("themeToggle"));
initReveal();
initMicroInteractions();
initTyping();
initParticles();
initFloating();
initPulse();
initScrollProgress();