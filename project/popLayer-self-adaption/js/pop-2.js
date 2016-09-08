/**
 * 问题重现：修复后
 * @param  {[type]} ){} [description]
 * @return {[type]}       [description]
 */
$(function(){
	$.getJSON("data.json", function(result){
		var html = TrimPath.processDOMTemplate("template", result);
		$("body").html(html);
		top.dialog.getCurrent().data();
	})
})