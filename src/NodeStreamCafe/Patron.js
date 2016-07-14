
const Readable = require('stream').Readable;
const Buffer = require('buffer').Buffer;

module.exports = class Patron extends Readable {
  constructor(name, order, options) {
    super(options);
    this.name = name;
    this.items = order;
    this.itemsOrdered = 0
  }

  _read() {
    if(this.itemsOrdered >= this.items.length) {
      this.push(null)
    } else {
      let item = this.items[this.itemsOrdered++];
      let buf = Buffer.from(item, 'ascii');
      console.log(`[Patron] Ordering ${item}`);
      this.push(buf);
    }
  }
}
