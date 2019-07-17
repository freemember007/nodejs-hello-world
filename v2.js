/**
 * v2
 * 用5行代码写一个服务器
 * 
 * 查看效果:
 * 1. 在本项目根目录，打开你的shell，执行: node v2
 * 2. 新开一个shell窗口, 执行: curl localhost:3000
 * 
 * 如何理解:
 * 1. 第一句话你请求将nodejs的http标准库载入程序
 * 2. http对象有一个createServer的方法，此方法接受一个函数为参数，此函数处理request(请求)与response(响应)
 * 4. createServer返回一个Server(服务器)结果对象，这个对象有listen方法，指定端口号开始TCP监听(即开始服务器)
 *
 * 注意：
 * 1. js里没有类的概念，一切皆对象
 * 2. js里函数是一等公民，即可作为函数参数，也可被函数返回
 *
 * 恭喜，你已经会写一个HTTP服务器了！
 * 
 */

var http = require('http');

http.createServer(function(request, response){

  response.write('hi man');

  response.end();

}).listen(3000);

console.log('服务器已启动，端口是3000');