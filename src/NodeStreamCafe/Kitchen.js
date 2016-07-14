'use strict';
const Transform = require('stream').Transform;
const Buffer = require('buffer').Buffer;
module.exports = class Kitchen extends Transform {
  constructor(options) {
    super(options);
  }

  _transform(chunk,encoding, callback){
    console.log('[Kitchen] Preparing ' + chunk );
    setTimeout(()=>{}, 2000);
    this.push(Buffer.from(`Cooked ${chunk}`, 'ascii'));
    callback();
  }

  _flush(callback) {
    this.push(null);
    callback();
  }
}
