'use strict';
const Kitchen = require('./Kitchen.js');
const Server = require('./Server.js');
const Patron = require('./Patron.js');
const KITCHEN_DELAY = 2000;

let kitchen = new Kitchen();
kitchen.open(KITCHEN_DELAY);

let server = new Server(kitchen);
let soleSurvivor = new Patron("Sole Survivor");
let sabine = new Patron("Sabine");
let morbo = new Patron("Morbo");

morbo.orderFood(server, ["Glagnar's Human Rinds"]);
sabine.orderFood(server, ['Node Nuggets']);
soleSurvivor.orderFood(server, ['Strange Meat']);


sabine.orderDrinks(server, ['Whiskey (Neat)']);
soleSurvivor.orderDrinks(server, ['Nuka Cola']);
morbo.orderDrinks(server,['Slurm']);
soleSurvivor.orderDrinks(server, ['Nuka cola']);
