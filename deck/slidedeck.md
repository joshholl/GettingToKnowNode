class: center, middle

# Getting to know Node.JS

---
# Intended Audience

--

- People who have some exposure to development and have a cursory knowledge of programming in general

--

- People who are not Node.js experts

---
# What are we going to cover.

--

- What Node.JS is and is not

--

- How Node.JS works

--

- The EventEmitter Pattern

--

- Streams

---

# What Node.JS is not

--

- A server

--

- The answer to all of your problems

???

Node.js is not an javascript based server, although it does lend itself well to creating servers written in javascript. Therefore like all tools it is not the ultimate answer to all of your problems, but it can be used to create scalable backend services.

---
# What is Node.JS

 Node.JS is an event-driven, non-blocking I/O javascript backend platform built upon Google's V8 engine.
 
???

V8 is a javascript implementation written in C++ and created/maintained by Google. Node.js is built upon this engine and adds functionality via libuv to make blocking synchronous libraries asynchronous
 
---
# Why Node.JS

--

- Allows developers to use nothing but javascript (Mostly)

???

Javascript is lingua franca of the internet and has long been ubiquitous with creating dynamic client side content. Node.js allows developers to use the same languages and tooling that the have become accustomed to for front end development on the back end. However, if you so desire, you can write modules that interface with V8 in C++. 

--

- Ease of use

???

Unlike Apache, Node.js does not have a heirarchal configuration or any real configuration outside of what is needed to execute a given node.js script. 

--

- Scalability and Speed

???
Node.js scales well in part because it does not spin up threads or fork processes for each request. Therefore node.js has less overhead for each request processing. Additionally since node.js is asynchronous the actual handling of each request can be delegated allowing the primary thread to accept more request rather than completeing each one before accepting a new one. Finally, given that a most applications on the internet use JSON for a data transfer node.js has an advantage by being javascript and having supported baked in unlike .NET, PHP, or JAVA which rely on marshalling libraries to convert between JSON and the native language.

---
# Brief History of Node.JS

- 2009  Ryan Dahl Creates Node.JS
- 2011 NPM is created
	- Microsoft Works with Joyent to bring Node.JS to windows
- 2014 Node.JS is forked to IO.js
- 2015 Node foundation is created and later IO.js and Node.js merge


---
# How it all works - Non-Blocking I/O
	
---
# How it all works - Event-Driven

--

- Everything that happens is an event (request recieved, response sent, error)

--

- Application logic flows based on one of these events

---

# EventEmitter - Overview


---

# EventEmitter - Example

---

# EventEmitter - Creating Your Own

 - Extend from the EventEmitter class (utils.inherits if not using ES6)
 
---

# Streams - Overview

---

# Streams - Example

---

# Putting it All together

---

# Resources 



