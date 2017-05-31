//jQuery環境下的dropLeft代碼
function addDropLeft(){
    //創建一個數組
    var items=[];
    //拿到menu中所有的class前綴為btn的元素并遍歷并將這些作為數組元素壓如數組
    $("[class^='btn']").each(function(){
        var item=$(this).attr("class");
        $.inArray(item,items)==-1 && items.push('.'+item);
    });
    //遍歷數組，對每個數組元素的近親DOM元素進行事件綁定
    $.each(items,function(i,item){
        $(item+'>div>.sub').on('mouseover',function(e){
            $(this).children('.dropdown').css("display","block");
            var target= e.target;
            var liWidth=target.clientWidth;
            var width_01=window.innerWidth;

            var width_02=this.getBoundingClientRect().left-document.documentElement.clientLeft+document.documentElement.scrollLeft;

            if(width_01-width_02<3*liWidth){
                if($(target).parent().hasClass('parent')){
                    $ul=$(target).parent().children('.sub_lv');
                    $ul.css("display","block");
                    $ul.addClass("dropLeft");
                }
            }
            else{
                if($(target).parent().hasClass('parent')){
                    $ul=$(target).parent().children('.sub_lv');
                    $ul.css("display","block");
                }
            }
        });
        $(item+'>div>.sub').on('mouseleave',function(e){
            var target= e.target;
            var t=$(target);
            do{
                t=t.parent();
            }while(!t.hasClass("sub"));
            t.find(".sub_lv").css("display","none");
            t.find(".dropLeft").removeClass("dropLeft").css("display","none");
        });
        $(item+'>div>.sub .parent').on("mouseleave",function(){
            $(this).parent().find(".sub_lv").css("display","none")
        });
    });
}
addDropLeft();