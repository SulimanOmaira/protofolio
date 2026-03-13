// Advanced animations for extraordinary portfolio
import { siteData } from "./data.js";

// Typing effect
export function initTyping() {
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return;

  // const texts = ['Flutter & modern APIs.', 'real-time systems.', 'scalable backends.'];
const texts = [
  'Flutter & real-time mobile apps.',
  'scalable APIs with Laravel & NestJS.',
  'clean architecture for production.'
];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeWriter() {
    const currentText = texts[textIndex];

    if (!isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeWriter, 2000); // Pause at end
        return;
      }
    } else {
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    }

    const speed = isDeleting ? 50 : 100;
    setTimeout(typeWriter, speed);
  }

  // Start typing after a delay
  setTimeout(typeWriter, 1000);
}

// Particle effect
export function initParticles() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  const hero = document.querySelector('.hero');
  if (!hero) return;

  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles';
  hero.appendChild(particlesContainer);

  function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.width = Math.random() * 4 + 2 + 'px';
    particle.style.height = particle.style.width;
    particle.style.animationDuration = Math.random() * 5 + 5 + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    particlesContainer.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 10000);
  }

  // Create particles periodically
  setInterval(createParticle, 300);
}

// Floating elements
export function initFloating() {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.classList.add('float');
    card.style.animationDelay = index * 0.5 + 's';
  });
}

// Pulse effect on buttons
export function initPulse() {
  const primaryBtns = document.querySelectorAll('.btn--primary');
  primaryBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.classList.add('pulse');
    });
    btn.addEventListener('mouseleave', () => {
      btn.classList.remove('pulse');
    });
  });
}

// Scroll Progress Bar
export function initScrollProgress() {
  const progressBar = document.getElementById('progress-bar');
  if (!progressBar) return;

  function updateProgress() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
  }

  window.addEventListener('scroll', updateProgress);
  updateProgress(); // Initial call
}

// Modal Functionality
export function initModal() {
  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');
//   const overlay = modal.querySelector('.modal__overlay');

  if (!modal || !modalBody || !modalClose || !overlay) return;

  // Function to close modal
  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Restore scroll
  }

  // Function to open modal
  function openModal(projectKey) {
    const project = siteData.projects[projectKey];
    if (!project) return;

    modalBody.innerHTML = `
      <h2 class="h3" style="margin-bottom: 15px;">${project.title}</h2>
      <p style="margin-bottom: 20px;">${project.description}</p>

      <h4 style="margin-bottom: 10px;">Key Features:</h4>
      <ul class="list" style="margin-bottom: 20px;">
        ${project.features.map(feature => `<li class="list__item">${feature}</li>`).join('')}
      </ul>

      <h4 style="margin-bottom: 10px;">Technologies Used:</h4>
      <div class="chips" style="margin-bottom: 20px;">
        ${project.tech.map(tech => `<span class="chip">${tech}</span>`).join('')}
      </div>

      <div class="row">
        <a class="btn btn--primary btn--sm" href="${project.demo}" target="_blank" rel="noreferrer">Live Demo</a>
      </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  }

  // Event listeners for closing
  modalClose.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal(); // Click outside content
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      closeModal();
    }
  });

  // Attach click events to project buttons
  document.querySelectorAll('.project .btn--primary').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectCard = btn.closest('.project');
      const title = projectCard.querySelector('.h3').textContent.toLowerCase();

      let projectKey = '';
      if (title.includes('taxi')) projectKey = 'taxi';
      else if (title.includes('marketplace')) projectKey = 'marketplace';
      else if (title.includes('chatbot')) projectKey = 'chatbot';

      if (projectKey) openModal(projectKey);
    });
  });


}