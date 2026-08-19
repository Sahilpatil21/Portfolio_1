document.addEventListener("DOMContentLoaded", () => {
  const data = PORTFOLIO_DATA;
  renderNav();
  renderHero(data);
  renderStats(data);
  renderAbout(data);
  renderExperience(data);
  renderCertifications(data);
  renderProjects(data);
  renderSkills(data);
  renderContact(data);
  renderFooter(data);
  initParticles();
  initScrollProgress();
  initBackToTop();
  initThemeToggle();
  initMobileMenu();
  initTypingEffect(data.profile.tagline);
  initSmoothNav();
  initGSAPAnimations();
  initSkillBarsObserver();
  initCounterAnimation();
});

function renderNav() {
  const navLinks = document.getElementById("nav-links");
  const mobileLinks = document.getElementById("mobile-nav-links");
  const sections = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#certifications", label: "Certifications" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const linkHtml = sections
    .map(
      (s) =>
        `<a href="${s.href}" class="nav-link text-sm font-medium text-slate-300 hover:text-white">${s.label}</a>`
    )
    .join("");

  navLinks.innerHTML = linkHtml;
  mobileLinks.innerHTML = sections
    .map(
      (s) =>
        `<a href="${s.href}" class="mobile-nav-link block py-3 text-lg font-medium border-b border-white/10">${s.label}</a>`
    )
    .join("");
}

function renderHero(data) {
  const { profile } = data;
  document.getElementById("hero-name").innerHTML = `Hi, I'm <span class="gradient-text">${profile.firstName}</span>`;
  document.getElementById("hero-subtitle").textContent = profile.subtitle;
  document.getElementById("hero-resume").href = profile.resumePdf;

  const imageContainer = document.getElementById("hero-video-container");
  imageContainer.innerHTML = `
    <div class="relative w-full h-full bg-slate-900 flex items-center justify-center overflow-hidden">
      <img src="${profile.profileImage}" alt="${profile.name}" class="w-full h-full object-cover object-center">
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
    </div>`;
}

function renderStats(data) {
  const container = document.getElementById("stats-grid");
  container.innerHTML = data.stats
    .map(
      (s) => `
    <div class="stat-card glass rounded-xl p-4 text-center neon-glow" data-aos="fade-up">
      <div class="text-2xl md:text-3xl font-bold gradient-text counter" data-target="${s.value}">0</div>
      <div class="text-sm text-slate-400 mt-1">${s.label}${s.suffix || ""}</div>
    </div>`
    )
    .join("");
}

function renderAbout(data) {
  document.getElementById("about-text").innerHTML = data.about.paragraphs
    .map((p) => `<p class="text-slate-400 leading-relaxed mb-4">${p}</p>`)
    .join("");

  document.getElementById("about-highlights").innerHTML = data.about.highlights
    .map(
      (h) =>
        `<span class="glass px-4 py-2 rounded-full text-sm text-cyan-300 border border-cyan-500/20">${h}</span>`
    )
    .join("");

  document.getElementById("education-list").innerHTML = data.education
    .map(
      (e) => `
    <div class="glass rounded-xl p-4" data-aos="fade-left">
      <h4 class="font-semibold text-white">${e.degree}</h4>
      <p class="text-sm text-slate-400 mt-1">${e.school}</p>
      <p class="text-xs text-purple-400 mt-2">${e.period}</p>
    </div>`
    )
    .join("");
}

function renderExperience(data) {
  const container = document.getElementById("experience-timeline");
  const typeIcons = {
    internship: "fa-brain",
    simulation: "fa-laptop-code",
    hackathon: "fa-trophy",
    volunteer: "fa-users",
  };

  container.innerHTML = data.experience
    .map(
      (exp, i) => `
    <div class="timeline-item glass rounded-xl p-5 mb-6 neon-glow" data-aos="fade-up" data-aos-delay="${i * 80}">
      <div class="flex flex-wrap items-start justify-between gap-2 mb-2">
        <div>
          <span class="text-xs uppercase tracking-wider text-purple-400 font-semibold">${exp.type}</span>
          <h3 class="text-lg font-bold text-white mt-1">${exp.title}</h3>
          <p class="text-cyan-400 text-sm">${exp.company}</p>
        </div>
        <div class="text-right">
          <span class="text-xs text-slate-500">${exp.period}</span>
          ${exp.duration ? `<p class="text-xs text-slate-600">${exp.duration}</p>` : ""}
        </div>
      </div>
      <p class="text-slate-400 text-sm leading-relaxed">${exp.description}</p>
      <div class="flex flex-wrap gap-2 mt-3">
        ${exp.tags.map((t) => `<span class="text-xs px-2 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">${t}</span>`).join("")}
      </div>
    </div>`
    )
    .join("");
}

