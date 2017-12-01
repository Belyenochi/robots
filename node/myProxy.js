var http=require("http");
var url=require("url");
var fs=require('fs');
var querystring = require('querystring');

var server=http.createServer(function(sreq,sres){
    sres.setHeader('Access-Control-Allow-Origin', '*');
    console.log('test');
    var url_parts=url.parse(sreq.url);//解析路径
    var pathname = url_parts.pathname;
    var msg = url_parts.path.split("=")[1];
    console.log("msg: " + msg);

    /*  //固定参数，本示例是用的ajax请求，此处是将ajax的post参数写死，测试成功后，进一步接收参数。
    var post_data = querystring.stringify({
            func_id:'20000',
            pagesize:'24',
            pageindex:'0',
            username:'admin',
            pwd:'1234qwer',
            co:'62c8ad0a15d9d1ca38d5dee762a16e01'
    });*/
   //node路径下的请求不转发
    // if(pathname.match(/^\/node/)!=null){
    //     var realPath = 'f:/'+pathname;//前台的html需放到f:/node下
    //     fs.exists(realPath, function (exists) {
    //         if (!exists) {
    //             sres.writeHead(404, {'Content-Type': 'text/plain'});
    //             sres.write("404 not found.");
    //             sres.end(data,'utf-8');
    //         } else {
    //             fs.readFile(realPath, "binary", function (err, file) {
    //                 if (err) {
    //                     sres.writeHead(500, {'Content-Type': 'text/plain'});
    //                     sres.end(err);
    //                 } else {
    //                     sres.writeHead(200, {'Content-Type': 'text/html'});
    //                     sres.write(file, "binary");
    //                     sres.end();
    //                 }
    //             });
    //         }
    //     });
    // }else{
        /*console.log("转发请求。。。。");
        var opts={
            host:"39.108.172.0",//跨域访问的主机ip
            port:80,
            path: "/api.php?key=free&appid=0&msg=" + msg,
            headers:sreq.headers,
            method:'GET'
        };
        var content = '';

        sreq.on("data",function(data){//接收参数 ------ sreq.on("data",function(data){});接收html中ajax传递的参数
            // var req = http.request(opts, function(res) {
            //     res.on('data',function(body){
            //         console.log('return');
            //         content+=body;
            //     }).on("end", function () {
            //         //返回给前台
            //         if(res.headers != null&& res.headers['set-cookie'] != null){
            //        //console.log("=======res.headers.cookie======="+res.headers.cookie);
            //            sres.writeHead(200, {
            //                        'Content-Type': 'text/html',
            //                        'Set-Cookie': res.headers['set-cookie']
            //            });//将cookie放到response中
            //        }
            //        else{
            //               sres.writeHead(200, {'Content-Type': 'text/html'});
            //        }
            //         sres.write(content);
            //         sres.end();
            //     });
            // }).on('error', function(e) {
            //     console.log("Got error: " + e.message);
            // });

            //console.log("固定参数===="+post_data);
            //console.log("接收参数===="+data+"\n");
          if(sreq.headers.cookie != null ){
             req.setHeader('Cookie',sreq.headers.cookie);
          }//获取request中的cookie</span>

            req.write(data+"\n");
            req.end();
        });*/
    //}
    http.get("http://api.qingyunke.com/api.php?key=free&appid=0&msg=" + msg, function(res) {
      console.log("Got response: " + res.statusCode);
        var json = '';
        res.on('data', function (d) {
            json += d;
        });
        res.on('end',function(){
            //获取到的数据
            json = JSON.parse(json);
            console.log(json);
            json = JSON.stringify(json);
            sres.write(json);
            sres.end();
        });
    }).on('error', function(e) {
      console.log("Got error: " + e.message);
    });
    
});
server.listen(3000, "127.0.0.1", function () {//监听端口8080
    console.log("开始监听"+server.address().port+"......");
});