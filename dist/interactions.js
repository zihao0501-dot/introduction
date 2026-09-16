// Event-driven micro-interactions: no continuous animation loop or touch work.
const cursor = matchMedia('(hover: hover) and (pointer: fine)');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const enabled = () => cursor.matches && !reduced.matches;

export function setupSurfaceInteractions() {
  document.querySelectorAll('.project-preview, .education-card').forEach((surface) => {
    if (surface.dataset.interactive) return;
    surface.dataset.interactive = 'true';
    const reset = () => ['--px', '--py', '--rx', '--ry'].forEach((key) => surface.style.removeProperty(key));
    surface.addEventListener('pointermove', (event) => {
      if (!enabled() || event.pointerType !== 'mouse') return;
      const box = surface.getBoundingClientRect();
      const x = (event.clientX - box.left) / box.width;
      const y = (event.clientY - box.top) / box.height;
      surface.style.setProperty('--px', `${x * 100}%`);
      surface.style.setProperty('--py', `${y * 100}%`);
      if (surface.classList.contains('project-preview')) {
        surface.style.setProperty('--rx', `${(0.5 - y) * 3}deg`);
        surface.style.setProperty('--ry', `${(x - 0.5) * 3}deg`);
      }
    }, { passive: true });
    surface.addEventListener('pointerleave', reset);
    surface.addEventListener('blur', reset);
  });
  document.querySelectorAll('.button').forEach((button) => {
    if (button.dataset.interactive) return;
    button.dataset.interactive = 'true';
    const reset = () => { button.style.removeProperty('--bx'); button.style.removeProperty('--by'); };
    button.addEventListener('pointermove', (event) => {
      if (!enabled() || event.pointerType !== 'mouse') return;
      const box = button.getBoundingClientRect();
      button.style.setProperty('--bx', `${(event.clientX - box.left - box.width / 2) * 0.04}px`);
      button.style.setProperty('--by', `${(event.clientY - box.top - box.height / 2) * 0.06}px`);
    }, { passive: true });
    button.addEventListener('pointerleave', reset);
    button.addEventListener('blur', reset);
  });
}
