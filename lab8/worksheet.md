# COSC 219 – Lab 08 Debugging Worksheet

## Fault 1 – Heading hierarchy

**Symptom:** I noticed that some of the headings were not in the correct order. The checker also showed that some heading levels were being skipped.

**How I found it:** I ran the HTML checker, and it pointed out that the heading structure was incorrect. I then went through the headings in my HTML file to see what needed changing.

**Cause:** The problem was that the heading levels were not following a proper order. Headings help organize a webpage and make it easier for people, especially those using screen readers, to understand the different sections.

**Fix:** I changed the heading levels so they follow the correct order, starting with one h1 and then using h2 for the main sections.

**Lecture:** Lecture 2.

---

## Fault 2 – Missing form labels

**Symptom:** The checker showed that some of the form controls were missing labels.

**How I found it:** I used the checker and then looked through my form in index.html to find which controls did not have labels.

**Cause:** A form needs proper labels so users know what information each field is asking for. I learned that using only placeholder text is not enough because it disappears when someone starts typing.

**Fix:** I added labels to the form controls and connected them to the correct inputs using the for and id attributes.

**Lecture:** Lecture 2.

---

## Fault 3 – Box sizing

**Symptom:** When I made the browser window smaller, the search box extended beyond the page instead of fitting properly.

**How I found it:** I made the browser window approximately 400px wide and noticed that the search box was going outside its container.

**Cause:** The issue was related to the CSS box model. By default, CSS uses content-box, which means padding and borders are added to the width of an element. This made the search box wider than I expected.

**Fix:** I added box-sizing: border-box so the padding and borders are included in the element's total width.

**Lecture:** CSS box model lecture.

---

## Fault 4 – Keyboard focus

**Symptom:** When I used the Tab key to move between the form controls, I could not see which field or button was selected.

**How I found it:** I tested the form using my keyboard instead of my mouse. I noticed that there was no visible highlight when moving between the controls.

**Cause:** The CSS had outline: none, which removed the default focus indicator. This makes the website harder to use for people who navigate using a keyboard.

**Fix:** I changed the focus styling to show a visible outline around the selected form control.

**Lecture:** CSS selectors and accessibility lecture.

---

## Fault 5 – Filtering

**Symptom:** The rating filter was using the wrong type of equality comparison.

**How I found it:** I looked through the matches function in app.js and noticed that it was using == instead of ===.

**Cause:** I learned that == can automatically convert values into different types before comparing them. This can sometimes give unexpected results. Using === makes JavaScript compare the values without automatically changing their types.

**Fix:** I replaced the loose equality comparisons with strict equality comparisons.

**Lecture:** JavaScript operators and data types lecture.

---

## Fault 6 – Sorting

**Symptom:** The trails were not appearing in the correct order from the shortest distance to the longest distance.

**How I found it:** I searched for trails and looked at how the results were displayed. I then checked the sorting function in app.js and noticed that it was using sort() without a comparison function.

**Cause:** JavaScript does not automatically know that I want to sort the trails using their distance. Without a comparator, sort() compares values as strings instead of comparing the numerical km values. I also learned that sort() changes the original array, which is why I needed to make a copy first.

**Fix:** I used a comparison function to sort the trails by distance and used the spread operator to create a copy of the array before sorting.

**Lecture:** JavaScript arrays and sorting lecture.

---

## Fault 7 – Unsafe use of innerHTML

**Symptom:** I noticed that the trail names were being added to the page using innerHTML.

**How I found it:** I opened app.js and looked inside the render function. I found that the trail information was being placed inside an HTML string.

**Cause:** The problem with innerHTML is that it treats the content as HTML instead of ordinary text. If someone inserts harmful code into a trail name, the browser could interpret and run it. This is known as Cross-Site Scripting (XSS).

**Fix:** I used createElement() to create the HTML elements and textContent to display the trail names and distances safely.

**Lecture:** JavaScript DOM manipulation and web security lecture.

---

## Fault 8 – Form submission

**Symptom:** Whenever I pressed the Apply button, the page refreshed instead of just updating the trail results.

**How I found it:** I tested the search and rating filters and noticed that the page kept reloading after pressing Apply. I then checked the submit event listener in app.js.

**Cause:** I learned that HTML forms have a default behaviour of submitting and potentially reloading the page. The JavaScript code was not stopping this default behaviour.

**Fix:** I added event.preventDefault() inside the submit event listener so the form could update the results without refreshing the page.

**Lecture:** JavaScript events and HTML forms lecture.

---

## One more thing

**Which fault took you longest, and why?**

The sorting fault probably took me the longest because I initially did not understand why the trails were not appearing in the correct order. I had to look more closely at how the sort() method works and learn that I needed to compare the distances numerically. I also had to make sure that sorting would not change the original array.

**Which one would you never have found without the checker?**

I probably would not have noticed the heading hierarchy and missing form labels just by looking at the website. Everything could still look normal on the screen, but the checker helped me see that there were accessibility issues in my HTML.