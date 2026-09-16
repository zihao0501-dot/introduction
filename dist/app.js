import { links, projects, skillGroups, translations } from './content.js?v=4';
import { setupSurfaceInteractions } from './interactions.js';

const icons = {
  arrow: '<path d="M6 18 18 6M6 6h12v12"/>',
  github: '<path d="M9 19c-4.3 1.3-4.3-2.2-6-2.7M15 22v-3.4c0-1 .1-1.7-.5-2.4 3.2-.4 6.5-1.6 6.5-7.1 0-1.6-.6-2.9-1.5-4 .2-.4.7-1.9-.1-4 0 0-1.2-.4-4.1 1.5a14 14 0 0 0-7.5 0C4.9 0 3.7.4 3.7.4c-.8 2.1-.3 3.6-.1 4C2.6 5.5 2 6.8 2 8.4c0 5.5 3.3 6.7 6.5 7.1-.5.5-.7 1.1-.6 2.1V22" transform="translate(1 1) scale(.9)"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7.5 10v7M7.5 7v.1M11.5 17v-7m0 3a3 3 0 0 1 6 0v4"/>',
  email: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m3 7 9 6 9-6"/>',
  code: '<path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18"/>',
  globe: '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>',
  terminal: '<rect x="2" y="4" width="20" height="16" rx="3"/><path d="m6 9 3 3-3 3m7 0h5"/>',
  network: '<circle cx="12" cy="5" r="3"/><circle cx="5" cy="18" r="3"/><circle cx="19" cy="18" r="3"/><path d="m10.5 7.5-4 8m7-8 4 8M8 18h8"/>',
  book: '<path d="M12 6c-3-2-6-2-10-1v15c4-1 7-1 10 1 3-2 6-2 10-1V5c-4-1-7-1-10 1v15"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
};
const icon = (name, className = '') => `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.arrow}</svg>`;
const escape = (value) => String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const multiline = (value) => escape(value).replace(/\n/g, '<br>');
const tags = (items, className = '') => `<ul class="tags ${className}">${items.map((item) => `<li>${escape(item)}</li>`).join('')}</ul>`;
const sectionHeading = (number, label, title, intro = '') => `<div class="section-heading"><div class="eyebrow"><span class="section-number">${number}</span>${escape(label)}</div><h2>${multiline(title)}</h2>${intro ? `<p>${escape(intro)}</p>` : ''}</div>`;
const navKeys = ['home', 'about', 'education', 'project', 'skills', 'contact'];
const storageKey = 'jerry-portfolio-language';
let language = 'en';
try { if (localStorage.getItem(storageKey) === 'zh') language = 'zh'; } catch { /* Language switching still works if storage is unavailable. */ }
let activeSection = 'home';
let sectionObserver;
let revealObserver;
let toastTimer;
const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
const mobileMenu = document.querySelector('#mobile-menu');
const menuToggle = document.querySelector('.menu-toggle');
const notice = document.querySelector('#link-notice');

function destination(value, email = false) {
  if (!value || /_HERE$/.test(value)) return null;
  if (email) return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? `mailto:${value}` : null;
  try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol) ? url.href : null; } catch { return null; }
}

function linkAttributes(value, type, label) {
  const href = destination(value, type === 'email');
  return href
    ? `href="${escape(href)}" ${type === 'email' ? '' : 'target="_blank" rel="noopener noreferrer"'} aria-label="${escape(label)}"`
    : `href="#contact" data-placeholder="${type}" aria-label="${escape(label)}"`;
}

