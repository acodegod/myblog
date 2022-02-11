function IEVersion() {
var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
if(isIE) {
	var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
	reIE.test(userAgent);
	var IEVersion;
	IEVersion = parseFloat(RegExp["$1"]);
	if (IEVersion == 7) {
	  return 7;
	} else if(IEVersion == 8) {
	  return 8;
	} else if(IEVersion == 9) {
	  return 9;
	} else if(IEVersion == 10) {
	  return 10;
	} else {
	  return 6;//IE版本<=7
	}
} else if(isEdge) {
  return 'edge';//edge
} else if(isIE11) {
  return 11; //IE11
}else{
  return -1;//不是ie浏览器
}
}
if(location.toString().indexOf(atob('YmxvZy5idWdqYXZhLmNu')) <= -1 && location.toString().indexOf(atob('bG9jYWxob3N0')) <= -1){document.location.href=atob('aHR0cDovL2Jsb2cuYnVnamF2YS5jbg==');} 
var isIE = IEVersion();
if (isIE == "6" || isIE == "7" || isIE == "8" || isIE == "9" || isIE == "10" || isIE == "11" ){//判断当前是否是IE浏览器
  window.location = "/kernel.html";//如果是IE内核跳转至kernel.html
}

/*H5 端唤醒 win10 消息通知*/


if (document.cookie.indexOf("HasLoaded") === -1){
	if (window.Notification) {
    /* 授权过通知 */
    if (Notification.permission === 'granted') {
        const notification = new Notification('你好', {
            icon: 'https://ae01.alicdn.com/kf/U37fa2c70780146aa930129c68c1b0a34N.jpg',
            body: '欢迎访问包子的博客~~~'
        })
        notification.onclick = function () {
            window.open('https://blog.bugjava.cn/')
            notification.close()
        }
        //5秒后自动关闭
        setTimeout(notification.close.bind(notification), 5000);
    } else {
        /* 未授权，先询问授权 */
        Notification.requestPermission();//设置允许通知
    }
}
}
// var clipboard = new Clipboard('body', {
	// text: function() {
		// return "https://blog.bugujava.cn";
	// }
// });
// clipboard.on('success', function(e) {
	// alert
// });
// clipboard.on('error', function(e) {
	// alert
// });
console.log("\n %c 包子博客 %c https://blog.bugjava.cn \n","color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");

var OriginTitile = document.title,
titleTime;
document.addEventListener("visibilitychange",
function() {
    if (document.hidden) {
        $('[rel="shortcut icon"]').attr("href", "https://cdn.jsdelivr.net/gh/acodegod/pic-cdn@e88debcdf0b2f6a5367d0ed10b723ec3944d5438/2021/04/20/83550a2742695976e5f4cf5e9dd98dda.png");
        document.title = "PronHub";
        clearTimeout(titleTime)
    } else {
        $('[rel="shortcut icon"]').attr("href", "https://cdn.jsdelivr.net/gh/acodegod/pic-cdn@75872e40b90816b97893cd251e98872c0d461758/2021/04/20/45de67f08c3eec70075490818d48d432.png");
        document.title = "(/≧▽≦/)欢迎回来！ " + OriginTitile;
        titleTime = setTimeout(function() {
            document.title = OriginTitile
        },
        2000)
    }
});
 

//debug调试时跳转页面
// var element = new Image();
// Object.defineProperty(element,'id',{get:function(){window.location.href="/console.html"}});
// console.log(element);
// /* 无限debug */
  // setInterval(function() {
	// check();
  // }, 2000);
  // var check = function() {
	// function doCheck(a) {
	  // if (('' + a / a)['length'] !== 1 || a % 20 === 0) {
		// (function() {}['constructor']('debugger')());
	  // } else {
		// (function() {}['constructor']('debugger')());
	  // }
	  // doCheck(++a);
	// }
	// try {
	  // doCheck(0);
	// } catch (err) {}
  // };
  // check();
  
