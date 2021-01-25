$(function(){
  // 不能自适应的情况
  $(".pop-1").click(function(){
    dialog({
      title:"问题重现",
      url:"pop-1.html"
    }).showModal();
  });

  //修复之后的情况
  $(".pop-2").click(function(){
    dialog({
      title:"修复后",
      url:"pop-2.html",
      data: function(){
        var pop = dialog.getCurrent();
        //重置高度和宽度，使其自适应
        pop.height($(pop.content().iframeNode.contentDocument)[0].documentElement.scrollHeight);
        pop.width($(pop.content().iframeNode.contentDocument)[0].documentElement.scrollWidth);
      }
    }).showModal();
  });
});