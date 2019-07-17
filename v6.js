/**
 * v6
 * 了解更多
 * 
 * 查看效果:
 * 1. 在本项目根目录，打开你的shell，执行: node v6 (如果已经开启了一个服务，记得先ctrl+c关闭)
 * 2. 新开一个shell窗口, 执行带参数的GET请求: curl localhost:3000/?name=xjp
 * 3. 新开一个shell窗口, 执行带body的POST请求: curl localhost:3000 -d '{"name":"xjp"}'
 * 4. 注意查看服务器日志
 * 
 * 如何理解:
 * 1. 在这一节里，你接触到更多的概念，诸如：请求方法，请求参数，路由，POST Body等
 * 2. Nodejs作为server端，加上前面最基本的请求、响应概念，最核心的东西无非就是这些了，
 * 当然在真正运用时会面临更多的复杂
 * 3. 但不管怎么，你已经有了一个基本和大致的把握。
 *
 * 接下来就看你的了！
 * 
 */

// 引入模块
var http = require('http');

// 创建服务器
http.createServer(function(request, response){

  // 写头
  response.writeHead(200);

  // 打印请求方法
  console.log('请求方法: ' ,request.method)

  // 打印GET参数 
  var params = require('url').parse(request.url, true).query; 
  console.log('请求参数: ', params);

  // 路由
  if(request.url === '/'){
    response.write('hi man');
  }else{
    response.write('hi ' + decodeURI(request.url.slice(1)) + '!');
  }

  // 打印POST数据
  var postData = '';
  request.on('data', function(chunk){
    postData += chunk;
  });
  request.on('end', function(){
    console.log('POST Body: ', postData, '\n');
  })

  // 结束响应
  response.end();

  // 注册端口
}).listen(3000);

// log
console.log('服务器已启动，地址为：http://localhost:3000');

