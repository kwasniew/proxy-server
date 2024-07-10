var http = require('http'),
  httpProxy = require('http-proxy');

httpProxy.createProxyServer({target:'http://localhost:4242'}).listen(8081);
