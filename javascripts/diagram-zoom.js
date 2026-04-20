(function () {
  function setupZoomForMermaid(svg) {
    if (!svg || svg.dataset.zoomInit === '1') return;
    svg.dataset.zoomInit = '1';

    const parent = svg.parentElement;
    if (!parent) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'diagram-zoom-wrapper';

    const viewport = document.createElement('div');
    viewport.className = 'diagram-zoom-viewport';

    const controls = document.createElement('div');
    controls.className = 'diagram-zoom-controls';
    controls.innerHTML = [
      '<button type="button" data-action="zoom-in" title="Увеличить">+</button>',
      '<button type="button" data-action="zoom-out" title="Уменьшить">-</button>',
      '<button type="button" data-action="reset" title="Сброс">100%</button>'
    ].join('');

    parent.insertBefore(wrapper, svg);
    viewport.appendChild(svg);
    wrapper.appendChild(controls);
    wrapper.appendChild(viewport);

    let scale = 1;
    let tx = 0;
    let ty = 0;
    let dragging = false;
    let startX = 0;
    let startY = 0;

    function clamp(v, min, max) {
      return Math.max(min, Math.min(max, v));
    }

    function apply() {
      svg.style.transformOrigin = '0 0';
      svg.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
    }

    function zoomAt(factor) {
      const next = clamp(scale * factor, 0.5, 3);
      scale = next;
      apply();
    }

    controls.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn) return;
      const action = btn.getAttribute('data-action');
      if (action === 'zoom-in') zoomAt(1.2);
      if (action === 'zoom-out') zoomAt(1 / 1.2);
      if (action === 'reset') {
        scale = 1;
        tx = 0;
        ty = 0;
        apply();
      }
    });

    viewport.addEventListener('wheel', (e) => {
      if (!e.ctrlKey) return;
      e.preventDefault();
      zoomAt(e.deltaY < 0 ? 1.1 : 1 / 1.1);
    }, { passive: false });

    viewport.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return;
      dragging = true;
      startX = e.clientX - tx;
      startY = e.clientY - ty;
      viewport.classList.add('is-dragging');
    });

    window.addEventListener('mousemove', (e) => {
      if (!dragging) return;
      tx = e.clientX - startX;
      ty = e.clientY - startY;
      apply();
    });

    window.addEventListener('mouseup', () => {
      dragging = false;
      viewport.classList.remove('is-dragging');
    });

    apply();
  }

  function initAll() {
    document.querySelectorAll('.mermaid svg').forEach(setupZoomForMermaid);
  }

  document.addEventListener('DOMContentLoaded', initAll);
  window.addEventListener('load', initAll);

  const observer = new MutationObserver(() => initAll());
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
