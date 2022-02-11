$(function() {
	
	videolist = [
	"https://bfq.bugjava.cn/player/?url=https://v.douyin.com/d1eWkNA/",
	"https://bfq.bugjava.cn/player/?url=https://h5.pipix.com/s/d1ehHjr/",
	"https://bfq.bugjava.cn/player/?url=https://v.douyin.com/d1JnoMh/","https://bfq.bugjava.cn/player/?url=https://vkceyugu.cdn.bspapp.com/VKCEYUGU-b1ebbd3c-ca49-405b-957b-effe60782276/8309acd6-1247-4b30-96b3-7b625e3d0153.mp4"
	];
	
	for (let i = 1; i <= videolist.length; i++) {
		$("#box").append('<div class="s1" name="' + i + '">' + i + '</div>');
	}
	var num;
	$(function() {
		$(".s1").click(function() {
			num = $(this).attr("name");
			$(".s1").removeClass("s2");
			$(this).addClass("s2");
			changeVideo(num);
		})
	});

	function changeVideo(num) {
		document.getElementById("xjjvideo").src = videolist[num - 1];
	}

});
