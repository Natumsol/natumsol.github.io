(function() {

    function isWeixin() {
        var ua = navigator.userAgent.toLowerCase();
        return (/micromessenger/.test(ua)) ? true : false;
    }//判断是否为微信

    document.getElementById("download").addEventListener("click",function(){
    	if(isWeixin()) {
    		document.getElementsByClassName("wechat-tips")[0].classList.remove("hide");
    		document.getElementsByClassName("cover")[0].classList.remove("hide");
    	} else {
    		window.location = "";
    	}
    });
    document.getElementsByClassName("cover")[0].addEventListener("click",function(){
    	this.classList.add("hide");
    	document.getElementsByClassName("wechat-tips")[0].classList.add("hide");
    });
    window.onload = function(){
        document.getElementsByClassName("container")[0].style.height = document.body.clientHeight + "px";
    }
    window.onresize = function(){
        document.getElementsByClassName("container")[0].style.height = document.body.clientHeight + "px";
    }
})();