function elementsDiagram(t, id) {
  const elements = [
    { name: 'wood', character: '木', x: 230, y: 90, color: '#b8bd8c' },
    { name: 'fire', character: '火', x: 363, y: 187, color: '#bda085' },
    { name: 'earth', character: '土', x: 312, y: 343, color: '#c9b57c' },
    { name: 'metal', character: '金', x: 148, y: 343, color: '#c5c5b5' },
    { name: 'water', character: '水', x: 97, y: 187, color: '#95aaa9' },
  ];
  return `<div class="project-diagram" role="img" aria-label="${language === 'zh' ? '五行示意图：木、火、土、金、水' : 'Five Elements diagram: Wood, Fire, Earth, Metal and Water'}">
    <div class="diagram-topline"><span>BAZI / 八字</span><span>01</span></div>
    <svg viewBox="0 0 460 450" aria-hidden="true" class="elements-svg">
      <defs><radialGradient id="elements-glow-${escape(id)}"><stop stop-color="#9b8b51" stop-opacity=".2"/><stop offset="1" stop-color="#9b8b51" stop-opacity="0"/></radialGradient></defs>
      <circle cx="230" cy="230" r="210" fill="url(#elements-glow-${escape(id)})"/>
      <g stroke="#b6ad82" stroke-width="1"><circle cx="230" cy="230" r="176" opacity=".14"/><circle cx="230" cy="230" r="154" opacity=".18" stroke-dasharray="1 8"/><path d="M230 90 363 187 312 343 148 343 97 187Z" opacity=".3"/><path d="m230 90 82 253L97 187h266L148 343Z" opacity=".15"/></g>
      <circle cx="230" cy="230" r="51" fill="#292d20" stroke="#a39668" stroke-opacity=".2"/>
      <text x="230" y="235" text-anchor="middle" fill="#dfd2aa" font-size="29" font-family="serif">五行</text><text x="230" y="258" text-anchor="middle" fill="#a2987b" font-size="9" letter-spacing="2">${escape(t.elements)}</text>
      ${elements.map((e) => `<g><circle cx="${e.x}" cy="${e.y}" r="27" fill="#24291f" stroke="${e.color}" stroke-opacity=".4"/><text x="${e.x}" y="${e.y + 7}" text-anchor="middle" font-size="22" fill="${e.color}" font-family="serif">${e.character}</text><text x="${e.x}" y="${e.y + 47}" text-anchor="middle" font-size="11" fill="#b5b6a5">${escape(t[e.name])}</text></g>`).join('')}
    </svg><div class="diagram-caption">${escape(t.caption)}</div>
  </div>`;
}

function projectCard(project, index, t) {
  const p = project[language];
  const demo = destination(project.demo);
  const source = destination(project.github);
  return `<article class="project-card reveal" aria-labelledby="project-title-${escape(project.id)}">
    <a class="project-preview" ${linkAttributes(project.demo, "project", demo ? t.view : translations[language].contact.demoAria)}>${project.previewImage ? `<img class="project-image" src="${escape(project.previewImage)}" alt="${escape(p.title)}" width="520" height="520" loading="lazy">` : elementsDiagram(t, project.id)}<span class="preview-overlay">${escape(t.view)}${icon("arrow")}</span></a>
    <div class="project-details"><span class="project-kicker"><span class="small-square"></span>${escape(t.independent)}<span class="project-index">${String(index + 1).padStart(2, '0')}</span></span>
      <h3 id="project-title-${escape(project.id)}">${escape(p.title)}</h3><p>${escape(p.description)}</p>${tags(p.topics, 'project-tags')}
      <div class="project-features"><span>${icon('globe')}${escape(t.bilingual)}</span><span>${icon('code')}${escape(t.responsive)}</span></div>
      <div class="project-links"><div><a class="button button-primary" ${linkAttributes(project.demo, 'project', demo ? t.demo : translations[language].contact.demoAria)}>${escape(t.demo)}${icon('arrow')}</a>${demo ? '' : `<span class="placeholder-code">${escape(project.demo)}</span>`}</div><div><a class="button button-secondary" ${linkAttributes(project.github, 'github', source ? t.source : translations[language].contact.githubAria)}>${icon('github')}${escape(t.source)}</a>${source ? '' : `<span class="placeholder-code">${escape(project.github)}</span>`}</div></div>
    </div></article>`;
}

