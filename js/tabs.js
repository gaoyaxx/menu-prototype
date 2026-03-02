// Pill tab switching
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.pill-tab');

  // Map tab names to singular form for the "Add" button
  const entityNames = {
    'menus': 'menu',
    'menu-items': 'menu item',
    'modifier-items': 'modifier item',
    'categories': 'category',
    'modifier-groups': 'modifier group'
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove selected from all tabs
      tabs.forEach(t => {
        t.classList.remove('pill-tab--selected');
        t.classList.add('pill-tab--default');
      });

      // Set clicked tab as selected
      tab.classList.remove('pill-tab--default');
      tab.classList.add('pill-tab--selected');

      // Update section header and add button
      const tabKey = tab.getAttribute('data-tab');
      const tabLabel = tab.textContent.trim();
      const sectionTitle = document.querySelector('.section-header__title');
      const addBtn = document.querySelector('.section-header__actions .btn span:last-child');

      if (sectionTitle) {
        sectionTitle.textContent = tabLabel;
      }
      if (addBtn && entityNames[tabKey]) {
        addBtn.textContent = 'Add ' + entityNames[tabKey];
      }
    });
  });

  // Set initial state from the currently selected tab
  const activeTab = document.querySelector('.pill-tab--selected');
  if (activeTab) {
    const tabKey = activeTab.getAttribute('data-tab');
    const tabLabel = activeTab.textContent.trim();
    const sectionTitle = document.querySelector('.section-header__title');
    const addBtn = document.querySelector('.section-header__actions .btn span:last-child');
    if (sectionTitle) sectionTitle.textContent = tabLabel;
    if (addBtn && entityNames[tabKey]) addBtn.textContent = 'Add ' + entityNames[tabKey];
  }
});
