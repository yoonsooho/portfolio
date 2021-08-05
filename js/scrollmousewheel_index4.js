// JavaScript Document
$(function(){
		var scrollEvent = false;
		var count = 0;
		$("html,body").on("mousewheel",function(e){
			e.preventDefault();
			var m= e.originalEvent.wheelDelta;
			var sb = $(".drive_imgbox_a").height();
			var wid = $("body").width();
			console.log(wid);
			
			if(m>1 && scrollEvent == false && count>=1 && wid>576){
				scrollEvent = true;
				count--;
				$("html,body").stop().animate({scrollTop:sb*count},
											{duration:300, complete:function(){
												scrollEvent = false;}
											} );
			}
			else if(m <1 && scrollEvent == false && count < 5 && wid>576)
				{
					scrollEvent = true;
					count++;
					$("html,body").stop().animate({scrollTop:sb*count},
												 {duration:300, complete:function(){
													 scrollEvent = false;}
												 })
				}
		});
	});