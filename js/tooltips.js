// Cell hover tooltips for category, modifier groups, locations, station profiles, channels
document.addEventListener('DOMContentLoaded', () => {

  // ── Data for each menu item ──
  // Expose to window so add-item.js can look up modifier groups
  const itemData = window._tooltipItemData = {
    'Coke Can': {
      category: ['Drinks'],
      modifiers: [],
      location: "PT's Fried Chicken and Fish - dallas o",
      stations: ['Drink Station'],
      channels: ['Doordash', 'UberEats']
    },
    'Sprite Can': {
      category: ['Drinks'],
      modifiers: [],
      location: "PT's Fried Chicken and Fish - dallas o",
      stations: ['Drink Station'],
      channels: ['Doordash', 'Grubhub']
    },
    'Kool-Aid': {
      category: ['Drinks'],
      modifiers: [],
      location: "PT's Fried Chicken and Fish - dallas o",
      stations: ['Drink Station'],
      channels: ['UberEats', 'Otter POS']
    },
    'Cakes': {
      category: ['Desserts'],
      modifiers: ['Choice of Cake'],
      location: "PT's Fried Chicken and Fish - dallas o",
      stations: ['Fried Station'],
      channels: ['Doordash', 'UberEats', 'Grubhub']
    },
    'Salsa': {
      category: ['Sides'],
      modifiers: [],
      location: "PT's Fried Chicken and Fish - dallas o",
      stations: ['Grill Station'],
      channels: ['Doordash', 'Otter POS']
    },
    'Toast (Two)': {
      category: ['Sides'],
      modifiers: [],
      location: "PT's Fried Chicken and Fish - dallas o",
      stations: ['Grill Station'],
      channels: ['UberEats', 'Otter Direct Orders']
    },
    'Hash Brown': {
      category: ['Sides'],
      modifiers: [],
      location: "PT's Fried Chicken and Fish - dallas o",
      stations: ['Fried Station'],
      channels: ['Doordash', 'UberEats', 'Otter POS']
    },
    'Bacon (Two)': {
      category: ['Sides'],
      modifiers: [],
      location: "PT's Fried Chicken and Fish - dallas o",
      stations: ['Grill Station'],
      channels: ['Grubhub', 'Otter POS']
    },
    'Sausage': {
      category: ['Sides'],
      modifiers: [],
      location: "PT's Fried Chicken and Fish - dallas o",
      stations: ['Grill Station'],
      channels: ['Doordash', 'UberEats']
    },
    'Pancake': {
      category: ['Sides'],
      modifiers: [],
      location: "PT's Fried Chicken and Fish - dallas o",
      stations: ['Grill Station'],
      channels: ['Doordash', 'UberEats', 'Grubhub']
    },
    'Waffle': {
      category: ['Sides'],
      modifiers: [],
      location: "PT's Fried Chicken and Fish - dallas o",
      stations: ['Grill Station'],
      channels: ['UberEats', 'Grubhub', 'Otter POS']
    },
    'French Toast': {
      category: ['Sides'],
      modifiers: [],
      location: "PT's Fried Chicken and Fish - dallas o",
      stations: ['Grill Station'],
      channels: ['Doordash', 'Otter Direct Orders']
    },
    'Waffle Breakfast Plate': {
      category: ['Breakfast plate'],
      modifiers: ['Egg Style', 'Plate Add Ons'],
      location: "PT's Fried Chicken and Fish - dallas o",
      stations: ['Grill Station', 'Fried Station'],
      channels: ['Doordash', 'UberEats', 'Grubhub', 'Otter POS']
    },
    'Chicken and Waffles Plate': {
      category: ['Breakfast plate'],
      modifiers: ['Egg Style', 'Plate Add Ons'],
      location: "PT's Fried Chicken and Fish - dallas o",
      stations: ['Grill Station', 'Fried Station'],
      channels: ['Doordash', 'UberEats', 'Otter Direct Orders']
    },
    'Pancake Breakfast Plate': {
      category: ['Breakfast plate'],
      modifiers: ['Egg Style', 'Plate Add Ons'],
      location: "PT's Fried Chicken and Fish - dallas o",
      stations: ['Grill Station', 'Fried Station'],
      channels: ['UberEats', 'Grubhub', 'Otter POS']
    },
    'Big Breakfast Plate': {
      category: ['Breakfast plate'],
      modifiers: ['Egg Style', 'Plate Add Ons'],
      location: "PT's Fried Chicken and Fish - dallas o",
      stations: ['Grill Station', 'Fried Station'],
      channels: ['Doordash', 'UberEats', 'Grubhub', 'Otter POS', 'Otter Direct Orders']
    },
    'French Toast Plate': {
      category: ['Breakfast plate'],
      modifiers: ['Egg Style', 'Plate Add Ons'],
      location: "PT's Fried Chicken and Fish - dallas o",
      stations: ['Grill Station', 'Fried Station'],
      channels: ['Doordash', 'Grubhub']
    },
    'Eggy Taco': {
      category: ['Breakfast tacos'],
      modifiers: ['Choice of American Cheese', 'Choice of Add Ons'],
      location: "PT's Fried Chicken and Fish - dallas o",
      stations: ['Grill Station'],
      channels: ['Doordash', 'UberEats', 'Otter POS']
    },
    'Hammy Eggy Taco': {
      category: ['Breakfast tacos'],
      modifiers: ['Choice of American Cheese', 'Choice of Add Ons'],
      location: "PT's Fried Chicken and Fish - dallas o",
      stations: ['Grill Station'],
      channels: ['Doordash', 'Grubhub', 'Otter Direct Orders']
    },
    'Porky Eggy Taco': {
      category: ['Breakfast tacos'],
      modifiers: ['Choice of American Cheese', 'Choice of Add Ons'],
      location: "PT's Fried Chicken and Fish - dallas o",
      stations: ['Grill Station'],
      channels: ['UberEats', 'Grubhub']
    },
    'Eggy Sausage Taco': {
      category: ['Breakfast tacos'],
      modifiers: ['Choice of American Cheese', 'Choice of Add Ons'],
      location: "PT's Fried Chicken and Fish - dallas o",
      stations: ['Grill Station'],
      channels: ['Doordash', 'UberEats', 'Otter POS']
    },
    'Veggie Eggy Taco': {
      category: ['Breakfast tacos'],
      modifiers: ['Choice of American Cheese', 'Choice of Add Ons'],
      location: "PT's Fried Chicken and Fish - dallas o",
      stations: ['Grill Station'],
      channels: ['Grubhub', 'Otter Direct Orders']
    },
    'Biggy Eggy Taco': {
      category: ['Breakfast tacos'],
      modifiers: ['Choice of American Cheese', 'Choice of Add Ons'],
      location: "PT's Fried Chicken and Fish - dallas o",
      stations: ['Grill Station'],
      channels: ['Doordash', 'UberEats', 'Grubhub']
    }
  };

  // ── Column indices ──
  const COL_USED_IN = 5;      // category
  const COL_CONTAINS = 6;     // modifier groups
  const COL_LOCATIONS = 7;
  const COL_STATIONS = 8;     // station profiles
  const COL_CHANNELS = 9;

  // ── Create shared tooltip overlay ──
  const tooltip = document.createElement('div');
  tooltip.className = 'cell-tooltip-overlay';
  tooltip.innerHTML = '<div class="cell-tooltip-overlay__arrow"></div><ul class="cell-tooltip-overlay__list"></ul>';
  document.body.appendChild(tooltip);

  const tooltipArrow = tooltip.querySelector('.cell-tooltip-overlay__arrow');
  const tooltipList = tooltip.querySelector('.cell-tooltip-overlay__list');

  // ── Update each row ──
  const tbody = document.querySelector('.data-table tbody');
  if (!tbody) return;

  tbody.querySelectorAll('tr').forEach(row => {
    const nameEl = row.querySelector('.cell-name-text');
    if (!nameEl) return;
    const name = nameEl.textContent.trim();
    const data = itemData[name];
    if (!data) return;

    const cells = row.querySelectorAll('td');

    // Used in (categories)
    makeCellHoverable(cells[COL_USED_IN], data.category.length, 'category', 'categories', data.category);

    // Contains (modifier groups)
    makeCellHoverable(cells[COL_CONTAINS], data.modifiers.length, 'modifier group', 'modifier groups', data.modifiers);

    // Locations
    makeCellHoverable(cells[COL_LOCATIONS], 1, 'location', 'locations', [data.location]);

    // Station profiles
    makeCellHoverable(cells[COL_STATIONS], data.stations.length, 'station profile', 'station profiles', data.stations);

    // Channels
    makeCellHoverable(cells[COL_CHANNELS], data.channels.length, 'channel', 'channels', data.channels);
  });

  // ── Helper: wrap cell content and make hoverable ──
  function makeCellHoverable(cell, count, singular, plural, items) {
    const label = count === 1 ? count + ' ' + singular : count + ' ' + plural;

    // Clear existing content
    cell.textContent = '';

    if (items.length === 0) {
      cell.textContent = label;
      return;
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'cell-hoverable';
    wrapper.dataset.tooltipItems = JSON.stringify(items);

    const text = document.createElement('span');
    text.className = 'cell-hoverable__text';
    text.textContent = label;
    wrapper.appendChild(text);

    cell.appendChild(wrapper);
  }

  // ── Tooltip show/hide on hover ──
  let activeTarget = null;

  document.addEventListener('mouseover', (e) => {
    const hoverable = e.target.closest('.cell-hoverable');
    if (!hoverable || hoverable === activeTarget) return;

    activeTarget = hoverable;
    const items = JSON.parse(hoverable.dataset.tooltipItems);

    // Populate list
    tooltipList.innerHTML = '';
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      tooltipList.appendChild(li);
    });

    // Position tooltip below the cell
    const rect = hoverable.getBoundingClientRect();
    const tooltipWidth = tooltip.offsetWidth || 200;

    tooltip.classList.add('cell-tooltip-overlay--visible');

    // Measure actual width after showing
    const actualWidth = tooltip.offsetWidth;

    // Position below the hovered element, left-aligned
    let left = rect.left;
    const top = rect.bottom + 8;

    // Keep tooltip within viewport
    if (left + actualWidth > window.innerWidth - 16) {
      left = window.innerWidth - actualWidth - 16;
    }
    if (left < 16) left = 16;

    tooltip.style.top = top + 'px';
    tooltip.style.left = left + 'px';

    // Position arrow to point at center of hovered element
    const arrowLeft = Math.max(12, Math.min(rect.left + rect.width / 2 - left - 5, actualWidth - 22));
    tooltipArrow.style.left = arrowLeft + 'px';
  });

  document.addEventListener('mouseout', (e) => {
    const hoverable = e.target.closest('.cell-hoverable');
    if (!hoverable) return;

    // Check if we're moving to a child of the same hoverable
    const related = e.relatedTarget;
    if (related && hoverable.contains(related)) return;

    activeTarget = null;
    tooltip.classList.remove('cell-tooltip-overlay--visible');
  });
});
