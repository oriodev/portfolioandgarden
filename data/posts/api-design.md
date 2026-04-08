---
title: "RESTful API Design"
date: "2025-03-01"
status: "evergreen"
---

So Album Archive has a somewhat complex backend — at least by my standards — and it needs cleaning up. Before I can get started with the spring cleaning, I want to figure out what sort of standards and best principles I should be following to ensure my API is clean, organised, and efficient. I'm going to be figuring out REST APIs, collating my research, and figuring out a set of simple guidelines to follow before I begin my refactor.

REST APIs were introduced by Roy Fielding as a blueprint for building APIs. They can be built with any technology, but REST APIs are most commonly built with HTTP. They follow some fundamental guidelines, such as:

One. Everything is designed around **resources**, which in the case of [Album Archive](/#projects) are objects like 'album' or 'list' or 'user', but could be any form of data.

Two. Each resource has an identifier, like /album or /user.

Three. Communication with the API happens with a representation of the resource, which is a fancy way to say that when we send stuff to the API or we receive stuff from the API, it is sent in (usually) JSON format (or similar).

Four. They have a uniform way of accessing a resource. If it is built on HTTP then those uniform methods are going to be GET, POST, PUT, DELETE, etc. You can retrieve any resource with a GET request to the API, send any resource with POST, and it is predictable and consistent.

Five. They are stateless. Every request is an atomic action and nothing can be stored between requests.

There is a sixth point, which is that representations also include links to other things you can do with a resource. While this is technically required for a full REST API, many REST APIs in practice don't implement this.

So at this point I'm realising that the nice thing about designing an API with Nest.js is that the architecture essentially forces you to implement a REST API. My APIs are organised around resources, they are consistently accessed with HTTP verbs, and they are stateless. I'm missing point six, but since my API is only for internal use with the Album Archive system, I don't think it is essential for my purposes.

One thing I may do is go through and ensure all my resources and HTTP verbs are as clear and simple as they could be. I know there are places where there are four or five different GET requests for a resource — perhaps there are places this could be more effectively implemented.

In naming, it is good to keep resources that are collections as plural nouns, e.g., albums rather than album. This is something I am currently inconsistent about because I didn't know best practice. Now that I do, I can clean it up.

It is important to strike a balance between slowing the system with massive requests and slowing the system with too many requests. This is something I am figuring out in terms of populating resources upon return. A list, for example, might need all of its albums populated as well as its user: is it more efficient to populate, or more efficient to send multiple requests to retrieve the data when I need it on the frontend? I am inclined to argue that populating it is more efficient in this case, but it is a balance that needs finding.

**Useful resources:**

[Web API Design by Microsoft](https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design)

[RESTful API Design by Philip Hauer](https://phauer.com/2015/restful-api-design-best-practices/)
