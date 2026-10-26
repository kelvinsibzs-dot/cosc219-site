# COSC 219 Lab 5 — Arrays, Loops and Iterators

## Report Summary

The report gives an overview of the hiking trails. It shows how many trails there are, which ones are open or closed, the total distance of the open trails, the longest open trail, and how many trails fall under each difficulty level.

## Coding Trap

One thing I had to be careful with was sorting the trails by distance without changing the original array. I used `slice()` before `sort()` so that the trails would stay in their original order.

## AI Use Declaration

I used ChatGPT to help me understand the instructions, work through the code, and fix errors. I also ran the provided self-check tests to make sure my functions were working correctly.
## Testing

All 35 self-check tests passed, and the original trail data remained in its original order.

## What I Learned

I practised using map(), filter(), find(), some(), every(), and reduce() to work with arrays. I also learned to copy an array before sorting so the original data stays unchanged.