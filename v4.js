/**
 * v4
 * 丰富这个网站
 * 
 * 查看效果:
 * 1. 在本项目根目录，打开你的shell，执行: node v4 (如果已经开启了一个服务，记得先ctrl+c关闭)
 * 2. 打开你的浏览器, 访问: http://localhost:3000/
 * 
 * 如何理解:
 * 1. 这里与前面的不同是返回了一段HTML标签化内容，从而可以呈现更丰富的内容
 * 2. 真正的网站当然不会这么简单，会将返回内容这块单独提出了，甚至前后端分离，但不管怎样，
 * 基本原理就是这样。
 *
 * 恭喜，你已经会写一个图文并茂的网站了！
 * 
 */

var http = require('http');

http.createServer(function(request, response){

  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  response.write('<style>.blue {color:#0066ff}</style><h1 class="blue">' + '您好，' + decodeURI(request.url.slice(1)) + '请看图片：</h1><img src="http://t.cn/Ry31ULY">');

  response.end();

}).listen(3000);

console.log('服务器已启动，地址为：http://localhost:3000');