function renderSections(t) {
  document.querySelector('#portfolio-content').innerHTML = `
    <section class="about-section section container" id="about" aria-labelledby="about-title">
      <div class="about-heading reveal"><div class="eyebrow"><span class="section-number">01</span>${escape(t.about.label)}</div><h2 id="about-title">${multiline(t.about.title)}</h2><span class="about-symbol" aria-hidden="true">{ <span>${escape(t.about.curiosity)}</span> }</span></div>
      <div class="about-copy reveal"><p class="lead">${escape(t.about.p1)}</p><p>${escape(t.about.p2)}</p><p>${escape(t.about.p3)}</p>${tags(t.about.interests, 'interest-tags')}</div>
    </section>
    <section class="education-section section container" id="education" aria-label="${escape(t.education.label)}">
      <div class="reveal">${sectionHeading('02', t.education.label, t.education.title)}</div>
      <article class="education-card reveal"><div class="education-main"><div class="education-icon">${icon('book')}</div><div><div class="university-line"><h3>${escape(t.education.university)}</h3><span class="undergrad-badge">${escape(t.education.badge)}</span></div><p class="degree">${escape(t.education.degree)}</p><p class="education-location">${icon('pin')}${escape(t.location)}</p></div></div>
        <div class="education-bottom"><dl class="education-facts"><div><dt>${escape(t.education.specialisation)}</dt><dd>${escape(t.education.specialisationValue)}</dd></div><div><dt>${escape(t.education.study)}</dt><dd>${escape(t.education.studyValue)}</dd></div></dl><div class="academic-result"><span class="academic-label">${escape(t.education.result)}</span><div><strong>70<span>+</span></strong><span class="wam">${escape(t.education.wam)}</span></div><span class="average">${escape(t.education.average)}</span></div></div>
      </article>
    </section>
    <section class="project-section section container" id="project" aria-label="${escape(t.project.label)}"><div class="reveal">${sectionHeading('03', t.project.label, t.project.title, t.project.intro)}</div><div class="project-list">${projects.map((project, index) => projectCard(project, index, t.project)).join('')}</div></section>
    <section class="skills-section section container" id="skills" aria-label="${escape(t.skills.label)}"><div class="reveal">${sectionHeading('04', t.skills.label, t.skills.title, t.skills.intro)}</div><div class="skills-grid">${skillGroups.map((group, index) => `<article class="skill-card reveal" style="--stagger:${index * 65}ms"><span class="skill-number">${String(index + 1).padStart(2, '0')}</span><div class="skill-body"><h3>${escape(group.title[language])}</h3>${tags(Array.isArray(group.items) ? group.items : group.items[language], 'skill-tags')}</div><div class="skill-icon">${icon(group.icon)}</div></article>`).join('')}</div></section>
    <section class="contact-section section container" id="contact" aria-labelledby="contact-title"><div class="contact-copy reveal"><div class="eyebrow"><span class="section-number">05</span>${escape(t.contact.label)}</div><h2 id="contact-title">${multiline(t.contact.title)}</h2><p>${escape(t.contact.text)}</p></div><div class="contact-links reveal">${['email', 'github', 'linkedin'].map((type) => `<a class="contact-link" ${linkAttributes(links[type], type, destination(links[type], type === 'email') ? t.contact[type] : t.contact[`${type}Aria`])}><span class="contact-icon">${icon(type)}</span><span class="contact-link-text"><span>${escape(t.contact[type])}</span><span class="contact-value${destination(links[type], type === 'email') ? '' : ' placeholder-code'}">${escape(links[type])}</span></span>${icon('arrow', 'contact-arrow')}</a>`).join('')}${Object.values(links).some((value) => /_HERE$/.test(value)) ? `<p class="contact-note">${escape(t.contact.placeholder)}</p>` : ''}</div></section>`;
  document.querySelector('#footer').innerHTML = `<div class="footer-inner container"><div><a class="footer-name" href="#home">Jerry Yang <span>·</span> <span lang="zh-CN">杨子豪</span></a><p>${escape(t.footer.study)}</p></div><span class="copyright">© ${new Date().getFullYear()} ${escape(t.footer.copyright)}</span><div class="footer-socials">${['github', 'linkedin', 'email'].map((type) => `<a class="icon-button" ${linkAttributes(links[type], type, destination(links[type], type === 'email') ? t.contact[type] : t.contact[`${type}Aria`])}>${icon(type)}</a>`).join('')}<span></span><a class="icon-button back-top" href="#home" aria-label="${escape(t.footer.top)}">↑</a></div></div>`;
}

