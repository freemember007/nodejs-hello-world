// GET/POST 及完整注解

// 引入模块
var http = require('http');

// 创建服务器
http.createServer(function(request, response){

  // 写头
  response.writeHead(200);

  // 打印请求方法
  console.log(request.method)

  // 打印GET参数 
  var params = require("url").parse(request.url, true).query; //true参数将查询字符串转换为json对象
  console.log(params);

  // 路由
  if(request.url === '/'){
    response.write("{'name':'xjp'; 'gender':'man'}");
  }else{
    response.write("{'name':" + decodeURI(request.url.slice(1)) +  "; 'gender':'man'}");
  }

  // 打印POST数据
  var postData = "";
  request.on('data',function(chunk){
    postData += chunk;
  });
  request.on('end',function(){
    console.log(postData);
  })

  // 结束响应
  response.end();

  // 注册端口
}).listen(8888);

// 服务器启动log
console.log('服务器已启动，地址为：http://localhost:8888');

