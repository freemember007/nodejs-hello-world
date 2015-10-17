// 丰富这个网站
var http = require('http');
http.createServer(function(request, response){
  response.writeHead(200);
  if(request.url === '/'){
    response.write('hi man');
  }else{
    response.write('<style>.blue {color:#0066ff}</style><h1 class="blue">' + '您好，' + decodeURI(request.url.slice(1)) + '，请看图片：</h1><img src="http://t.cn/Ry31ULY">');
  }
  response.end();
}).listen(8888);

console.log('服务器已启动，地址为：http://localhost:8888');
