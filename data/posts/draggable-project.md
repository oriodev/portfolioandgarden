---
title: "draggable project."
date: "2025-03-01"
status: "seedling"
---

when i was picking an idea for my final year project, i had two strong contenders: album archive (goodreads for music) or my character relationship tracking app. i LOVE writing and i have a zillion books with a zillion characters with a zillion different relationships between them, and no good way of keeping track of it all. although i chose album archive for my final year project, i would really love to start chipping away at my character app too.

it needs a name, but that's always the hardest part.

for now, i'm just going to use this post to keep track of my various ideas so that when i have the time, i can start building it.

the biggest hurdle in my mind for this project is that i want the characters to be represented by images that can be drag-and-dropped anywhere on the canvas, and then connected to other characters with lines. thankfully, i think the [react-draggable](https://www.npmjs.com/package/react-draggable) npm package will do the trick for this. all i actually need to do is store the x and y coordinates in the database and it should save state whenever the user reloads.

for efficiency, i wonder if we could just save to db before leaving the page rather than after every single drag and drop.