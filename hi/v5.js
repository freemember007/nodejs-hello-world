// webservice（服务端返回xml或json等格式化的数据而不是网页，即为webservice接口）
var http = require('http');
http.createServer(function(request, response){
  response.writeHead(200);
  response.write("{'name': 'xjp'; 'gender': 'male'}");
  response.end();
}).listen(8888);

console.log('服务器已启动，地址为：http://localhost:8888');
