
$.ajax({
    url: "http://10.230.206.10:3000/test",
    success: function (res) {
        var article_title = document.getElementsByClassName("article-title");
        var time = document.getElementsByClassName("time");
        var read_count = document.getElementsByClassName("read-count");
        var article_content = document.getElementById("article-content");
        var url = location.search;//url问号及后面部分
        var i;
        for(i=0;i<res.length;i++){
            if(res[i].id == getId(url)){
                break;
            }
        }
        document.title = res[i].title;
        article_title[0].innerHTML = res[i].title;
        time[0].innerHTML = res[i].createtime;
        read_count[0].innerHTML = "阅读数：" + res[i].read;
        article_content.innerHTML = res[i].content;
    },
    error: function () {
        return;
    }
})
function getId(url) {
    var index = url.indexOf("=");
    var result = url.substr(index+1);
    return result;
}
