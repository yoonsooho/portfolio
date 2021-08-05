// JavaScript Document
/*슬라이더*/
  $('.slider_box').bxSlider({
    auto:true,
			 pause:3000,
			autoHover:true,
			autoControls:true,
			autoControlsCombine:true
  });


//메뉴 슬라이더

$(".menu li").on("mouseover",slided);
$(".menu li").on("mouseout",slideu);

function slided()
{
	$(this).find(".submenu").stop().slideDown()
}

function slideu()
{
	$(this).find(".submenu").stop().slideUp()
}



$("ul.mobile_menu>li").on("click",slidemd)

function slidemd(e)
{
	
	if($(this).find(".mobile_submenu").is(":hidden"))
		{
			//e.preventDefault();
			$(this).find(".mobile_submenu").slideDown();
		}
		
 else if($(this).find(".mobile_submenu").is(":visible"))
		{
			//e.preventDefault();
			$(this).find(".mobile_submenu").slideUp()
		}
}


$("ul.mobile_menu>li").on("click",function(){
	
	if($(this).find(".up").is(":visible"))
		{
	$("ul.mobile_menu>li div").addClass("down");
	$("ul.mobile_menu>li div").removeClass("up");
		}
		else if($(this).find(".down").is(":visible"))
		{
	$("ul.mobile_menu>li div").addClass("up");
	$("ul.mobile_menu>li div").removeClass("down");
		}
})






/*best model mouse over*/
$(".a").on("mouseenter",ain);
$(".a").on("mouseleave",aout);

$(".b").on("mouseenter",bin);
$(".b").on("mouseleave",bout);

$(".c").on("mouseenter",cin);
$(".c").on("mouseleave",cout);
function ain()
{
	$(".a>img:first-child").stop().fadeIn(300)
	$(".a>img:last-child").stop().fadeOut(300)
}
function aout()
{
	$(".a>img:last-child").stop().fadeIn(300)
	$(".a>img:first-child").stop().fadeOut(300)
}


function bin()
{
	$(".b>img:first-child").stop().fadeIn(300);
	$(".b>img:last-child").stop().fadeOut(300);
}
function bout()
{
	$(".b>img:last-child").stop().fadeIn(300)
	$(".b>img:first-child").stop().fadeOut(300)
}


function cin()
{
	$(".c>img:first-child").stop().fadeIn(300)
	$(".c>img:last-child").stop().fadeOut(300)
}
function cout()
{
	$(".c>img:last-child").stop().fadeIn(300)
	$(".c>img:first-child").stop().fadeOut(300)
}

/*top_button*/
$(window).on("scroll",function(){
			var sc_top = $(this).scrollTop();
	//console.log(sc_top);
			if( sc_top > 300)
				{
					$(".top_button").fadeIn("normal");
				}
			else
				{
					$(".top_button").fadeOut("normal");
				}
	if(sc_top > 1050)
		{
			$(".best_model").animate({width:"90%"});
			$(".best_model>h1").css({display:"inline-block"},500);
			$(".best_model_imgbox").animate({width:"90%"});
			$(".best_model_imgbox span").css({fontSize:"1.8em"},500);
		}
	if(sc_top > 2350)
		{
			$('.map_text').animate({"right":"8%","opacity":"1"},1000);
			$('.company').animate({"right":"15%","opacity":"1"},1000);
			$("#map").animate({"left":"8%","opacity":"1"},1000);
			$(".come_text").animate({"left":"8%","opacity":"1"},1000);
			$(".media").animate({"left":"8%","opacity":"1"},1000);
			
		}
	if(sc_top > 600&&sc_top < 1500)
		{
			$("div.youtube_play").animate({right:"81%",opacity:"1"},500);
		}
	
		});

		$(".top_button").on("click",function(){
			$("html,body").animate({"scrollTop":"0"},400);
			return false;//a테그
});


$(".media>ul>li:nth-child(2)>a").on("click",modal_up);

function modal_up(e)
{
	$(".modal_boxtop").animate({left:"5%",opacity:"1",zIndex:"1000"},1000);
	e.preventDefault();
}

$(".modal_boxtop > .modal_box >.modal_closebutton").on("click",modal_down);

function modal_down()
{
	$(".modal_boxtop").animate({left:"-40%",opacity:"0",zIndex:"0"},1000);
}


$(".media > ul>  li:nth-child(1) > a").on("click",News_modal_up);

function News_modal_up(e)
{
	$(".News_modal_boxtop").animate({left:"5%",opacity:"1",zIndex:"100"},1000);
	e.preventDefault();
}

$(".News_modal_boxtop > .modal_box >.modal_closebutton").on("click",News_modal_down);

function News_modal_down()
{
	$(".News_modal_boxtop").animate({left:"-40%",opacity:"0",zIndex:"0"},1000);
}





/*모바일 메뉴*/


$(".mobile_header #trigger").on("click",function(){
	$(this).toggleClass("onn");
	$(".mobile_menu").fadeToggle({display:"none"});
	$(".mobile_bg").fadeToggle({display:"block"});
});

























