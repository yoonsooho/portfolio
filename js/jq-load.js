// JavaScript Document
$("header nav a").on("click",function(e){
	e.preventDefault();
	var url =this.href;
	
	$("nav a.current").removeClass("current");
	$(this).addClass("current");
	
	$("#container").remove();//container은 content안에 있어서 이 함수는 없어도 될거같은데 혹시 몰라서 넣어 둔것같음
	$("#content").load(url + " #content").hide().fadeIn("slow");//url + " #content"는 url의 " #content"를 //데려온다는 뜻 " #content" #앞에 띄어쓰기 꼭 해야됨
});