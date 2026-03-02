// Sticky table header via JS
// (CSS position:sticky doesn't work because overflow-x:auto on the
//  table wrapper creates a new scroll context that breaks it)
document.addEventListener('DOMContentLoaded', () => {
  const pageContainer = document.querySelector('.page-container');
  const thead = document.querySelector('.data-table thead');
  const tableWrapper = document.querySelector('.data-table-wrapper');
  const filterBar = document.querySelector('.filter-bar');

  if (!pageContainer || !thead || !tableWrapper || !filterBar) return;

  function updateStickyHeader() {
    const filterBarBottom = filterBar.getBoundingClientRect().bottom;
    const wrapperRect = tableWrapper.getBoundingClientRect();
    // +1 accounts for the wrapper's top border
    const theadNaturalTop = wrapperRect.top + 1;
    const theadHeight = thead.offsetHeight;
    // How much room is left between filter bar bottom and table bottom
    const tableBottomSpace = wrapperRect.bottom - filterBarBottom - theadHeight;

    if (theadNaturalTop < filterBarBottom && tableBottomSpace > 0) {
      // Header should be sticky — translate it down to stay below filter bar
      const offset = filterBarBottom - theadNaturalTop;
      thead.style.transform = 'translateY(' + offset + 'px)';
      thead.classList.add('is-sticky');
    } else {
      // Header in normal position
      thead.style.transform = '';
      thead.classList.remove('is-sticky');
    }
  }

  pageContainer.addEventListener('scroll', updateStickyHeader, { passive: true });
  // Run once on load in case page is already scrolled
  updateStickyHeader();

  // ── Frozen-column shadow: show when table is horizontally scrolled ──
  function updateFreezeIndicator() {
    tableWrapper.classList.toggle('data-table-wrapper--scrolled', tableWrapper.scrollLeft > 0);
  }

  tableWrapper.addEventListener('scroll', updateFreezeIndicator, { passive: true });
  updateFreezeIndicator();
});
