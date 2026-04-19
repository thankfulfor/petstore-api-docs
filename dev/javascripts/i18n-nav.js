function localizePagination() {
  const map = {
    Previous: 'Предыдущая',
    Next: 'Следующая',
  };

  const selectors = [
    '.rst-footer-buttons a',
    '.rst-content .pager a',
    '.rst-versions a',
  ];

  document.querySelectorAll(selectors.join(',')).forEach((el) => {
    const text = (el.textContent || '').replace(/\s+/g, ' ').trim();
    if (!text) return;

    const hasLeftChevron = text.includes('«');
    const hasRightChevron = text.includes('»');
    const normalized = text.replace(/[«»]/g, '').trim();

    if (!map[normalized]) return;

    const translated = map[normalized];

    // Keep icon spans in footer buttons, replace only text nodes.
    let replaced = false;
    el.childNodes.forEach((node) => {
      if (node.nodeType !== Node.TEXT_NODE) return;
      const nodeText = node.nodeValue || '';
      if (/Previous|Next/.test(nodeText)) {
        node.nodeValue = nodeText.replace(/Previous|Next/g, translated);
        replaced = true;
      }
    });

    // For compact bottom bar links there are no icons, set full label.
    if (!replaced) {
      let label = translated;
      if (hasLeftChevron) label = `« ${label}`;
      if (hasRightChevron) label = `${label} »`;
      el.textContent = label;
    }
  });
}

document.addEventListener('DOMContentLoaded', localizePagination);
window.addEventListener('load', localizePagination);

// Theme scripts can re-render nav/footer after load, so relocalize on changes.
const observer = new MutationObserver(localizePagination);
observer.observe(document.documentElement, { childList: true, subtree: true });
