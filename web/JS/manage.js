
$.ajax({
    url: "http://10.230.206.10:3000/test",
    success:function (res) {
        for(var i=1;i<res.length;i++){
            var aricle_list = document.getElementsByClassName("article-list-box");
            var new_article_list = document.createElement("div");
            new_article_list.setAttribute("class","article-list-box");
            new_article_list.innerHTML = aricle_list[0].innerHTML;
            var tab_content = document.getElementsByClassName("tab-content");
            tab_content[0].appendChild(new_article_list);
        }
        var title = document.getElementsByClassName("article-item-title");
        var time = document.getElementsByClassName("time");
        var read_num = document.getElementsByClassName("read-num");
        var comment_num = document.getElementsByClassName("comment-num");
        var check = document.getElementsByClassName("check");
        var delete_btn = document.getElementsByClassName("delete");
        for(var i=0;i<res.length;i++){
            check[i].setAttribute("href","article.html?id="+res[i].id);
            delete_btn[i].setAttribute("id",res[i].id);
            title[i].innerHTML = res[i].title;
            time[i].innerHTML = res[i].createtime;
            read_num[i].innerHTML = "阅读数：" + res[i].read;
            comment_num[i].innerHTML ="评论数：" +  res[i].comment_num;
        }
    }
})

function deleteArticle(id) {
    if(confirm("请确认是否删除！")) {
        $.ajax({
            url: "http://10.230.206.10:3000/delete",
            type: "post",
            data: "id=" + id,
            success: function (res) {
                console.log(res);
                var tab_content = document.getElementsByClassName("tab-content");
                tab_content.removeChild(list.childNodes[id]);
            },
            error:function (a,b,c) {
                console.log('error')
                console.log(a)
                console.log(b)
                console.log(c)
            }
        })
    }
}