# Getting to Know Node.JS
---

# What is Node.JS

Node.JS is an event-driven, asynchrony javascript backend platform built upon Google's V8 engine.

--
Node is not a server, it is just a platform on which one can be built

---
# History of Node.JS

 - Created by Ryan Dahl in 2009 and soon sponsered by Joyent
 - In 2011 NPM (Node Package Manager) was introduced to allow easier sharing of modules
 - Also in 2011, Microsoft and Joyent worked together to create a native Windows implementation of Node JS.
 - 2012 Dahl steps aside for NPM creator Isaac Schlueter to take over
 - 2014 Schlueter steps asside handing leadership over to Timothy Fontaine
 - At the end of 2014, io.js, a fork of Node.js, is created due to conflict with how Joyent was governing the platform. io.js main goal was to make governance open and to keep the platfom up-to-date with V8 engine updates.
 - 2015 a neutral Node.js foundation was created and both the io.js and Node.js communities agreed to work together under the new foundation. Later that year Node.js and io.js merged
 - 2016 io.js effectively dead and recommending users go back to Node.js

---
# Why Node.js?

**Its important to remember that Node.js is not a server, its a platform on which to create servers.**

 - By using non-blocking, asynchronous i/o Node.JS is exceptionally fast
 - Thanks to Angular and other Front End Frameworks, Javascript is no longer just some glue for interactivity, its a First Class language for creating applications. Node.JS makes Javascript a first class language for the back end.
 - Node.JS is easily scaled. The builtin cluster module allows you to share a single port across multiple child processes. 
 - Easy setup. Unlike Apache and the myriad of *.conf files, you deploy node and then your code.

---
# Getting Started
 - Node.JS can be downloaded from https://nodejs.org (this talk assumes 6.2.1 or higher, but should work on 4.4.X)
 - Can be installed on Windows, Mac, or Linux
 - May not want to install via apt-get or distro package manager if you are wanting later versions
 - **Node.JS versions prior to 4.X.X are using older versions of V8, if you want ES6 support you should use 4.X.X or higher
 - NVM (node version manager) can also be used to install Node.JS
 - To run a script, execute node <scriptname>.js

---
 # Diving in - Non-Blocking, Asynchronous I/O
 - I/O uses two different concurrency models: Synchronous and Asynchronous
 - In synchronous i/o, a file read will block waiting on the file system for data before continuing on.
 - In asynchronous, one or more parts of an application may continue and wait for a callback to notify of a change
 - Synchronous can be easier to use, however comes at a performance penalty
 - Asynchronous can be slightly more difficult but can have huge performance implications.

 # Diving in - EventEmitter and Event Loop
 - Node.JS uses an event loop/emitter pattern similar to EventMachine for Ruby
 - "Things Happen" based on events that occur rather than mutation of state or explicit function calls
 - This allows Node.JS to operate very effeciently by keeping threads active and ready to service new request. 

 # Diving in - EventEmitter (Continued)
 - Objects that extend EventEmitter dispatch events to listeners (functions) 
 - While NodeJS is asynchronous, EventEmitter dispatches events synchronously (in the order in which they are registered)
 - EventEmitter.on() is used to register a listener. 
 - Events are emitted using the emit() method

 
  
 
