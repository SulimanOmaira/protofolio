// Animate-on-scroll using IntersectionObserver (fast + no scroll listeners)
// MDN docs: Intersection Observer API :contentReference[oaicite:4]{index=4}

export function initReveal() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const items = Array.from(document.querySelectorAll(".reveal"));
  if (!items.length) return;

  // If user wants reduced motion, just show everything.
  if (prefersReducedMotion) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        // small stagger using inline style; clean + simple
        const el = entry.target;
        const delay = el.dataset.delay ? Number(el.dataset.delay) : 0;
        el.style.transitionDelay = `${delay}ms`;
        el.classList.add("is-visible");
        obs.unobserve(el);
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((el, idx) => {
    // automatic stagger
    el.dataset.delay = String(Math.min(idx * 60, 420));
    io.observe(el);
  });
}