/**
 * v3
 * 用10行代码写一个网站
 * 
 * 查看效果:
 * 1. 打开你的shell，执行: node v3，会开启一个http服务器，监听3000端口(如果已经开启了一个服务，记得先ctrl+c关闭)
 * 2. 打开你的浏览器, 访问: http://localhost:3000/
 * 3. 打开你的浏览器, 访问: http://localhost:3000/just-test
 * 
 * 如何理解:
 * 1. response.writeHead(200) 表示你可以操作HTTP响应头
 * 2. if...else是根据请求地址的不同响应不同的内容
 * 3. 对一个网站朴素的理解就是输入一个网址，返回相应内容，所以这就是一个极简的网站。
 *
 *
 * 恭喜，你已经会写一个网站了！
 * 
 */

var http = require('http');

http.createServer(function(request, response){

  response.writeHead(200, { 'Content-Type': 'text/plain' });

  if(request.url === '/'){
    response.write('hi man');
  }else{
    response.write('hi ' + decodeURI(request.url.slice(1)) + '!');
  }
  response.end();

}).listen(3000);

console.log('服务器已启动，地址为：http://localhost:3000'); 
