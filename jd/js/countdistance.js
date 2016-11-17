window.onload=function(){
	// window.onresize=function(){
	// var screen= document.body.clientWidth;
	// var side=document.getElementById('elevator');
	// // alert(side)
	// var half=Math.ceil((screen-1210)/2);
	// side.style.left=half-40+'px';

	// }


	/*banner运动开始*/
	 var banner=document.getElementById('banner');

	 /*获取所有点切换元素*/
	 var oDotteds=banner.getElementsByTagName('div')[0];
	 var aDotted=banner.getElementsByTagName('span');

	 /*获取所有海报元素*/
	 var sliders=getByClass(banner,'sliders')[0];
	 var aLi=sliders.getElementsByTagName('li'); 
alert(0)
	  /*获取海报左右按钮*/
	// var oTab=getByClass(banner,"")
	 var oTab_prev=getByClass(banner,"btn_prev")[0];
	 var oTab_next=getByClass(banner,"btn_next")[0];
	
	
	//  var n=0;
	 /*计算按钮数量*/

	 // for(var i=0;i<aLi.length;i++){
 	// 	aDotted[i].index=i;
 	// 	aDotted[i].onmouseover=function(){
 	// 		n++;
 	// 		for(var j=0;j<aLi.length;j++){
 	// 			animate(aLi[j],{opacity:0})	
 	// 			aDotted[j].className="";
 	// 		}
 			
 	// 		aLi[this.index].style.zIndex=n;
 	// 		animate(aLi[this.index],{opacity:100})
 	// 		this.className="currery";
 			
 	// 	}
	 // }

 // 	oTab_prev.onclick=tab_02;
 // 	oTab_next.onclick=tab_01;
 // 	function tab_01(){
 // 		clearInterval(timer);
 // 		for(var i=0;i<aLi.length;i++){
 // 			animate(aLi[i],{opacity:0});
 // 		}

 // 		if(n==aLi.length){
 // 			n=0;
 // 		}

 // 		for(var i=0; i<aLi.length; i++){
 // 			aDotted[i].className="";
 // 		}
 // 		aDotted[n].className="currery";
 // 		animate(aLi[n],{opacity:100});
 // 		n++;
 // 		console.log(n)
 // 		//tag_btn()

 // 	};

 // 	function tab_02(){
 // 		//clk=true;
 // 		clearInterval(timer);
 // 		for(var i=0;i<aLi.length;i++){
 // 			animate(aLi[i],{opacity:0});
	// 		aDotted[i].className="";
 // 		}

 // 		if(n<0){
 // 			n=aLi.length-1;
 // 		}

 // 		aDotted[n].className="currery";
 // 		animate(aLi[n],{opacity:100});

 // 		n--;
 // 	};

	// var timer=setInterval(tab_01,2000);
	// banner.onmouseover=function(){
	// 	clearInterval(timer);
	// }

	// banner.onmouseover=function(){
	// 	timer=setInterval(tab_01,2000);
	// }


}