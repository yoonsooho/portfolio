// JavaScript Document
/*search*/
(function(){
	var $imgs=$('#gallery  a');
	var $search = $("#filter-search");
	var cache = [];
	
	$imgs.each(function(){
		cache.push({
			element:this,
			text:this.className.trim().toLowerCase()
		});
	});
	
	function filter(){
		var query = this.value.trim().toLowerCase();
		cache.forEach(function(img){
			var index = 0;
			
			if(query){
				index = img.text.indexOf(query);
			}
			img.element.style.display = index === -1 ? "none":"inline-block";
		});
	}
	
	if ("oninput" in $search[0]){
	 	$search.on("input",filter);
		}
  else{
 $search.on("keyup",filter);
 }
	
}());