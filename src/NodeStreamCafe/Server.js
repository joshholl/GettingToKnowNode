'use strict';
const Duplex = require('stream').Duplex;
const Buffer = require('buffer').Buffer;
module.exports = class Server extends Duplex {
  constructor(options) {
    super(options);
    this.orderedItems  = [];
  }


  _read(size) {
    let item = this.orderedItems.pop();
    if(item !== undefined) {
      this.push(item);
      console.log(`[Server] Submitting order for ${item}`);
    }

  }
  _write(chunk, encoding, callback) {
    if(Buffer.isBuffer(chunk)) {
      let item = chunk.toString('ascii');
      if(item.indexOf('Cooked') === -1) {
        this.orderedItems.push(chunk);
        console.log(`[Server] Recieved order for ${item}`);
      } else {
        console.log(`[Server] Serving ${item} to patron`);
      }
    }
    callback();
  }
}
