function openNavbar() {
	document.getElementById("sideNavigationBar")
		.style.width = "50%";
}
function closeNavbar() {
	document.getElementById("sideNavigationBar")
		.style.width = "0%";
}
const close=document.querySelector(".close"); 
const open=document.querySelector(".ham"); 
const menu=document.querySelector(".menu") 
close.addEventListener("click",()=>
{ 
  menu.style.visibility="hidden";  
}) 
open.addEventListener("click",()=>
{ 
menu.style.visibility="visible"; 
})