# COSC 219 Lab 3 — Responsive Personal Portfolio

This project is a four-page responsive personal portfolio about my interests and projects.

## Pages

- Home
- About
- Projects
- Contact

## Responsive Layout

I used a mobile-first approach for the website. The base CSS is designed for smaller screens, and I used `min-width` media queries to change the layout when more space is available.

My first breakpoint is `38rem`. I chose this point because below this size there is not enough space for the navigation and multiple columns to fit comfortably. At this breakpoint, the navigation changes to a row, the project cards change to two columns, and the About page changes to a two-column layout.

My second breakpoint is `58rem`. I chose this point because there is enough space for three project cards to fit beside each other without becoming too narrow. At this breakpoint, the project section changes to three columns.

## Flexbox and Grid

I used Flexbox for the navigation because the navigation items are arranged along one direction. On smaller screens, the navigation stacks vertically, and on wider screens it changes to a row.

I used CSS Grid for the project cards because the cards need to be arranged in rows and columns. The cards change from one column to two columns and then three columns as the screen gets wider.

I also used Grid on the About page to create a main section and a smaller sidebar. On narrow screens, they stack into one column.

## Testing

I tested the website at different screen sizes, including 320px, 768px, and 1280px. There is no horizontal scrolling.

The Lab 3 self-checker reports 25 passed and 0 to fix.

I also checked the website using keyboard navigation and confirmed that the focus is visible.

The HTML pages and CSS were validated successfully.

## AI Use

I used AI for guidance and explanations while completing the lab. I reviewed and understood the code before using it in my project.