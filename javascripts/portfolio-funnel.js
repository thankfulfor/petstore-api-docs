(function () {
  function normalize(s) {
    return (s || '').toLowerCase().trim();
  }

  function setupCaseFilter() {
    const root = document.querySelector('[data-case-filter-root]');
    if (!root) return;

    const input = root.querySelector('[data-case-search]');
    const tagButtons = Array.from(root.querySelectorAll('[data-case-tag]'));
    const cards = Array.from(root.querySelectorAll('[data-case-card]'));

    function apply() {
      const q = normalize(input ? input.value : '');
      const active = tagButtons.find((b) => b.classList.contains('is-active'));
      const tag = active ? normalize(active.getAttribute('data-case-tag')) : 'all';

      cards.forEach((card) => {
        const text = normalize(card.getAttribute('data-case-text'));
        const tags = normalize(card.getAttribute('data-case-tags'));
        const matchesText = !q || text.includes(q);
        const matchesTag = tag === 'all' || tags.includes(tag);
        const cardContainer = card.closest('li, article, .md-typeset .grid > *') || card;
        cardContainer.style.display = matchesText && matchesTag ? '' : 'none';
      });
    }

    if (input) input.addEventListener('input', apply);
    tagButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        tagButtons.forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        apply();
      });
    });

    apply();
  }

  function setupBeforeAfter() {
    document.querySelectorAll('.before-after').forEach((root) => {
      const afterImg = root.querySelector('.after-img');
      const slider = root.querySelector('.ba-slider');
      if (!afterImg || !slider) return;

      function apply() {
        const v = Number(slider.value || 50);
        afterImg.style.clipPath = `inset(0 ${100 - v}% 0 0)`;
      }

      slider.addEventListener('input', apply);
      apply();
    });
  }

  function setupDocBugGame() {
    const game = document.getElementById('docBugGame');
    if (!game) return;

    const checkBtn = document.getElementById('checkDocBug');
    const resetBtn = document.getElementById('resetDocBug');
    const result = document.getElementById('docBugResult');

    const bugHints = [
      'всегда возвращает 200 OK',
      'quantity может быть отрицательным',
      'X-Token',
      '"id": "abc", "status": 123, "complete": "yes"'
    ];

    const blocks = Array.from(game.querySelectorAll('p, pre'));
    blocks.forEach((b) => {
      const text = b.textContent || '';
      if (bugHints.some((h) => text.includes(h))) {
        b.classList.add('doc-bug-target');
        b.addEventListener('click', () => b.classList.toggle('selected'));
      }
    });

    function check() {
      const total = game.querySelectorAll('.doc-bug-target').length;
      const selected = game.querySelectorAll('.doc-bug-target.selected').length;
      if (selected === total) {
        result.textContent = `Отлично: найдено ${selected} из ${total}.`;
        result.className = 'ok';
      } else {
        result.textContent = `Пока ${selected} из ${total}. Попробуйте ещё раз.`;
        result.className = 'warn';
      }
    }

    function reset() {
      game.querySelectorAll('.doc-bug-target.selected').forEach((n) => n.classList.remove('selected'));
      result.textContent = '';
      result.className = '';
    }

    if (checkBtn) checkBtn.addEventListener('click', check);
    if (resetBtn) resetBtn.addEventListener('click', reset);
  }

  document.addEventListener('DOMContentLoaded', function () {
    setupCaseFilter();
    setupBeforeAfter();
    setupDocBugGame();
  });
})();
