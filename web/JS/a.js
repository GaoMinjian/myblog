var express=require('express');
var mysql = require("mysql");
var bodyParser = require('body-parser')
var app =express();


//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"my_blog"
});
connection.connect();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.post('/insert',function (req,res) {
    // var insert_sql = "INSERT INTO articles(title,content,read,comment_num) VALUE(?,?,0,0)";
    // var add_params = [req.body.title,req.body.content];
    connection.query('INSERT INTO articles SET ?',{title:req.body.title,content:req.body.content,read:0,comment_num:0},function (err,result) {
        if(err){
            console.log('[insert error] - ',err.message);
            return;
        }
        else{
            res.send("success");
        }
    })
    // res.send("收到服务端的回应")
})

app.post('/delete',function (req,res) {
    var sql_delete = "DELETE FROM articles WHERE id="+req.body.id;
    connection.query(sql_delete,function (err,result) {
        if(err){
            console.log('[insert error] - ',err.message);
            return;
        }
        else{
            res.send("success");
        }
    })
})

var sql = "SELECT * FROM articles";
connection.query(sql,function (err,result) {
    // console.log("###")
    if(err){
        return;
    }
    app.get('/test',function(req,res){
        res.status(200),
            res.json(result)
    });
})

//写个接口123
/*app.get('/test',function(req,res){
    res.status(200),
        res.json(select())
});*/

//配置服务端口

var server = app.listen(3000, function () {

    var host = server.address().address;

    var port = server.address().port;
    console.log('Example app listening at ', host, port);
})
