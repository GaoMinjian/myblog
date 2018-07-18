var mysql = require("mysql");
var http = require("http")
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"my_blog"
});

connection.connect();

function select(){
    var sql = "SELECT * FROM articles";
    connection.query(sql,function (err,result) {
        if(err){
            // console.log("[SELECT ERROR] - ",err.message);
            return;
        }
        //var article_list = document.getElementById("article-list");
        //var test=article_list[1].getElementsByTagName("a");
        //test[0].setAttribute(result[0].title,value);
        console.log(result)
        return result
    })
}

var server = http.createServer((req,res)=>{
    var url_info = require('url').parse(req.url,true)
    // console.log(url_info)

    if (url_info.pathname === "/test") {
    res.writeHead(200,{'Content-Type':'text/plain'})
    console.log(select())
}else{
    req.pipe(res)
}
})
server.listen(8888,'127.0.0.1')

server.on('close',()=>{
    connection.end()
})