var mHttp = require('http')

var mServer = mHttp.createServer(function(request, response) {
    console.log("请求url：" + request.url + "======" + request.method)


    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>Hello world!=!</h1>');
});

mServer.listen(8080)

console.log('Server is running at http://127.0.0.1:8080/');

//调试 fn+f5
//断开 fn+shift_f5