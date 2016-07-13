'use strict';
module.exports = class Patron {
  constructor(name) {
    this.name = name;
  }

  orderFood(server, items) {
    server.placeFoodOrder(this, items);
  }
  orderDrinks(server, items){
    server.placeDrinkOrder(this, items);
  }

  enjoy(item) {
    console.log(`${this.name} is enjoying ${item}!`);
  }
}
