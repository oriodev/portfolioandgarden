---
title: "all the testing."
date: "2025-03-03"
status: "seedling"
---

feature development is done on album archive and that means that the only really big chunk of work i have left to do before i can write up my final report is testing.

now yes, i should have started with testing rather than ending with it. i actually did, in a manner of speaking, but it sort of got lost along the way, and i never even started on testing for the frontend, and now here we are. so i do have a decent suite of jest tests for my api, and i did follow some test driven development principles at the beginning of developing that api, but it fell apart pretty quickly when the need for speed overtook my desire to do things properly. not my proudest moment. when i start building my [character app]('/digital-garden/draggable-project) project, i will do things differently.

however, we are where we are, so i need to get my testing suite done now so that i can accurately assess the strengths and weaknesses of my project for the elusive evaluation section of my report.

my priorities are as such:

1. set up a simple CI pipeline with github actions so that the tests are run before i merge. obviously this would have been more helpful before, but it will still be useful as i wrap up final bugs and so i can see conclusively what is working and what isn't.

2. fix all the unit tests that broke when i refactored the backend last week and didn't stop to fix.

3. write the rest of my backend unit tests for the new sections of the api (like messages, rooms, notifications).

4. set up e2e tests with cypress on the front end.

5. write all the e2e tests my heart desires, and by that i mean as many as i can get done before i have other assignments to focus on.

**CI pipeline.**

starting with the easiest bit first. a simple CI pipeline with github actions is a five minute job. i simply set up and pushed a ci.yml file with a very simple workflow, that sets up the workspace and then runs the front and back end testing suites. upon pushing, this immediately fails for me because of the aforementioned unit tests that i didn't update.

**set up e2e tests.**

i know i said this was fourth on my list, but i just want to ensure it all runs properly. i had some versioning issues with jest on the frontend and i want to know what i'm getting myself into when i circle back to e2e tests.

so i installed cypress on my next.js frontend and ran it with

```
npx cypress open
```

doing so gets it all set up and opens up a very nice UI. i have used this before during my internship when i was helping set up up cypress e2e tests so i know my way about. i have added a command to my CI pipeline to ensure that the app is running before it attempts to run any e2e tests.

with this basic test for my home page, i have cypress up and working.

```js
import { baseUrl } from "../support/e2e"

describe('home', () => {
  it('finds home page', () => {
    cy.visit(baseUrl)
  })

  // find log in and sign up buttons.
  it('find login and signup buttons', () => {
    cy.visit(baseUrl)

    cy.contains('LOG IN').should('be.visible');
    cy.contains('SIGN UP').should('be.visible');
  })

})
```

however, i do see getting past authentication as being a decent next hurdle.

UPDATE: getting past authentication was a bit of a hurdle, but i figured it out, and i'm going to share what i learnt here.

first off. cypress was logging in correctly but not re-routing to the next page. i found this to be caused by the middleware re-routing because it was not finding a session. it seems that cypress runs tests on http not https and because i had set secure: true, the session was not being stored on cypress. setting this to false temporarily fixed the issue.

```js
    cookieStore.set("session", token, {
      httpOnly: true,
      secure: false, // THIS SHOULD BE TRUE BUT FOR E2E PURPOSES IT IS FALSE FOR NOW.
      expires: expiresAt,
      sameSite: "lax",
      path: "/",
    });
```

the second issue was with ensuring the session persisted across all specs so that we do not need to re-authenticate for each test or even with each spec. this issue was resolved by following this video by [commitquality](https://www.youtube.com/watch?v=hOJ50rINCkA).

by creating the following command, and running it in a beforeEach on the first spec, we create a session that persists across all specs.

```js
Cypress.Commands.add('login', (email, password) => {

  cy.session([email, password], () => {
    cy.visit(`/login`);
  
    cy.get('input[name="email"]').clear().type(email);
    cy.get('input[name="password"]').clear().type(password);
    
    cy.get('button[type="submit"]').click();
  
    cy.url().should('include', '/central');
  }, 
  {
    cacheAcrossSpecs: true
  })

})
```