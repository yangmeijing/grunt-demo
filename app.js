#!/usr/bin/node

const http = require ('http'),
      url = require('url'),
      qs = require('querystring'),
      log = console.log;

http.createServer((req, res) => {
    console.log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
    console.log(req.headers);
    console.log();

    var addr = url.parse(req.url);
    var rect = qs.parse(addr.query);

    var result = {
      'area': Number(rect.width) * Number(rect.height),
      'perimeter': 2 * (Number(rect.width) + Number(rect.height))
    
    }

    console.log(rect.width,rect.height);

    res.end(JSON.stringify(rect));
}).listen(8080);
