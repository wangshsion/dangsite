/*获取商品box*/
var pampers=document.getElementById("pampers");

/*获取商品大图*/
var bigPic=wangFrame.getByClass(pampers,"big_pic")[0];
var aBigPic=bigPic.children;

//获取详情左边部份
var del_left=wangFrame.getByClass(pampers,"del_left")[0];

//获取左右按钮
var leftArrow=wangFrame.getByClass(pampers,"left_arrow")[0];
var rightArrow=wangFrame.getByClass(pampers,"right_arrow")[0];


//获取所有小图
var aSmallPic=wangFrame.getByClass(pampers,"small_pic")[0].children;

//放大图框
var zoomOutMirror=wangFrame.getByClass(pampers,"zoomOutMirror")[0];
var magnify=zoomOutMirror.children;

var n=0, sign1=0, oTop=0, timer=null;


window.onscroll=function(){
	
	oTop=document.documentElement.scrollTop || document.body.scrollTop;
	console.log(oTop)
	
}
var mirror=document.createElement("div");
	mirror.className="mirror";
	bigPic.appendChild(mirror);

	bigPic.onmousemove=function(ev){
		ev=ev||event;

		mirror.style.display=zoomOutMirror.style.display="block";
		var l=ev.clientX-wangFrame.offsetLeft(bigPic)-(mirror.offsetWidth/2);
		var t=ev.clientY-wangFrame.offsetTop(bigPic)-mirror.offsetHeight/2+oTop;

		
		if(l<0){
			l=0;
		}

		if(t<0){
			t=0;
		}

		if(l>aBigPic[0].offsetWidth-mirror.offsetWidth){
			l=aBigPic[0].offsetWidth-mirror.offsetWidth;
		}

		if(t>aBigPic[0].offsetHeight-mirror.offsetHeight){
			t=aBigPic[0].offsetHeight-mirror.offsetHeight;
		}

		
		mirror.style.left=l+"px";
		mirror.style.top=t+"px";
		 

		var rate_l=l/(aBigPic[0].offsetWidth-mirror.offsetWidth);
		var rate_t=t/(aBigPic[0].offsetHeight-mirror.offsetHeight);

		
		for(var i=0; i<aSmallPic.length; i++){
			magnify[i].style.zIndex=0;
		}

		magnify[sign1].style.zIndex=9;
		magnify[sign1].style.top=(zoomOutMirror.offsetHeight-magnify[0].offsetHeight)*rate_t+"px";
		magnify[sign1].style.left=(zoomOutMirror.offsetWidth-magnify[0].offsetWidth)*rate_l+"px";	
	
		
	};


	bigPic.onmouseout=function(){
		mirror.style.display=zoomOutMirror.style.display="none";
	};

	for(var i=0;i<aSmallPic.length;i++){
		aSmallPic[i].index=i;
		
		aSmallPic[i].onclick=function(){
			for(var j=0; j<aSmallPic.length; j++){
				aSmallPic[j].className="";
				aBigPic[j].className="";
				
			}
			this.className="current";
			sign1=this.index;
			aBigPic[this.index].className="current";
		};
	}



	//左右详情图左右箭头切换
	leftArrow.onclick=function(){
		n--;
		if(n<0){
			n=aSmallPic.length-1;
		}
		wangFrame.cliTab(n,aSmallPic,aBigPic,"current");
	};

	rightArrow.onclick=function(){
		n++;
		if(n>aSmallPic.length-1){
			n=0;
		}
		wangFrame.cliTab(n,aSmallPic,aBigPic,"current");
	};

	//中间尺码选择
	//获取所有的尺码框；
	var clk=null;
	var oSizeBox=document.getElementById("size").children[1];
	var aSize=document.getElementById("size").children[1].children;
	for(var i=0 ; i<aSize.length ; i++){
		
		wangFrame.addEvent(aSize[i],"mouseover",	
		function(){
			
			for(var j=0; j<aSize.length; j++){
				aSize[j].className="";
				aSize[j].index=j;

				aSize[j].onclick=function(){
					
					for(var k=0;k<aSize.length; k++ ){
						aSize[k].className="";	
					}

					this.className="current choosed";
					clk=this.index;
				}	
			};

					
			this.className="current";
			if(clk!=null){
				aSize[clk].className="current choosed";	
			}else{aSize[0].className="current choosed"};
		});//监听mouseover事件

		//为尺码表加上mouseout事件
		oSizeBox.onmouseleave=function(){
			for(var j=0; j<aSize.length; j++){
				if(aSize[j].className=="current"){
					aSize[j].className="";
				}	
			}
		}

	};

	//定单数增加
	var oAddOrder=document.getElementById("addOrder");
	var oAddBtn=wangFrame.getByClass(oAddOrder,"add")[0];
	var oSubtract=wangFrame.getByClass(oAddOrder,"subtract")[0];
	var oOderBox=oAddOrder.getElementsByTagName("input")[0];
	var orderInt=1;

	oAddBtn.onclick=function(){
		orderInt++;
		oOderBox.value=orderInt;
	}

	oSubtract.onclick=function(){
		orderInt--;
		if(orderInt<1){
			orderInt=1;	
		}
		
		oOderBox.value=orderInt;
	}

	oOderBox.onblur=function(){
		if(this.value==""){
			this.value=1;
		}
		
	};

	//相关商品推荐切换
	var oTabBar=document.getElementById("tab_bar");
	var aTabBarBtn=oTabBar.children;


	//下面相关商品box
	var oRelateGoods=document.getElementById("relateGoods");

	var aRelateGood=oRelateGoods.children;
	

	for(var i=0; i<aTabBarBtn.length; i++){

		aTabBarBtn[i].index=i;
		aTabBarBtn[i].onclick=function(){
			for(var j=0; j<aTabBarBtn.length; j++){
				aTabBarBtn[j].className="";
				aRelateGood[j].style.display="none";
			}
			this.className="current";
			aRelateGood[this.index].style.display="block";
		}

		
	};

	//左边菜单切换
	var subNav=document.getElementsByClassName("nav-lists")[1]
	var subNavList=subNav.getElementsByTagName("li");
	var oPopup=document.getElementsByClassName("popup");

	var oGoodsList=document.getElementById("allGoodsList");

	var subNav=document.getElementById("subNav");
	oGoodsList.onmouseover=function(){
		clearInterval(timer);
		subNav.style.zIndex=9;
		
	}

	oGoodsList.onmouseout=function(){
		
		timer=setInterval(function(){
			subNav.style.zIndex=-1;
		},50)

		subNav.onmouseenter=function(){
			clearInterval(timer);
		}

		subNav.onmouseleave=function(){
			this.style.zIndex=-1;

		}
		
	}
	
	for(var i=0; i<subNavList.length; i++){
		subNavList[i].index=i;
		oPopup[i].index=i;
		subNavList[i].onmouseover=function(ev){
			ev=ev||event;
			clearInterval(timer);
			for(var j=0; j<oPopup.length; j++){
				oPopup[j].style.display="none";
			};

			oPopup[this.index].style.display="block";
			oEv.preventDefaulf();
		};

		/*out时清除*/
		subNavList[i].onmouseout=function(ev){
			ev=ev||event;
			timer=setInterval(function(){
				for(var j=0; j<oPopup.length; j++){
					oPopup[j].style.display="none";
				};
			},50);
			oEv.preventDefaulf();
			
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
	

	

	
		



//}
