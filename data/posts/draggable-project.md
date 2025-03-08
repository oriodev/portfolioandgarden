---
title: "character.app."
date: "2025-03-01"
status: "seedling"
---

current demo is [here](https://characterapp-psi.vercel.app/).

**march 3**

when i was picking an idea for my final year project, i had two strong contenders: album archive (goodreads for music) or my character relationship tracking app. i LOVE writing and i have a zillion books with a zillion characters with a zillion different relationships between them, and no good way of keeping track of it all. although i chose album archive for my final year project, i would really love to start chipping away at my character app too.

it needs a name, but that's always the hardest part.

for now, i'm just going to use this post to keep track of my various ideas so that when i have the time, i can start building it.

the biggest hurdle in my mind for this project is that i want the characters to be represented by images that can be drag-and-dropped anywhere on the canvas, and then connected to other characters with lines. thankfully, i think the [react-draggable](https://www.npmjs.com/package/react-draggable) npm package will do the trick for this. all i actually need to do is store the x and y coordinates in the database and it should save state whenever the user reloads.

for efficiency, i wonder if we could just save to db before leaving the page rather than after every single drag and drop. or better, i could **debounce** by setting a userTimer() for a set period of time after the drag event has ended and THEN save. possibly a good middle ground.

as for lines, i seem to have two options: draw the lines with svgs and update the coordinates as the items move OR draw the lines with HTML5 canvas.

the first thing i would want to get figured out is the UI interface. once that's done, the rest should be fairly smooth sailing. i just need a database to keep track of the character details, pages to create, view, edit, delete characters, and like a sidebar and some UI stuff. there is authentication as well but that can come later. to start with, i can just use local storage, and move up to full auth later on if i need to. use supabase for db because it has auth and storage built in. also could use posthog later down the line to track user events/useage on the site.

**MVP**
[x] set up basic front end (march 8).
[x] deploy to vercel (march 8).
[x] set up jest (march 8).
[x] link to supabase (march 8).
[x] make draggable character canvas (march 8).
[] make basic character CRUD.
[] make lines between the characters.
[] set up cicd pipeline.
[] set up cypress.