function renderCertifications(data) {
  const container = document.getElementById("cert-grid");
  container.innerHTML = data.certifications
    .map(
      (cert, i) => `
    <div class="cert-card glass rounded-xl overflow-hidden neon-glow" data-aos="zoom-in" data-aos-delay="${i * 60}">
      ${
        cert.image
          ? `<div class="h-44 overflow-hidden bg-slate-900"><img src="${cert.image}" alt="${cert.title}" class="w-full h-full object-cover object-top" loading="lazy"></div>`
          : `<div class="h-44 bg-gradient-to-br from-purple-900/40 to-cyan-900/40 flex items-center justify-center"><i class="fas fa-certificate text-5xl text-purple-400/60"></i></div>`
      }
      <div class="p-4">
        <h3 class="font-semibold text-white text-sm leading-snug">${cert.title}</h3>
        <p class="text-xs text-slate-400 mt-1">${cert.issuer}</p>
        <div class="flex items-center justify-between mt-3">
          <span class="text-xs text-purple-400">${cert.year}</span>
          ${cert.pdf ? `<a href="${cert.pdf}" target="_blank" rel="noopener" class="text-xs text-cyan-400 hover:text-cyan-300"><i class="fas fa-file-pdf mr-1"></i>View PDF</a>` : ""}
        </div>
      </div>
    </div>`
    )
    .join("");
}

function renderProjects(data) {
  const container = document.getElementById("projects-grid");
  const featured = data.projects.filter((p) => p.featured);
  const others = data.projects.filter((p) => !p.featured);

  const renderCard = (project, i) => {
    const hasLive = project.live && project.live.trim() !== "";
    const hasGithub = project.github && project.github.trim() !== "";

    return `
    <div class="project-card glass rounded-2xl p-6 flex flex-col h-full" data-aos="fade-up" data-aos-delay="${i * 80}">
      <div class="flex items-start justify-between mb-3">
        <h3 class="text-lg font-bold text-white">${project.title}</h3>
        <i class="fas fa-code text-purple-400/50"></i>
      </div>
      <p class="text-slate-400 text-sm leading-relaxed flex-grow">${project.description}</p>
      <div class="flex flex-wrap gap-2 my-4">
        ${project.stack.map((t) => `<span class="text-xs px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/15">${t}</span>`).join("")}
      </div>
      <div class="flex gap-3 mt-auto pt-2">
        ${
          hasGithub
            ? `<a href="${project.github}" target="_blank" rel="noopener" class="flex-1 text-center py-2 rounded-lg text-sm font-medium btn-outline text-purple-300"><i class="fab fa-github mr-1"></i> GitHub</a>`
            : `<span class="flex-1 text-center py-2 rounded-lg text-sm live-link-disabled glass text-slate-500"><i class="fab fa-github mr-1"></i> GitHub</span>`
        }
        ${
          hasLive
            ? `<a href="${project.live}" target="_blank" rel="noopener" class="flex-1 text-center py-2 rounded-lg text-sm font-medium btn-primary text-white"><i class="fas fa-external-link-alt mr-1"></i> Live Demo</a>`
            : `<span class="flex-1 text-center py-2 rounded-lg text-sm live-link-disabled glass text-slate-500" title="Add live URL in js/data.js"><i class="fas fa-external-link-alt mr-1"></i> Live Demo</span>`
        }
      </div>
    </div>`;
  };

  container.innerHTML = [...featured, ...others].map(renderCard).join("");
}

function renderSkills(data) {
  const bars = document.getElementById("skill-bars");
  bars.innerHTML = data.skills.technical
    .map(
      (s) => `
    <div class="mb-4" data-aos="fade-right">
      <div class="flex justify-between text-sm mb-1">
        <span class="text-slate-300">${s.name}</span>
        <span class="text-purple-400 skill-pct">${s.level}%</span>
      </div>
      <div class="h-2 rounded-full bg-slate-800/80 overflow-hidden">
        <div class="skill-bar-fill" data-level="${s.level}"></div>
      </div>
    </div>`
    )
    .join("");

  document.getElementById("soft-skills").innerHTML = data.skills.soft
    .map(
      (s) =>
        `<span class="glass px-3 py-2 rounded-lg text-sm text-slate-300 flex items-center gap-2"><i class="fas fa-check text-cyan-400 text-xs"></i>${s}</span>`
    )
    .join("");

  document.getElementById("languages").innerHTML = data.skills.languages
    .map(
      (l) =>
        `<span class="glass px-4 py-2 rounded-full text-sm text-purple-300 border border-purple-500/20">${l}</span>`
    )
    .join("");
}