function setMenu(open, restoreFocus = false) {
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', translations[language].nav[open ? 'close' : 'open']);
  mobileMenu.hidden = !open;
  if (restoreFocus) menuToggle.focus();
}

function updateActiveSection(id) {
  activeSection = id;
  document.querySelectorAll('.desktop-nav a, .mobile-nav a').forEach((a) => {
    const active = a.getAttribute('href') === `#${id}`;
    a.classList.toggle('active', active);
    if (active) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
  });
}

function observeSections() {
  sectionObserver?.disconnect();
  revealObserver?.disconnect();
  if (!('IntersectionObserver' in window)) return;
  sectionObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) if (entry.isIntersecting) updateActiveSection(entry.target.id);
  }, { rootMargin: '-15% 0px -60% 0px', threshold: 0 });
  navKeys.forEach((id) => sectionObserver.observe(document.getElementById(id)));
  if (!motionPreference.matches) {
    revealObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) { entry.target.classList.add('revealed'); revealObserver.unobserve(entry.target); }
    }, { threshold: 0.05 });
    document.querySelectorAll('.reveal').forEach((el) => { el.classList.add('will-reveal'); revealObserver.observe(el); });
  }
}

function render() {
  const t = translations[language];
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.title = t.meta.title;
  document.querySelector('meta[name="description"]').content = t.meta.description;
  document.querySelector('meta[property="og:title"]').content = t.meta.title;
  document.querySelector('meta[property="og:description"]').content = t.meta.social;
  document.querySelector('meta[property="og:locale"]').content = language === 'zh' ? 'zh_CN' : 'en_AU';
  document.querySelector('meta[property="og:locale:alternate"]').content = language === 'zh' ? 'en_AU' : 'zh_CN';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = el.dataset.i18n.split('.').reduce((object, key) => object?.[key], t);
    if (typeof value === 'string') el.textContent = value;
  });
  document.querySelectorAll('[data-lang]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
  document.querySelector('.language-switch').setAttribute('aria-label', t.nav.language);
  document.querySelector('.brand').setAttribute('aria-label', t.nav.brand);
  document.querySelector('.desktop-nav').setAttribute('aria-label', t.nav.main);
  mobileMenu.setAttribute('aria-label', t.nav.mobile);
  mobileMenu.innerHTML = navKeys.map((key) => `<a href="#${key}">${escape(t.nav[key])}</a>`).join('');
  document.querySelectorAll('[data-link="github"]').forEach((a) => {
    const href = destination(links.github);
    a.href = href || '#contact';
    a.setAttribute('aria-label', href ? 'GitHub' : t.contact.githubAria);
    if (href) { a.target = '_blank'; a.rel = 'noopener noreferrer'; delete a.dataset.placeholder; }
    else a.dataset.placeholder = 'github';
  });
  renderSections(t);
  setMenu(false);
  updateActiveSection(activeSection);
  observeSections();
  notice.hidden = true;
  setupSurfaceInteractions();
}

