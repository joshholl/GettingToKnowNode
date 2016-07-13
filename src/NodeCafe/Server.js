'use strict';
module.exports = class Server {

  constructor(kitchen) {
      this.kitchen = kitchen;
  }

  placeFoodOrder(patron, food) {
    this.kitchen.orderIn({patron: patron, food: food}, this);
  }
  placeDrinkOrder(patron, drinks) {
    drinks.forEach((beverage)=> patron.enjoy(beverage));
  }

  serveFood(order) {
    order.food.forEach((item) => { order.patron.enjoy(item); });
  }

}
