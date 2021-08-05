// JavaScript Documentvar scrollEvent = false;
$(function(){
		var scrollEvent = false;
		var count = 0;
		$("html,body").on("mousewheel",function(e){
			e.preventDefault();
			var m= e.originalEvent.wheelDelta;
			var sb = $(".a").height();
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


/*모달 그림 클릭하면 큰그림으로 바뀌는 것*/
/*모바일시 newtextclose1을 보이지 않게 해놨음으로 모바일 버전때 js.js에 넣어두면 오류발생으로 인해
여기에 넣음
*/
var bicPic = document.querySelector("#bigpic")
var smallPic = document.querySelectorAll(".aa")
var newtext = document.querySelector(".News_text1");
var newtextclose1 = document.querySelector(".newtextclose");
console.log(smallPic);
for(var i = 0;i<smallPic.length;i++)
			{
				smallPic[i].addEventListener("click",chImg,false);
				
		function chImg(e)
		{
			bicPic.src=this.src
					newtext.style.display = "block";
			e.preventDefault();
			  		
		}
			}

newtextclose1.onclick = function()
{
	newtext.style.display = "none";
};