class: center, middle

# Getting to know Node.JS

---
# Intended Audience

--

- People who have some exposure to development and have a cursory knowledge of programming in general

--

- People who are not Node.js experts

--

- ES6 exposure is helpful but not necessary
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

A restaurant that can only serve one patron at a time will not stay in business

???

A major portion of the magic that makes node js is non blocking io. If you're not familiar with non blocking io it can be easily relatable to every day life. And like every day life there are times where blocking is a good thing, and a time when it is not.

A good example of when its acceptable to block is in your morning routine. A critical part of every morning routine is showering and getting dressed. Both are time consuming operations however, for best results you should always complete showering prior to starting to get dressed. Doing both simultaneously may be possible (and might cut down on laundry detergent usage) it is not recommended to do both.

Meanwhile, other things lend themselves quite well to non blocking logic. No morning is complete without coffee. Also if you have time to make coffee you probably have enough time to eat breakfast and check your email. Each task could be performed simultaneously with out issue. I perfectly logical path would be to start your coffee, put your pop tarts in the toaster, then get out your phone on start reading your email. Once the coffee is done you can fix it to your liking then go back to email. Once the pop tarts are done you can start eating all the while switching contexts and reading email in between.

This leads us back to the point of this slide, a restaurant that can only serve one patron at a time will go out of business. Imagine if your server took your food and drink order, made your drinks and stood by the window waiting for your food to come up. Once that was up they brought it to you. While you ate the server went off to some corner to wait for you to finish, once you finished they would bring your check, you pay and then and only then could the server wait on the next patron...as i think we all could imagine, the yelp reviews for this restaurant would be brutal

---
# How it all works - Modules



---
# How it all works - Event-Driven

--

- Everything that happens is an event (request received, response sent, error)

???

And like all analogies that are used to explain something the restaurant example works perfectly to explain event driven applications. In a restaurant there are at least three systems in play, the server, the hungry patron, and the kitchen staff. The amount of events that a single system can perform or too numerous to list. But a quick summation could be that the patron is seated, orders food, and eats food. the server takes order, brings the food and refills drinks, mean while the kitchen staff receives orders and cooks food.

--

- Application logic flows based on one of these events

---

# EventEmitter - Overview

--

- The core module backing the majority of Node.JS event-driven architecture.

--

- Primary functions of interest are emit() and on()


???
If you are coming from a ruby world, EventEmitter functions a lot like EventMachine. However if you're not familiar with nodes EventEmitter or ruby's event machine, simplistic model you can use to conceptualize what an event emitter is that of the pub/sub pattern. However in Node.JS EventEmitter is more than just a module, it is central to everything that node does and is the basis for a decent chuck of node.js core api.

---
# EventEmitter - emit()

Listeners are notified via emit() which emits a named event.

```javascript
  eventEmitter.emit('guestSeated');
```

???

Emitting an event is pretty straight forward, however it is important to know that your listeners will be executed synchronously, and in the order that they were registered. There are ways to get around this which will be discussed in a moment

---
# EventEmitter - on()

Listeners are registered with an on() method that specifies an event name, and the function to be called when the event occurs

```javascript

eventEmitter.on('orderPlaced', (order)=> {
  order.forEach((item)=> { startCooking(item); });
});

```

???

like emitting an event, adding a listener is pretty straight forward. As you can see from the example it is possible to use ES6's fat arrow syntax, however you must pay special attention to this scope, as the fat arrow gets its own this  binding.

Furthermore all of the rules for what makes a fat arrow function valid hold true in as an listener.

---

# EventEmitter - Example

```javascript

const kitchen = new NodeKitchen();

kitchen.on('orderPlaced', (items) => {
  items.forEach((item)=> {
    console.log(`Cooking ${item}!`);
  })
});

kitchen.emit('orderPlaced', ['Node Nuggets', 'ES Fish sticks']);

```

--

*Cooking Node Nuggets!*

*Cooking ES Fish Sticks!*

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
