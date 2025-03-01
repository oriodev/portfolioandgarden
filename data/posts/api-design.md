---
title: "restful api design."
date: "2025-03-01"
status: "seedling"
---

so album archive has a somewhat complex backend - at least by my meager standards - and it needs cleaning up. before i can get started with the spring cleaning, i want to figure out what sort of standards and best principles i should be following to ensure my api is clean, organised, and efficient. i'm going to be figuring out REST apis, collecting my research, and figuring out a set of simple guidelines to follow before i begin my refactor.

REST apis were introduced by [roy fielding](https://ics.uci.edu/~fielding/pubs/dissertation/fielding_dissertation.pdf) as a blueprint for building apis. they can be built with any technology, but REST apis are most commonly built with HTTP. they follow some fundamental guidelines, such as:

one. everything is designed around **resources**, which in the case of [album archive](/#projects) are objects like 'album' or 'list' or 'user', but could be any form of data.

two. each resource has an identifier, like /album or /user.

three. communication with the api happens with a representation of the resource, which is a fancy way to say that when we send stuff to the api or we receive stuff from the api, it is sent in (usually) json format (or similar).

four. they have a uniform way of accessing a resource. if it is built on HTTP then those uniform methods are going to be GET, POST, PUT, DELETE, etc. you can retrieve any resource with a GET request to the api, send any resource with POST, and it is predictable and consistent.

five. they are stateless. every request is an atomic action and nothing can be stored between requests.

there is a sixth point, which is that representations also include links to other things you can do with a resource. while this is technically required for a full REST api, many REST apis in practice don't implement this.

so at this point i'm realising that the nice thing about designing an api with nest.js is that the architecture essentially forces you to implement a REST api. my apis are organised around resources, they are consistently accessed with HTTP verbs, and they are stateless. i'm missing point six, but since my api is only for internal use with the album archive system, i don't think it is essential for my purposes.

one thing i may do is go through and ensure all my resources and HTTP verbs are as clear and simple as they could be. i know there are places where there are four or five different GET requests for a resource - perhaps there are places this could be more effectively implemented.

in naming, it is good to keep resources that are collections as plural nouns, eg. albums rather than album. this is something i am currently inconsistent about because i didn't know best practice. now that i do, i can clean it up.

it is important to strike a balance between slowing the system with massive requests and slowing the system with too many requests. this is something i am figuring out in terms of populating resources upon return. a list, for example, might need all of it's albums populated as well as it's user: is it more efficient to populate, or more efficient to send multiple requests to retrieve the data when i need it on the frontend? i am inclined to argue that populating it is more efficient in this case, but it is a balance that needs finding.

**useful resources:**

[web api design by microsoft](https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design)

[restful api design by philip hauer](https://phauer.com/2015/restful-api-design-best-practices/)