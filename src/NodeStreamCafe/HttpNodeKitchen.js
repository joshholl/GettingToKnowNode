'use strict';

const http = require('http')

const server = http.createServer((req, resp) => {
  let order ='';
  req.setEncoding('utf8') ;
  req.on('data', (chunk) => {
    order+=chunk;
  });

  req.on('end',()=> {
    if(order.indexOf('moldy') === -1) {
      resp.write(`cooking ${order}`)
      resp.end()
    } else {
      resp.statusCode = 400;
      resp.end(`the health department does not like when we cook ${order}`);
    }
  });
});

console.log('listening');
server.listen(6464);
