// Sidebar expand/collapse and active state management
document.addEventListener('DOMContentLoaded', () => {
  // Expand/collapse brand menus
  const toggleBtns = document.querySelectorAll('[data-toggle]');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-toggle');
      const target = document.getElementById(targetId);
      const arrow = btn.querySelector('.sidebar-item__arrow img');

      if (target) {
        target.classList.toggle('sidebar-children--collapsed');
        // Rotate arrow
        if (arrow) {
          const isCollapsed = target.classList.contains('sidebar-children--collapsed');
          arrow.style.transform = isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)';
        }
      }
    });
  });

  // Active state for sidebar items
  const sidebarItems = document.querySelectorAll('.sidebar-item__container');
  sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
      // Skip if it's a toggle button
      if (item.hasAttribute('data-toggle')) return;

      // Remove selected from all
      document.querySelectorAll('.sidebar-item--selected').forEach(el => {
        el.classList.remove('sidebar-item--selected');
      });

      // Add selected to clicked item's parent
      const parentItem = item.closest('.sidebar-item');
      if (parentItem) {
        parentItem.classList.add('sidebar-item--selected');

        // Update page header title if a brand menu item is selected
        if (parentItem.classList.contains('sidebar-item--nested')) {
          const brandName = item.querySelector('.sidebar-item__label').textContent.trim();
          const pageTitle = document.querySelector('.page-header__title');
          if (pageTitle) {
            pageTitle.textContent = brandName + ' menus';
          }
        }
      }
    });
  });
});
