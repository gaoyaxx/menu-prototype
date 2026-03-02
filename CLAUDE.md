# Menu Entity Prototype

## Project Overview
Interactive HTML/CSS/JS prototype for Otter platform's menu management feature. Demo/review purpose only — focus on visual fidelity and interactive feel.

## Tech Stack
- Pure HTML/CSS/JS (no frameworks)
- Lucide Icons via CDN (`https://unpkg.com/lucide@latest/dist/umd/lucide.min.js`)
- Preview server: python3 http.server on port 8080 (launch.json name: "menu-prototype")
- Figma source: file `JAAm5dRifgpEnOMohZKErk`, node `1493:13429`

## Design Tokens
- Primary: #1C69E8, Orange: #FD8947, Negative/Red: #DA252F
- Font: Inter (body), Inter Display (headings)
- Spacing: 4, 8, 12, 16, 20, 24, 32px
- Border radius: 4px (small), 6px (medium), 8px (large), 900px (pill)
- Layout: nav 64px, sidebar 226px, main content area flex:1
- Viewport: 1442x900px

## File Structure
- `index.html` — Main page (currently showing Menu Items entity)
- `css/tokens.css` — Design tokens as CSS custom properties
- `css/reset.css` — Minimal reset + Lucide icon styling
- `css/layout.css` — 3-zone layout (nav + sidebar + main)
- `css/components.css` — All UI components (buttons, tabs, table, filters, column toggle, row actions, availability badges)
- `js/sidebar.js` — Sidebar expand/collapse + brand selection → updates page header title
- `js/tabs.js` — Pill tab switching + updates section header & "Add entity" button text
- `js/table.js` — Select-all checkbox sync
- `js/filters.js` — Filter button toggle
- `js/columns.js` — Column visibility toggle dropdown
- `js/row-actions.js` — Three-dots action menu (fixed positioning to avoid table overflow clipping)
- `assets/top nav.png` — 3x retina nav bar image (4326x192)
- `assets/menu icon.png` — Menu items banner icon

## Current State
- Entity page template is complete with all interactive behaviors
- Currently on **Menu Items** page (tab: menu-items selected)
- Sidebar brands: Breakfast Beauties (selected), PT's Brekkie Time, PT's Fried Chicken & Fish, PT's Premium Burgers & Sandwiches, Saladbox
- Table columns: Display name, Internal name, Item SKU, Price, Used in, Contains, Locations, Station profiles, Channels, Availability, Actions (three-dots)
- Row action menu: "Duplicate menu item" + "Delete menu item"
- Availability statuses: `.availability--available` (green #1B873F), `.availability--partial` (amber #946800), `.availability--unavailable` (red)
- Filters: All Filters, Locations, Station profiles, Channels
- Banner: menu icon.png + description text + Learn more button

## Pending Work
- **Fill table with real data** from user's Figma screenshots (Display name, Price, Modifier group count from screenshots; Internal name = Display name; SKU = simplified Display name; 90% rows Available)
- Build remaining entity pages: Menus, Categories, Modifier items, Modifier groups

## Key Patterns
- Template sections marked with `<!-- TEMPLATE: -->` HTML comments
- Tab switching dynamically updates: section header title, "Add [entity]" button text
- Brand sidebar click updates page header to "[brand name] menus"
- Table supports horizontal scroll (overflow-x: auto on wrapper, min-width on columns)
- Row action menus use `position: fixed` + JS-calculated coords to avoid table overflow clipping
- Column toggle dropdown populates from table headers automatically via JS
- Cache-busting: sidebar.js loaded with `?v=2`
