// 用10行代码写一个网站
var http = require('http');
http.createServer(function(request, response){
  response.writeHead(200);
  if(request.url === '/'){
    response.write('hi man');
  }else{
    response.write('hi ' + decodeURI(request.url.slice(1)) + '!');
  }
  response.end();
}).listen(8888);

console.log('服务器已启动，地址为：http://localhost:8888');
