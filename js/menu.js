
	   
	   $(".mainNav>li").on({  //1단계메뉴
		   "mouseover":function(){    
			  // alert("???????");
			   $(this).find(".submenu").stop().slideDown(300);
			   
		   },
		   "mouseout":function(){
			    $(this).find(".submenu").stop().slideUp(300);
				}
		      }); 

		    $(".leftNav>li").on({  //서브메뉴 절대좌표 방식
		   "mouseover":function(){    
			  // alert("???????");
			  $(this).find(".leftmenu").stop().slideDown(300);
			   
		   },
		   "mouseout":function(){
			    $(this).find(".leftmenu").stop().slideUp(300);
				}
		  }); 

		
          /*세 번째 메뉴*/
         $(".navi>li").on({  //서브메뉴 절대좌표 방식
		   "mouseover":function(){    
			  // alert("???????");
			  $(this).find(".submenuAbs").stop().slideDown(300);
			   
		   },
		   "mouseout":function(){
			    $(this).find(".submenuAbs").stop().slideUp(300);
				}
		  }); 
		   
		   
		   

      $(".logo").on("click", function(){
		 //alert("??");
		/* $("nav.topMenu").fadeToggle();
		   $("section.imgWrapTop").fadeToggle(1000, function(){
			  alert("페이드토글동작!!!");*/
		    $("section.imgWrapTop").fadeTo(1000,0.4);
		  });


$(".logo").on({
	
	"mouseover":function(){
		    $("section.imgWrapTop").fadeTo(1000,0.4);
	},
	"mouseout":function(){
		
		    $("section.imgWrapTop").fadeTo(1000,1);
	}	
});

/*첫번째슬라이더 동작하기*/
//$(".imgSlideTop a:gt(0)").hide();
setInterval(showSlide,3000);
function showSlide()
{
	$(".imgSlideTop a:first-child").fadeOut()   //새로 선택한 요소
	.next("a").fadeIn()
	.end().appendTo(".imgSlideTop");     //선택한 요소의 끝부분에 집어 넣으라는 코드
}

	/* setInterval(function(){//이름 안주고 실행 하는 법
				  $(".imgSlideTop a:first-child").fadeOut()
				 .next('a').fadeIn()
				 .end().appendTo(".imgSlideTop");},3000);*/

/*첫번째슬라이더 동작하기끝*/


/*두번째슬라이더 (애니메이트 함수 활용하여 슬라이드 움직이기)*/
		var currentIndex =0; //처음 보여지는 이미지
		setInterval(aniSlide,3000);

		function aniSlide()
		{
			if(currentIndex < 2)
				{
					currentIndex++;
				}
			else
				{
					currentIndex =0;
				}
			
			var sidePos = currentIndex*(-800)+"px";
			$(".sliderList").animate({left:sidePos});
		}/*함수의 끝*/








	/*세번쨰슬라이더 동작하기*/
//$(".imgSlideTop a:gt(0)").hide();
/*setInterval(showSlideq,3000);
function showSlideq()
{
	$(".imgSlide a:first-child").fadeOut()   //새로 선택한 요소
	.next("a").fadeIn()
	.end().appendTo(".imgSlide");     //선택한 요소의 끝부분에 집어 넣으라는 코드
}*/   /*세번쨰 메뉴슬라이더 동작하기끝*/
	   
	 


//세번쨰 슬라이더
var imgs =2 ;//전체슬라이드 인덱스 번호 
var now =0; //현재 보이는 슬라이드 인덱스번호

slideStart();

function slideStart()
{
	$(".imgSlide > a").eq(0).siblings().animate({width:"-800px"});//jquery에서 따로 설정한width임
}

setInterval(moveSlide,3000);

function moveSlide()
{
	now=now===imgs?now=0:now+=1;//삼항조건연산자
	$(".imgSlide>a").eq(now-1).animate({width:"-800px"});//첫번째 그림
	$(".imgSlide>a").eq(now).animate({width:"800px"});//두번째 그림
	console.log(now)
}
	   


$("#notice-tab-wrap>h4>a").on("click focus mouseenter",tabmenu);

function tabmenu()
{
	var $this = $(this);
	var $divBox = $this.parent().next();//공지사항과 갤러리의 div
	
	if($divBox.is(":hidden"))
		{
			$("#notice-tab-wrap>h4>a").removeClass("on");
			$this.addClass("on");
			$("#notice-tab-wrap>div:visible").hide();//선택안한 div가 보인다면
			$divBox.show();
		}
	}


	   $("article.banner > a").on("click",popupstart)
		function popupstart()
		{
		window.open("팝업메뉴.html","_blank","left=50,top=50,width=500,height=400")
		}
	   