function renderContact(data) {
  const { profile } = data;
  document.getElementById("contact-email-display").textContent = profile.email;
  document.getElementById("contact-phone-display").textContent = profile.phone;
  document.getElementById("contact-location-display").textContent = profile.location;
  document.getElementById("social-github").href = profile.github;
  document.getElementById("social-linkedin").href = profile.linkedin;
  document.getElementById("social-email").href = `mailto:${profile.email}`;
}

function renderFooter(data) {
  document.getElementById("footer-name").textContent = data.profile.name;
  document.getElementById("footer-year").textContent = new Date().getFullYear();
  document.getElementById("footer-github").href = data.profile.github;
  document.getElementById("footer-linkedin").href = data.profile.linkedin;
}

function initParticles() {
  if (typeof particlesJS === "undefined") return;
  particlesJS("particles-js", {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 900 } },
      color: { value: ["#a855f7", "#06b6d4", "#3b82f6"] },
      shape: { type: "circle" },
      opacity: { value: 0.35, random: true },
      size: { value: 2.5, random: true },
      line_linked: {
        enable: true,
        distance: 140,
        color: "#a855f7",
        opacity: 0.12,
        width: 1,
      },
      move: { enable: true, speed: 1.2, random: true },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        resize: true,
      },
      modes: { grab: { distance: 120, line_linked: { opacity: 0.25 } } },
    },
    retina_detect: true,
  });
}

function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = docHeight > 0 ? `${(scrollTop / docHeight) * 100}%` : "0%";
  });
}

function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 400);
  });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function initThemeToggle() {
  const toggle = document.getElementById("theme-toggle");
  const icon = toggle.querySelector("i");
  const saved = localStorage.getItem("portfolio-theme");
  if (saved === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    icon.className = "fas fa-sun";
  }

  toggle.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    if (isLight) {
      document.documentElement.removeAttribute("data-theme");
      icon.className = "fas fa-moon";
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      icon.className = "fas fa-sun";
      localStorage.setItem("portfolio-theme", "light");
    }
  });
}

function initMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const openBtn = document.getElementById("mobile-menu-btn");
  const closeBtn = document.getElementById("mobile-menu-close");

  openBtn.addEventListener("click", () => menu.classList.add("open"));
  closeBtn.addEventListener("click", () => menu.classList.remove("open"));
  menu.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", () => menu.classList.remove("open"));
  });
}

function initTypingEffect(text) {
  const el = document.getElementById("typing-text");
  if (!el) return;
  el.classList.add("typing-cursor");
  let i = 0;
  const type = () => {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(type, i === text.length ? 0 : 45);
    }
  };
  setTimeout(type, 800);
}

function initSmoothNav() {
  const links = document.querySelectorAll(".nav-link, .mobile-nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 120) {
        current = section.getAttribute("id");
      }
    });
    links.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
      if (link.classList.contains("active")) {
        link.classList.add("text-white");
      }
    });
  });
}

function initGSAPAnimations() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#hero-content", {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power3.out",
    delay: 0.2,
  });

  gsap.from("#hero-video-wrap", {
    opacity: 0,
    scale: 0.92,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.4,
  });

  gsap.utils.toArray(".section-title").forEach((title) => {
    gsap.from(title, {
      scrollTrigger: { trigger: title, start: "top 85%" },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
    });
  });
}

function initSkillBarsObserver() {
  const bars = document.querySelectorAll(".skill-bar-fill");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.width = `${entry.target.dataset.level}%`;
        }
      });
    },
    { threshold: 0.3 }
  );
  bars.forEach((bar) => observer.observe(bar));
}

function initCounterAnimation() {
  const counters = document.querySelectorAll(".counter");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        let current = 0;
        const step = Math.ceil(target / 40);
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            el.textContent = target;
            clearInterval(timer);
          } else {
            el.textContent = current;
          }
        }, 30);
        observer.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((c) => observer.observe(c));
}

document.getElementById("contact-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;
  const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${subject}&body=${body}`;
});
