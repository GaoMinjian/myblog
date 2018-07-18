var editor =new Simditor({
    textarea:$('#editor')
});

function publish() {
    $.ajax({
        url: "http://10.230.206.10:3000/insert",
        type:"POST",
        // dataType: "text",
        data:'title='+$("#title-input").val()+"&content="+$("#editor").val(),
        success:function (res) {
            if(res=="success"){
                alert("文章发表成功！")
                window.location.href = "HomePage.html";
            }
            else {
                alert("文章发表失败！")
            }
        },
        error:function(a,b,c) {
            console.log('error')
            console.log(a)
            console.log(b)
            console.log(c)
        }
    })
}
var mainlist = document.getElementById("list-group-box");
var content_body = document.getElementById("content-body");
console.log(mainlist.style.height,content_body.style.height);
mainlist.style.height = content_body.style.height;