/**
 * v5
 * 用7行代码写一个HTTP接口
 * 
 * 查看效果:
 * 1. 在本项目根目录，打开你的shell，执行: node v5 (如果已经开启了一个服务，记得先ctrl+c关闭)
 * 2. 新开一个shell窗口, 执行: http://localhost:3000/
 * 
 * 如何理解:
 * 1. 我们常常听说什么后端接口，那什么是接口？接口并不神秘
 * 2. 服务端返回xml或json等标准化格式化的数据而不是网页，即为接口
 * 3. 也有人称之为Restful, webservices，叫什么都没关系(或许是误叫)，总之就是这么回事
 *
 * 恭喜，你已经会写一个HTTP接口了！
 * 
 */
var http = require('http');

http.createServer(function(request, response){

  response.writeHead(200, { 'Content-Type': 'application/json' });

  response.write('{"name": "xjp", "gender": "male"}');

  response.end();

}).listen(3000);

console.log('服务器已启动，地址为：http://localhost:3000');
