var $ = function(id) {
	return document.getElementById(id);
}
var confirm = $("confirm");
confirm.addEventListener("click", function() {
	var angle1 = parseInt($("angle1").value);
	var angle2 = parseInt($("angle2").value);
	var angle3 = parseInt($("angle3").value);
	if (angle3 <= 0 || angle2 <= 0 || angle1 <= 0) {
		alert("输入参数错误！内角应该大于0");
		return;
	}
	if (angle1 + angle2 + angle3 != 180) {
		alert("输入参数错误！内角和不满足180");
		return;
	}
	var x = Math.sin(angle3 / 180 * Math.PI) * Math.sin(angle1 / 180 * Math.PI) * 300;
	var y = Math.sin(angle3 / 180 * Math.PI) * Math.cos(angle1 / 180 * Math.PI) * 300;
	var z = Math.sin(angle1 / 180 * Math.PI) * Math.cos(angle3 / 180 * Math.PI) * 300;
	$("triangle").style.borderLeftWidth = (y) + "px";
	$("triangle").style.borderBottomWidth = (x) + "px";
	$("triangle").style.borderRightWidth = (z) + "px";
	$("triangle").style.borderTopWidth = 0;
	$("triangle").style.borderStyle = "solid";

}, false);