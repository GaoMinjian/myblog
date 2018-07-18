
$.ajax({
    // url:"localhost:3000/test",
    url: "http://10.230.206.10:3000/test",
    success:function (res) {
        var article = document.getElementsByClassName("article");
        var article_list = document.getElementsByClassName("article-list");
        for(var i=1;i<res.length;i++){
            var new_article = document.createElement("div");
            new_article.setAttribute("class","article");
            new_article.innerHTML = article[0].innerHTML;
            article_list[0].appendChild(new_article);
        }
        var introduction = document.getElementsByClassName("content");
        var title = document.getElementsByClassName("article-title");
        var content = document.getElementsByClassName("content");
        var date =document.getElementsByClassName("date");
        var read_num = document.getElementsByClassName("read-num");
        var comment_num = document.getElementsByClassName("comment-num")
        for(var i=0;i<res.length;i++){
            title[i].setAttribute("href","article.html?id="+res[i].id);
            content[i].setAttribute("href","article.html?id="+res[i].id);
            title[i].innerHTML = res[i].title;
            introduction[i].innerHTML = res[i].introduction;
            content[i].innerHTML = res[i].content;
            date[i].innerHTML = res[i].createtime;
            read_num[i].innerHTML ="阅读数：" + res[i].read;
            comment_num[i].innerHTML = "评论数：" + res[i].comment_num;
        }
    },
    error:function(XMLHttpRequest, textStatus, errorThrown) {
        alert(XMLHttpRequest.status);
        alert(XMLHttpRequest.readyState);
        alert(textStatus);
    }
})
