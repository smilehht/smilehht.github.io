
	$(function(){
		var $search=$(".up  input");
		$search.focus(function(){
			if ($search.val()==this.defaultValue) {
				$search.val("");
			}
		}).blur(function(){
			if($search.val()==""){
				$search.val(this.defaultValue);
			}
		});


		$(".item li").hover(function(){
			$(this).find(".details").show();
		},function(){
			$(this).find(".details").hide();
		});

		var timer=null;
		$(".pics  li").hover(function(){
			clearInterval(timer);
		},function(){
			exchange();
		});
		$(".narrate li").hover(function(){

			clearInterval(timer);
			$(this).addClass("addIndex").siblings().removeClass("addIndex");
			var index=$(".narrate li").index(this);
			$(".pics  li").eq(index).addClass("current").stop(true,true).fadeIn().siblings().removeClass("current").fadeOut();

		},function(){
			exchange();
		}).eq(0).trigger("mouseleave");

		function exchange(){
			timer=setInterval(function(){
			var len=$(".narrate li").length;
			var index=$(".narrate li").index($(".narrate li.addIndex"));
				// alert(index);
			index++;
				// alert(len);
				// alert(index);
			index=(len==index? 0:index);
			$(".narrate li").eq(index).addClass("addIndex").siblings().removeClass("addIndex");
			$(".pics  li").eq(index).addClass("current").stop(true,true).fadeIn().siblings().removeClass("current").fadeOut();
			},2000);

		}
		// timer=setInterval(function(){
		// 	// clearInterval(timer);
		// 	// alert("123");
		// 	var $current=$(".direct li.addIndex").removeClass("addIndex");
		// 	var index=$current.siblings().length;
		// 	var $last=$(".direct li#lastOne");

		// 	alert($(".direct .narrate li:last-child").html());
		// 					if($current==$last){
		// 						alert("1");
		// 						$current.siblings().addClass("addIndex");}
		// 						else{
		// 							alert("2")
		// 							$current.next().addClass("addIndex");
		// 						}
		// 	$(".direct li.addIndex").next().is(":last").addClass("addIndex");
		// },1000);



	});


