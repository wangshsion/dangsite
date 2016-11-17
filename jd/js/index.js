
window.onload=function(){
	var screen= document.documentElement.clientWidth || document.body.clientWidth;
	var side=document.getElementById('elevator');
	
	var half=Math.ceil((screen-1210)/2);
		side.style.left=half-40+'px';




	/*banner运动开始*/
	 var banner=document.getElementById('banner');

	 /*获取所有点切换元素*/
	 var oDotteds=banner.getElementsByTagName('div')[0];
	 var aDotted=oDotteds.getElementsByTagName('span');


	 /*获取所有海报元素*/
	 var sliders=wangFrame.getByClass(banner,'sliders')[0];
	 var aLi=sliders.getElementsByTagName('li'); 

	 /*获取海报左右按钮*/
	 var oTab_prev=wangFrame.getByClass(banner,"btn_prev")[0];
	 var oTab_next=wangFrame.getByClass(banner,"btn_next")[0];
	
	 
	  var n=0;

	  var timer=null,timer2=null;

	
	
	
	//添加点击事件
	for(var i=0;i<aDotted.length; i++ ){
		aDotted[i].index=i;
		
		//给小按钮加事件
		
		aDotted[i].onmouseover=function(){

		clearInterval(timer2);
		for(var j=0; j<aDotted.length; j++){

			//清除所有的小按钮样式
			aDotted[j].className="";


		}
		
		//为当前的小按钮加样
			n=this.index;
			posterSlide(n);
			console.log(n)
			this.className="currery";

		}
		

		//给左右按钮加事件
		oTab_prev.onclick=function(){//给左按钮加事件
			n--
			if(n<0){
				n=aLi.length-1;
			}
			posterSlide(n)	
		}

		oTab_next.onclick=nextRun;
		function nextRun(){//给左按钮加事件
			n++
			if(n>aLi.length-1){
				n=0;
			}
			posterSlide(n)	
		}

		/*鼠标放在海报上停止轮播*/
		banner.onmouseenter=function(){
			clearInterval(timer2);
			 oTab_next.style.zIndex=oTab_prev.style.zIndex=99;


		}

		banner.onmouseleave=function(){
			autoRun();
			oTab_next.style.zIndex=oTab_prev.style.zIndex=-1;
		}
		
	};

	function autoRun(){
		clearInterval(timer2);
		timer2=setInterval(function(){
			nextRun();
		},3000);//自动播放
	};

	autoRun();
	function posterSlide(n){
		for(var i=0; i<aLi.length; i++){
			aLi[i].style.zIndex=0;
			aLi[i].style.opacity=0;
			aDotted[i].className="";
		}

		if(n==0){
		aLi[n+1].style.opacity=1;
		}else if(n<aLi.length){
			aLi[n-1].style.opacity=1;
		}
		aLi[n].style.zIndex=1;

		//aLi[n].style.opacity=1;
		wangFrame.move(aLi[n],{"opacity":100},500);
		aDotted[n].className="currery";

		
	};


	//左边菜单切换
	var subNav=document.getElementsByClassName("nav-lists")[1]
	var subNavList=subNav.getElementsByTagName("li");
	var oPopup=document.getElementsByClassName("popup");
	
	for(var i=0; i<subNavList.length; i++){
		subNavList[i].index=i;
		oPopup[i].index=i;
		subNavList[i].onmouseover=function(){
			clearInterval(timer);
			for(var j=0; j<oPopup.length; j++){
				oPopup[j].style.display="none";
			};

			oPopup[this.index].style.display="block";
		};

		/*out时清除*/
		subNavList[i].onmouseout=function(){
			timer=setInterval(function(){
				for(var j=0; j<oPopup.length; j++){
					oPopup[j].style.display="none";
				};
			},50);
			
		};

		/*弹出层事件*/
		oPopup[i].onmouseenter=function(){

			subNavList[this.index].className="cover";
			clearInterval(timer);
			
		};

		oPopup[i].onmouseleave=function(){
			for(var j=0; j<oPopup.length; j++){
				oPopup[j].style.display="none";
				subNavList[j].className="";
			};

		};
		
	};
	
	
	/*京东选项卡*/

	/*1楼*/
	wangFrame.optionTaggle("f1_taggle","flo_1_taggle");

	/*2楼*/
	wangFrame.optionTaggle("f2_taggle","flo_2_taggle");

	/*3楼*/
	wangFrame.optionTaggle("f3_taggle","flo_3_taggle");

	/*4楼*/
	wangFrame.optionTaggle("f4_taggle","flo_4_taggle");

	/*5楼*/
	wangFrame.optionTaggle("f5_taggle","flo_5_taggle");

	/*6楼*/
	wangFrame.optionTaggle("f6_taggle","flo_6_taggle");
	
	
	function hasClass(obj, cls){
		return obj.className.match(new RegExp("(\\s|^)"+cls+"(\\s|$)"));
	};

	function removeClass(obj, cls){
		if(hasClass(obj,cls)){
			var reg = new RegExp("(\\s|^)"+cls+"(\\s|$)");
			obj.className = obj.className.replace(reg, "");
		}
	};

	function addClass(obj, cls){
		if(!hasClass(obj, cls)){
			obj.className += " " + cls;
		}
	};

	var oScreenH=document.documentElement.clientHeight || document.body.clientHeight;
	var oServiceBar=document.getElementById("serviceBar");
		oServiceBar.style.top=parseInt((oScreenH-oServiceBar.offsetHeight)/2)+"px";

	window.onresize=window.onscroll=function(){
		var top=document.documentElement.scrollTop || document.body.scrollTop;
			oScreenH=document.documentElement.clientHeight || document.body.clientHeight;

			screen= document.documentElement.clientWidth || document.body.clientWidth;
			half=Math.ceil((screen-1210)/2);
			side.style.left=half-40+'px';

		var oBuilding=document.getElementById("building");
		var oElevator=document.getElementById("elevator");


		//计算屏幕高度中心	
		var iM=parseInt((oScreenH-oServiceBar.offsetHeight)/2);

		var menus=document.getElementById("elevator").getElementsByTagName("a");
		var items=wangFrame.getByClass(document.getElementById("building"),"item");

		var floSign=wangFrame.getByClass(oBuilding,"flo-sign");
		var currentId="";

		//左边服务栏自动居中
		oServiceBar.style.top=iM+"px";
		//判断楼层显示不是隐藏
		if(top>items[0].offsetTop-oScreenH){
			oElevator.style.display="block";

		}else{
			oElevator.style.display="none";
		}

		for(var i=0; i<items.length; i++){
			var _items=items[i];
			var _itemsTop=_items.offsetTop;
			if(top>_itemsTop - 500){
				currentId = _items.id;
				
			}else{
				break;
			}
		}

		if(currentId){
			for(var j = 0; j < menus.length; j++){
				var _menu = menus[j];
				var _floSign = floSign[j];
				var _href = _menu.href.split("#");
				
				if(_href[_href.length - 1] != currentId){
					removeClass(_menu.parentNode, "currery");
					removeClass(_floSign, "current");

				}else{
					addClass(_menu.parentNode, "currery");
					addClass(_floSign, "current");
				}
			}
		}
	}
	

};
