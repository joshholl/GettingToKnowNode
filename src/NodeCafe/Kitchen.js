'use strict';
const EventEmitter = require('events');

module.exports =  class Kitchen extends EventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
    this.pendingOrders = [];
  }

  orderIn(order, server) {
    order.number = ++this.orderNumber;
    this.pendingOrders.push(order);	
    this.on('orderUp', (completedOrder) => {
      if(completedOrder.number === order.number) {
        server.serveFood(completedOrder);
      }
    })
  }

  open(pollingInterval) {
    setInterval(() => {
      let order = this.pendingOrders.pop();

      if(order !== null && order !== undefined) {
        this.emit('orderUp', order);
      }}, pollingInterval );
  }
}
