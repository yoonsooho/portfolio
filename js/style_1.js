// JavaScript Document
/*$(".menu ul li").on("mouseover",slided)
$(".menu ul li").on("mouseout",slideu)
function slided()
{
	$(this).find(".submenu").stop().slideDown()
}
function slideu()
{
	$(this).find(".submenu").stop().slideUp()
}*/


/*$(".menu ul li").on("click",slided)
function slided()
{
	$(this).find(".submenu").stop().slideToggle()
}
$("p.mobile-menu-close").on("click",closemenu)
$("p.mobile-menu-open").on("click",openmenu)*/

$(function(win,$){//win =window라고 일단 생각하면 됨
	/*반응형 웹의 중단점에 사용할 값을 객체로 저장함*/
	var $html = $("html");
	var deviceSize =
		{
			pc:1009,
			tablet:801,
			mobile:800
		};
	/*외부에서 브라우저 너빗값이 전달되면 "scroll"인 경우 
	스크롤바가 생성되고 해당 너빗값을 반환한다.*/
	function scrollShowHide()
	{
		$html.css({"overflow-y":status});//스크롤바가 생기면
		return $html.width();
	}
	
	var sc_w1 = scrollShowHide("hidden"),//??
		sc_w2 = scrollShowHide("scroll"),//??
		sc_w3 = sc_w1 - sc_w3;
	console.log(sc_w1);
	console.log(sc_w2);
	console.log(sc_w3);
	if(sc_w3>0)
		{
			deviceSize.pc = deviceSize.pc-sc_w3;
			deviceSize.tablet = deviceSize.tablet-sc_w3;
			deviceSize.mobile = deviceSize.mobile-sc_w3;
		}
	console.log(deviceSize.pc);
	
	$(win).on("resize", function(){
		
		   var w_size = $(win).width();
		if(w_size >=deviceSize.pc && !$html.hasClass("pc"))
			{  //브라우저 창의 너빗값이 데스크탑의 너비보다 크거나 같으면 실행
				$html.removeClass("mobile tablet").addClass("pc");
				scrollShowHide("scroll");
			}
		//태블릿인 경우
		else if( w_size <deviceSize.pc && w_size >= deviceSize.tablet &&  !$html.hasClass("tablet") ){
				$html.removeClass("mobile pc").addClass("tablet");
				scrollShowHide("scroll");
		}
		//모바일인 경우
		else if(w_size <= deviceSize.mobile && !$html.hasClass("mobile"))
			{
				$html.removeClass("pc tablet").addClass("mobile");
				var menu_pos = parseInt($(".header").css("left"));
			       if(menu_pos >= 0) {
							scrollShowHide("hidden");
						}
			}
		console.log(w_size);
	});
	
	//네비게이션을 구현하는 방식이 모바일과 pc버전에서 다르게 작용
	$(function(){
		$(win).trigger("resize");
		$(document).on("mouseover focus",".pc .menu > ul >li > a , .tablet .menu > ul >li > a" , gnbPlay);
		
		$(document).on("click",".mobile .menu>ul>li:not(.no-sub)>a",gnbPlay)
		//$(document).on("click",".mobile .menu>ul>li.last-child().siblings()>a",gnbPlay)
		
		function gnbPlay()
		{
			var $ts = $(this);
			if($("html").hasClass("mobile")){
			$(".mobile .menu>ul>li>a").removeClass("on");
			$(".menu ul ul:visible").slideUp(300);
			if($ts.next().is(":hidden"))
				{
					$ts.addClass("on");
					$ts.next().stop(true,true).slideDown(300);
				}
		}
		else
		{//pc버전인 경우
			$(".menu ul ul:visible").slideUp(300);
			$ts.next().stop().slideDown(300);
		}
		}
		$(document).on("mouseleave",".pc .menu, .tablet .menu",gnbLeave);
		function gnbLeave()
		{
			$(".menu ul ul:visible").slideUp(300);
			$(".menu>ul>li>a").removeClass("on");
		}
		$(".mobile-menu-open button").on("click",function(){
			$(".header").animate({"left":0},300);
			$(".mobile-menu-close button").css({display:"block"});
			scrollShowHide("hidden");
		});
		$(".mobile-menu-close button").on("click",function(){
			$(".header").animate({"left":"-1000px"},200);
			$(".mobile-menu-close button").css({display:"none"});
			scrollShowHide("scroll");
			gnbLeave();
		});
	});
}(window,jQuery));

$("#notice-tab-wrap > h4 >a").on("click",tabmenu)

function tabmenu()
{
	$this =$(this)
	boxdiv=$this.parent().next()
	
	if(boxdiv.is(":hidden"))
		{
			$("#notice-tab-wrap > h4 >a").removeClass("on");
			$this.addClass("on");
			$("#notice-tab-wrap > div").hide()
			boxdiv.show()
		}
}











