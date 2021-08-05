// JavaScript Document
var allbtn = document.getElementById("terms_agree3");
//var btn = document.getElementsByName("agree")
var btn = document.querySelectorAll(".chkbox")

/*allbtn.onclick = function(){
			if(allbtn.checked == false)
				{
					for(var i=0;i<btn.length; i++)
						{
							btn[i].checked = false;
						}
				}
					else {
						for(var i=0;i<btn.length; i++)
							{
								btn[i].checked = true;
							}
					}
				
		};*/

/*모두동의클릭시모두선택되는 함수*/
function allchk()
{
	if(allbtn.checked == false){
					for(var i=0;i<btn.length; i++)
						{
							btn[i].checked = false;
						}
				}
					else {
						for(var i=0;i<btn.length; i++)
							{
								btn[i].checked = true;
							}
					}
}
allbtn.addEventListener("click",allchk,false);



/*동의선택해제시 모두동의가 선택해제되는 함수*/
for(var i=0; i<btn.length;i++)
	{
		btn[i].onclick = function()
		{
			if(this.checked == false)
				{
					allbtn.checked = false;
				}
		};
	}















