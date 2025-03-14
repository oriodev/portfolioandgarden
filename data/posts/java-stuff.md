---
title: "java collections."
date: "2025-03-01"
status: "seedling"
---

this page is just a big collection (hehe) of stuff i am learning about java.

** what is the collections framework?**

basically a java interface for using data structures like lists, sets, maps, and queues. 

collection interface -> interfaces (lists, maps) -> classes (linked lists, hashmaps).

so arraylists comes from collections which is why it's so different from an array.

**what is the list interface?**

a list is dynamic, has index positioning, and allows duplicates. it is implemented by a bunch of different types of lists and is super fundamental.

arraylist is good at indexing and inserting at the start/end but slower for doing stuff in the middle bc stuff needs to shift around. not thread safe, will break and be unhappy.

linkedlists are faster than arraylist at start/end (3ms versus 300ms) but crazy slow at accessing data in the middle (5000ms versus 1ms). good for a queue.

vectors are thread safe, but not really used anymore bc there are better options like a synchronised arraylist.

stacks. love a good stack. also thread safe. dequeue might have better performance.

**what's going on with sets?**

they have all unique values (obvs) but we can either have them unordered (hashset), ordered by insertion (linkedhashset), or sorted (treeset). hashset is the main one.

-----

**exception handling**