document.addEventListener('click', (event) => {
  const languageButton = event.target.closest('[data-lang]');
  if (languageButton && languageButton.dataset.lang !== language) {
    const section = document.getElementById(activeSection);
    const previousTop = section?.getBoundingClientRect().top;
    language = languageButton.dataset.lang;
    try { localStorage.setItem(storageKey, language); } catch { /* Persistence is optional when blocked by browser settings. */ }
    render();
    document.body.classList.remove("language-changing");
    requestAnimationFrame(() => document.body.classList.add("language-changing"));
    const newTop = document.getElementById(activeSection)?.getBoundingClientRect().top;
    if (previousTop != null && newTop != null) window.scrollBy({ top: newTop - previousTop, behavior: 'instant' });
  }
  if (event.target.closest('.menu-toggle')) { setMenu(mobileMenu.hidden); return; }
  const placeholder = event.target.closest('[data-placeholder]');
  if (placeholder) {
    event.preventDefault();
    const message = placeholder.dataset.placeholder === 'email' ? 'email' : 'link';
    notice.textContent = translations[language].notice[message];
    notice.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { notice.hidden = true; }, 4500);
  }
  const sectionLink = event.target.closest('a[href^="#"]:not([data-placeholder])');
  if (sectionLink) {
    const id = sectionLink.getAttribute('href').slice(1);
    if (navKeys.includes(id)) updateActiveSection(id);
    if (sectionLink.closest('.mobile-nav')) {
      setMenu(false);
      const target = document.getElementById(id);
      if (target) { target.tabIndex = -1; target.focus({ preventScroll: true }); }
    }
  }
  if (!event.target.closest('.site-header') && !mobileMenu.hidden) setMenu(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') { if (!mobileMenu.hidden) setMenu(false, true); notice.hidden = true; }
});
matchMedia('(min-width: 681px)').addEventListener('change', (event) => { if (event.matches) setMenu(false); });
window.addEventListener('storage', (event) => { if (event.key === storageKey && ['en', 'zh'].includes(event.newValue)) { language = event.newValue; render(); } });

render();

// A small SVG graph avoids a canvas render loop and stays still on mobile.
const hero = document.querySelector('.hero');
let heroVisible = true;
function updateMotion() {
  const animate = heroVisible && !document.hidden && !motionPreference.matches && matchMedia('(min-width: 681px) and (hover: hover) and (pointer: fine)').matches;
  hero.classList.toggle('is-animating', animate);
  if (!animate) { hero.style.removeProperty('--mx'); hero.style.removeProperty('--my'); clearNearbyNodes(); }
}
if ('IntersectionObserver' in window) new IntersectionObserver(([entry]) => { heroVisible = entry.isIntersecting; updateMotion(); }).observe(hero);
document.addEventListener('visibilitychange', updateMotion);
motionPreference.addEventListener('change', () => { document.querySelectorAll('.will-reveal').forEach((el) => el.classList.add('revealed')); updateMotion(); });
matchMedia('(min-width: 681px)').addEventListener('change', updateMotion);
const graphNodes = [...document.querySelectorAll('.graph-nodes circle')];
function clearNearbyNodes() { graphNodes.forEach((node) => node.classList.remove('node-near')); hero.classList.remove('node-proximity'); }
hero.addEventListener('pointermove', (event) => {
  if (!hero.classList.contains('is-animating') || event.pointerType !== 'mouse') return;
  const rect = hero.getBoundingClientRect();
  hero.style.setProperty('--mx', `${(event.clientX - rect.left - rect.width / 2) * 0.012}px`);
  hero.style.setProperty('--my', `${(event.clientY - rect.top - rect.height / 2) * 0.012}px`);
  let nearby = false;
  graphNodes.forEach((node) => {
    const box = node.getBoundingClientRect();
    const close = Math.hypot(event.clientX - box.left - box.width / 2, event.clientY - box.top - box.height / 2) < 105;
    node.classList.toggle('node-near', close); nearby ||= close;
  });
  hero.classList.toggle('node-proximity', nearby);
}, { passive: true });
hero.addEventListener('pointerleave', () => { hero.style.removeProperty('--mx'); hero.style.removeProperty('--my'); clearNearbyNodes(); });
updateMotion();
