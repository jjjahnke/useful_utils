const http = require('http');

function _fetchHTTP(config, options) {
  return new Promise((resolve, reject) => {
    var req = http
    .get( options, (response) => {
      var pageData = "";

      response.resume();

      response.on('data', (chunk) => {
        pageData += chunk;
      });

      response.on('end', () => {
        resolve({options:options, response:response, payload:pageData, error:null});
      });
    });

    req.on('socket', (socket) => {
      socket.setTimeout(1000);
      socket.on('timeout', () => {
        req.abort();
      });
    });

    req.on('error', (e) => {
      resolve({options:options, response:null, payload:null, error:e});
    });
  });
}


module.exports = {
  _fetchHTTP:_fetchHTTP
}
