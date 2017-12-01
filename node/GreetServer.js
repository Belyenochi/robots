//引入模块
var http = require('http');
var querystring = require('querystring');

/**
 * 照样输出json格式的数据
 * @param query
 * @param res
 */
var writeOut = function (query, res) {
    res.write(JSON.stringify(query));
    res.end();
}

var options = {
    host:     'http://api.qingyunke.com', // 目标主机
    path:     '/api.php?key=free&appid=0&msg=', // 目标路径
    method:   'get' // 请求方式
}

//创建服务器
var server = http.createServer(function (req, res) {
    console.log(req.method);
    if (req.url === '/greet' && req.method.toLowerCase() === 'post') {
        var alldata = '';
        req.on("data", (chunk) => {
          console.log("test");
          alldata += chunk;
          console.log('alldata: ', alldata);
        });
         req.on("end", function () {
            let query = querystring.parse(alldata);
            console.log("test");
            let msg = query.msg;
            options.path += msg;
            let myReq = http.request(options, function(myRes) {
                console.log('Status: ' + myRes.statusCode);
                console.log('headers: ' + JSON.stringify(myRes.headers));
                let data = '';
                myRes.on('data', function(chunk) {
                    console.log(chunk)
                    writeOut(chunk, res)
                })

                myRes.on('end', function() {
                    console.log('发送完毕');
                })
            })
            myReq.on('error', function(e) {
                console.log('Error: ' + e.message);
            })

            // myReq.write()
            // myReq.end()
        });
    }
    // res.set('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
    // res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    // res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
});
//设置监听端口
server.listen(3000, "127.0.0.1", function () {
    console.log("server is started listen port 3000");
});