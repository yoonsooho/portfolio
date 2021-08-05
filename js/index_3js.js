// JavaScript Document

$("#tab02").on("click",con2up);
$("#tab01").on("click",con2down);

function con2up()
{
	$(".swipe_topbox").css({display:"block"});
	$(".swipe_topbox").css({height:"100%"});
}
function con2down()
{
	$(".swipe_topbox").css({display:"none"});
}