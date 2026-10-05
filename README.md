# COSC 219 Lab 3 — Responsive Personal Portfolio

A four-page responsive personal portfolio about my interests and projects.

## Pages

- Home (`index.html`)
- About (`about.html`)
- Projects (`projects.html`)
- Contact (`contact.html`)

## How to view

Open `index.html` with Live Server in VS Code. Use the navigation links to visit each page.

## Responsive Layout

The website was designed using a mobile-first approach. The base CSS is designed for narrow screens, and `min-width` media queries add more complex layouts when more space is available.

### Breakpoints

- `38rem` — At smaller widths, the navigation and content need more space to remain readable. At this breakpoint, the navigation changes to a horizontal layout, the project cards change to two columns, and the About page changes to a two-column layout.
- `58rem` — At this width, there is enough space for the project cards to display in three columns without becoming too narrow.

## Flexbox and Grid

I used Flexbox for the navigation because the navigation links are arranged along one main axis. On narrow screens the navigation stacks vertically, and on wider screens it changes to a horizontal row.

I used CSS Grid for the project cards because the cards need to be arranged in rows and columns. The cards display in one column on narrow screens, two columns at the first breakpoint, and three columns at the larger breakpoint.

I also used CSS Grid for the About page layout. On narrow screens the content is displayed in one column. On wider screens it changes to a main content column and a narrower sidebar.

## Responsive Images

Images use `max-width: 100%` and `height: auto` so they stay inside their containers and resize with the page.

## AI Use

I used AI assistance to help understand the lab requirements and to help with the responsive CSS structure, including Flexbox, Grid, and media queries. I reviewed and applied the code to my project and tested the website using the provided self-checker.

## Testing

- Tested at 320px, 768px, and 1280px
- Checked for horizontal overflow
- Checked navigation readability
- Checked responsive project cards
- Checked the responsive About page layout
- Tested keyboard focus and navigation
- Used the provided Lab 3 self-checker