/* $('body').before('<div id="fps" style="z-index:10000;position: fixed;right: 0;bottom: 0;font-size: 16px"></div>');
var showFPS = (function(){ 
    var requestAnimationFrame =  
        window.requestAnimationFrame || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame || 
        function(callback) { 
            window.setTimeout(callback, 1000/60); 
        }; 
    var e,pe,pid,fps,last,offset,step,appendFps; 
 
    fps = 0; 
    last = Date.now(); 
    step = function(){ 
        offset = Date.now() - last; 
        fps += 1; 
        if( offset >= 1000 ){ 
        last += offset; 
        appendFps(fps); 
        fps = 0; 
        } 
        requestAnimationFrame( step ); 
    }; 
    appendFps = function(fps){ 
        // console.log(fps+'FPS');
        $('#fps').html(fps+'FPS');
    };
    step();
})();
 */
$(function(){
	var bgstyle = "background-image: url('https://img.bugjava.cn/w.php');"
$("#web_bg").prop("style",bgstyle)
})

/* 侧边栏自动切换图片 */
/* var img = document.getElementById("cebianimg");
    setInterval(chimg, 20000);

function chimg() {
	
}
 */
$(function(){
	$("#card-info-btn").click(function(){
		chimg()
	})
})
var img = document.getElementById("web_bg");
    // setInterval(chimg, 60000);

function chimg() {
	var timechuo = new Date().getTime()
	// document.getElementById("cebianimg").src = "https://img.bugjava.cn/w.php?" + timechuo;
	var newimg = "background-image: url('" + "https://img.bugjava.cn/w.php?"+ timechuo + "');"
	img.setAttribute("style",newimg)
}

$(document).keydown(function(event) {
	if (event.keyCode == 123) {
		chimg();
		return false;
	}
}); 

function switchVisitChart () {
  // 这里为了统一颜色选取的是“明暗模式”下的两种字体颜色，也可以自己定义
  let color = document.documentElement.getAttribute('data-theme') === 'light' ? '#4c4948' : 'rgba(255,255,255,0.7)'
  if (document.getElementById('posts-chart')) {
    let postsOptionNew = postsOption
    postsOptionNew.textStyle.color = color
    postsOptionNew.title.textStyle.color = color
    postsOptionNew.xAxis.axisLine.lineStyle.color = color
    postsOptionNew.yAxis.axisLine.lineStyle.color = color
    postsChart.setOption(postsOptionNew)
  }
  if (document.getElementById('tags-chart')) {
    let tagsOptionNew = tagsOption
    tagsOptionNew.textStyle.color = color
    tagsOptionNew.title.textStyle.color = color
    tagsOptionNew.xAxis.axisLine.lineStyle.color = color
    tagsOptionNew.yAxis.axisLine.lineStyle.color = color
    tagsChart.setOption(tagsOptionNew)
  }
  if (document.getElementById('categories-chart')) {
    let categoriesOptionNew = categoriesOption
    categoriesOptionNew.textStyle.color = color
    categoriesOptionNew.title.textStyle.color = color
    categoriesOptionNew.legend.textStyle.color = color
    categoriesChart.setOption(categoriesOptionNew)
  }
}
document.getElementById("darkmode").addEventListener("click", function () { setTimeout(switchVisitChart, 100) });
$("body").append('<div id="xiaomai" style="position: fixed;bottom: 100px;right:25px;z-index: 9999;"> <img src="https://cdn.jsdelivr.net/gh/acodegod/pic-cdn@a158d64acac81b3db9c3728a20cbd975f09c9566/2021/12/31/633f07c6e456f6f83b99f81d514eb284.png" width="80px"> </div>');

/* $(function(){
	$("#web_bg").addClass("bg");
$("body").prepend('<div id="bg2" class="bg"></div>')


countImg = 1;
countTime = 0;
bg1Container = document.getElementById("web_bg");
bg2Container = document.getElementById("bg2");

setInterval(function() {
	// 一个轮回为10秒（2个图片，第1张0-5s，第2张5-10s），每个背景在淡出后（第7秒）更新图片
	countTime += 1;
	if (countTime % 10 == 7) {
		countImg += 1;
		bg1Container.style = `background-image: url(https://img.bugjava.cn/w.php?${countImg})`;
	} else if ((countTime + 5) % 10 == 7) { // 第2张图片默认无图片，比第一张延迟5s开始动画，+5保证了在第2秒开始加载图片
		countImg += 1;
		bg2Container.style = `background-image: url(https://img.bugjava.cn/w.php?${countImg})`;
	}
}, 1000);
}) */