/**
 * 问题重现：高度不自适应
 * @param  {[type]} ){} [description]
 * @return {[type]}       [description]
 */
$(function(){
	$.getJSON("data.json", function(result){
		var html = TrimPath.processDOMTemplate("template", result);
		$(".main-content").html(html);
	})
})