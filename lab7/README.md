# COSC 219 – Lab 7: Trail Tracker

## About the Project

For this lab, I created a simple Trail Tracker application using HTML, CSS and JavaScript. The application allows users to keep track of hiking trails by entering the trail name and its distance in kilometres.

Users can add new trails, close or reopen trails, delete individual trails, and clear the entire list when needed.

## Features

- Add a trail by entering its name and distance.
- Check that the trail name and distance are valid before adding it.
- Close and reopen trails.
- Delete individual trails.
- View the number of trails, how many are still open, and the total distance.
- Save trail information using localStorage so it remains after refreshing the page.
- Clear all saved trails.

## Project Files

- **index.html** – Contains the main page and form.
- **style.css** – Controls the layout, colours and appearance.
- **trails.js** – Contains the functions for creating, validating and managing trails.
- **render.js** – Creates the trail elements and displays them on the page.
- **storage.js** – Handles saving, loading and clearing trail information.
- **app.js** – Connects the different JavaScript files and handles user interactions.
- **check.html** – Opens the self-check page.
- **check.js** – Runs the self-check tests.

## How to Run the Application

1. Open the project folder in Visual Studio Code.
2. Open `index.html` using Live Server.
3. Enter a trail name and distance.
4. Click **Add trail** to add it to the list.

## What I Learned

While working on this lab, I practised using JavaScript modules, working with arrays and objects, handling DOM events, creating and updating HTML elements, and using localStorage to save information in the browser.