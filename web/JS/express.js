var express=require('express');
var app =express();
var bodyParser = require('body-parser')

//设置跨域访问
app.all('*', function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
   res.header("X-Powered-By",' 3.2.1');
   res.header("Content-Type", "application/json;charset=utf-8");
   next();
});

var questions=[
    {
        data:213,
        num:444,
        age:12
    },
    {
        data:456,
        num:678,
        age:13
    }
    ];

//写个接口123
app.get('/test',function(req,res){
res.status(200),
res.json(questions)
});
app.get('/',function(req,res){
  res.status(200)
  res.json(res)
});

// see https://github.com/expressjs/body-parser
// 添加 body-parser 中间件就可以了
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.post('/post', function (req, res) {
    console.log('req.body', req.body)
    res.send({airead: 'fan'})
});


//配置服务端口

var server = app.listen(3000, function () {

var host = server.address().address;

 var port = server.address().port;
    console.log('Example app listening at ', host, port);
})