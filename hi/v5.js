// GET/POST
var http = require('http');
http.createServer(function(request, response){
  response.writeHead(200);
  console.log(request.method)
  var params = require("url").parse(request.url, true).query; //true参数将查询字符串转换为json对象
  console.log(params);
  if(request.url === '/'){
    response.write('hi man');
  }else{
    response.write('<meta charset="utf-8"><style>.blue {color:#0066ff}</style><h1 class="blue">' + '您好，' + decodeURI(request.url.slice(1)) + '，请看图片：' +'</h1><img src="http://t.cn/Ry31ULY">');
  }
  var postData = "";
  request.on('data',function(chunk){
    postData += chunk;
  });
  request.on('end',function(){
    console.log(postData);
  })
  response.end();
}).listen(8888);

console.log('服务器已启动，地址为：http://localhost:8888');
