$(document).ready(function(){
    $.jqProgress=function(){
        $(".progress-done").each(function(){
            var thisprogress=$(this);
            var per=thisprogress.attr('data-done');
            thisprogress.css("width",per+"%");
            thisprogress.css("opacity","1");
        });
    }
    $("#mainline ul li").click(function(){
        var _this=$(this);
        var thisurl=_this.data("url");
        $.ajax({
            type : 'get',
            url:'category/'+thisurl,
            dataType:'html',
            success: function(data){
                $("#item-list").html(data);
                setTimeout(() => {
                    $.jqProgress();
                }, 500);
            }
        });
    });
    $.jqProgress();
});

$(".all_menu").click(function(){
    $.ajax({
        type:'get',
        url:'All_menu.html',
        dataType:'html',
        success:function(data){
            $("#item-list").html(data);
            setTimeout(()=>{
                $.jqProgress();
            },500);
        }
    });
});

$("#mainline ul li").click(function(){
    var _this=$(".all_menu");
    // _this.css("color","white");
    if(_this.css("color")=="rgb(0,0,0)"){
        console.log("black");
        _this.css("color","white");
    }else{
        console.log("white");
        _this.css("color","black");
    }
});
// $(".listsort.new").click(function(){
//     $(".progress-done").each(function(){
//         var num=$(this).attr("data-done");
//         for(var i=0;i<num.length;i++){
//             if(num[i]>num[i+1]){
//                 var number=num[i];
//                 num[i]=num[i+1];
//                 num[i+1]=number;
//             }
//         }
//         for(var k=0;k<num.length;i++){
//             console.log(num[k]);
//         }
//     });
// });
// $(".listsort.best").click(function(){
//     $(".progress-done").each(function(){
//         var items=$(this).attr('data-done');
//         for(var i=0;i<items.length;i++){
//             if(items[i]<items[i+1]){
//                 var item=items[i];
//                 items[i]=items[i+1];
//                 items[i+1]=item;
//             }
//         }
//         console.log(items);
//         // for(var i=0;i<items.length;i++){
//         //     if(items[i]==$(".item .progress-done").attr('data-done')){
//         //         var thisitem=items[i].parent("div.item");
//         //         console.log(thisitem);
//         //     }
//         // }
        
//         // console.log(items);
//     });
    
// })
