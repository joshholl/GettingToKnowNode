'use strict';
const Kitchen = require('./Kitchen.js');
const Server = require('./Server.js');
const Patron = require('./Patron.js');

let soleSurvivor = new Patron("Sole Survivor",  ['Strange Meat']);
let sabine = new Patron("Sabine", ['Node Nuggets', 'ES Fish Sticks']);
let morbo = new Patron("Morbo",["Glagnar's Human Rinds"]);

let server = new Server();
let kitchen = new Kitchen();
soleSurvivor.pipe(server).pipe(kitchen).pipe(server);
