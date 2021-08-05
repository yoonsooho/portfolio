// JavaScript Document
$(".header .menu li a").on("click",function(e){
	e.preventDefault();
	var url = this.href;
	
		$(".container").remove();
		$(".index_3_container").remove();
	
	$("#container_top").load(url + " #container_top").hide().fadeIn("slow");
})