$(function(){
	$(".searchBox").click(function(){
		console.log("111");
		$(this).addClass("line")
		.siblings().removeClass("line").
		end().
		find(':radio').attr("checked",true);
	});

		console.log("111"+$(".searchBox").length);
});