function fn(){
  var items=[];
  $("[class^='btn']").each(function(){
    var item=this.getAttribute('class');
    $.inArray(item,items)==-1 && items.push('.'+item);
  });
  $.each(items,function(index,itemClass){
    dropLeft(itemClass);
  })
}
function dropLeft(itemClass){
  $(itemClass+'>div>.sub').on('mouseover',function(e){
    $(this).children('.dropdown').css("display","block");
    var target= e.target;
    var liWidth=target.clientWidth;
    var width_01=window.innerWidth;

    var width_02=this.getBoundingClientRect().left-document.documentElement.clientLeft+document.documentElement.scrollLeft;

    if(width_01-width_02<3*liWidth) {
      if ($(target).parent().hasClass('parent') || $(target).parent().hasClass('parent_left')) {
        $(target).parent().removeClass("parent").addClass("parent_left");
        $ul = $(target).parent().children('.sub_lv');
        $ul.css("display", "block");
        $ul.addClass("dropLeft");
      }
    }
    else{
      if($(target).parent().hasClass('parent') || $(target).parent().hasClass('parent_left')){
        $(target).parent().removeClass("parent_left").addClass("parent");
        $ul=$(target).parent().children('.sub_lv');
        $ul.css("display","block");
      }
    }
  })
  $(itemClass+'>div>.sub').on('mouseleave',function(e){
    var target= e.target;
    var t=$(target);
    do{
      t=t.parent();
    }while(!t.hasClass("sub"));
    t.find(".sub_lv").css("display","none");
    t.find(".dropLeft").removeClass("dropLeft").css("display","none");
  })
  $(itemClass+'>div>.sub .parent').on("mouseleave",function(){
    $(this).parent().find(".sub_lv").css("display","none");
  })
}
fn();
