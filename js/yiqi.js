// JavaScript Document
var Dianji=0;
window.onload=function(){
	var buhao = document.getElementById("buhao");
	var hao = document.getElementById("hao");
	buhao.onclick=function(){
		Dianji++;
		if (Dianji == 1) {
			alert("考虑一下呗");
		} else if (Dianji == 2) {
			alert("你是我想要宠爱的人");

		} else if (Dianji == 3) {
			alert("一辈子尊重你,守护你");

		} else if (Dianji == 4) {
			alert("你之所愿我愿赴汤蹈火以求之");

		} else if (Dianji == 5) {
			alert("你所不愿我愿赴汤蹈火以阻之");
			Dianji = 1;
		} 

	}
	hao.onclick=function(){
		alert("庆庆，我爱你");
	}
	

}