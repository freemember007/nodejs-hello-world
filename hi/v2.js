// 用5行代码写一个服务器
var http = require('http');
http.createServer(function(request, response){
  response.write('hi man');
  response.end();
}).listen(8888);