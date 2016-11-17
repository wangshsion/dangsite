/*走马灯效果*/

var  wangFrame={
	marquee:function (id,speed){
		var oDiv=document.getElementById(id);
		var oUl=oDiv.getElementsByTagName('ul')[0];
		var aLi=oUl.getElementsByTagName('li');
		var w=400*aLi.length;
		oUl.innerHTML+=oUl.innerHTML;
		oUl.style.width=2*w+"px";
		var n=0;
		var timer
		timer=setInterval(move,30);
		function move(){
			n-=speed;
			if(n<-w){
				n=0
			}
			oUl.style.left=n+'px';
		}
		oUl.onmouseover=function(){
			clearInterval(timer);
		}

		oUl.onmouseout=function(){
			clearInterval(timer);
			timer=setInterval(move,30);
		}
	},

 /*初级轮播*/

	slider:function (id,time,toward){
		var slides=document.getElementById(id);

		var oDots=slides.getElementsByTagName('div')[0];
		
		var aBtn=oDots.getElementsByTagName('span');
		console.log(oDots.innerHTML)
		var oUl=slides.getElementsByTagName('ul')[0];
		var aBan=oUl.getElementsByTagName('li');
		
		var n=0;
		var html="";

		for(var i=0;i<aBan.length;i++){
			html+='<span></span>';	
		}
		oDots.innerHTML=html;
		console.log(oDots.innerHTML)
		
		aBtn[0].className="active";

		toward=toward||400;
		
		for(var i=0;i<aBan.length;i++){
			aBtn[i].index=i;
				aBtn[i].onmouseover=function(){
					for(var i=0;i<aBtn.length;i++){
					aBan[i].style.left=toward+"px";
					aBtn[i].className="";
					}
					aBan[this.index].style.left=0;
					this.className="active";				
				}
			}

		function autoRun(){

			time=time||2000;
			var timer=setInterval(function(){

				for(var i=0;i<aBan.length;i++){	

				aBan[i].style.left=toward+'px';
				aBtn[i].className="";
				}
				if(n>3){n=0;}
				aBan[n].style.left=0;
				aBtn[n].className="active";
				n++;		
		
			},time)
			slides.onmouseover=function(){
				clearInterval(timer)
			}		
		}
		slides.onmouseout=function(){autoRun()};
		autoRun();			
	},


	/*选项卡*/
	options:function (id,auto){
		var options=document.getElementById(id);
		var aLi=options.getElementsByTagName("li");

		//var aBtn=options.getElementsByTagName("a");
		var taggleBox=document.getElementById("flo_1_taggle");
		var aBoxes=taggleBox.children;
		alert(aBoxes.length)
		var n=0;	//申明一个计算器变量;
		var timer//定时器变量；

		/*为按钮加上鼠标掌滑过事件*/
		for(var i=0;i<aLi.length;i++){
			aLi[i].onmouseover=function(){
				for(var i=0;i<aLi.length;i++){
					aLi[i].className="";
					aBoxes[i].style.display="none";
				}

					this.className="active";
					aBoxes[this.index].style.display="block";
					clearInterval(timer)
				}

			aLi[i].onmouseout=function(){
				for(var i=0;i<aLi.length;i++){
					aLi[i].index=i;
					aLi[i].className="";
					clearInterval(timer)
					n=this.index+1;
					if(auto){
						timer=setInterval(autoplay,1000);
					}				

				}	
			}
		}



		/*自动播放模块*/
		function autoplay(){
		for(var i=0;i<aLi.length;i++){
			aLi[i].className="";
		}

		if(n==aLi.length){n=0};
		
		aLi[n].className="sub_item";
		n++;
							
		}

		/*检查传进来的值是否为true,再决定是否自动播放*/
		if(auto){
			timer=setInterval(autoplay,1000);
		}
			
	},

	clkTab:function (parent,auto){
		
		var aLi=parent.getElementsByTagName("li");

		//var aBtn=options.getElementsByTagName("a");
		var taggleBox=document.getElementById("flo_1_taggle");
		var aBoxes=taggleBox.children;
		alert(aBoxes.length)
		var n=0;	//申明一个计算器变量;
		var timer//定时器变量；

		/*为按钮加上鼠标掌滑过事件*/
		for(var i=0;i<aLi.length;i++){
			aLi[i].onclick=function(){
				for(var i=0;i<aLi.length;i++){
					aLi[i].className="";
					aBoxes[i].style.display="none";
				}

					this.className="active";
					aBoxes[this.index].style.display="block";
					clearInterval(timer)
				}

			
		}
	},

	//京东选项卡
	optionTaggle:function(id1,id2){
		
		//上面的按钮
		
		var options=document.getElementById(id1);
		var aLi=options.getElementsByTagName("li");

		//下面的box
		var taggleBox=document.getElementById(id2);
		var aBoxes=taggleBox.children;

		var timer//定时器变量；

		/*为按钮加上鼠标掌滑过事件*/
		for(var i=0 ; i<aLi.length ; i++){
			
			aLi[i].index=i;
			aLi[i].onmouseover=function(){
				for(var j=0;j<aLi.length;j++){
					aLi[j].className="";
					aBoxes[j].style.display="none";
				}
				
				this.className="active";
				aBoxes[this.index].style.display="block";

			};	
			
		};

		return false;
	},
	
	/*表单的填充*/
	
	placeHolder:function (obj,txt){
		obj.className="cover";	
		obj.value=txt;
		obj.onfocus=function(){
			if(this.value==txt){
				this.value="";
				obj.className="discover";
			}
		}

		obj.onblur=function(){
			if(this.value==""){
				this.value=txt;
				obj.className="cover";
			}
		}	
	},

	/*拖拽框*/
	drag:function (obj,head){//obj,拖拽的主体，head，如果有，就只能拖拽head;
		var head=head||obj;	//如果没有传入第二个参数，第2个参数就等于第1个参数；
		var screenW=document.documentElement.clientWidth;//获取用户屏幕宽度
		var screenH=document.documentElement.clientHeight;//获取用户屏幕高度
		
		head.onmousedown=function(ev){	//当鼠标在元素上按下左键时触发
			var oEv=ev||window.event;	//事件对象的兼容写法，后者兼容IE;
			var disX=oEv.clientX-obj.offsetLeft;	//获取鼠标点击坐标距离
			var disY=oEv.clientY-obj.offsetTop;
			document.onmousemove=function(ev){
				var oEv=ev || window.event;
				var l=oEv.clientX-disX;
				var t=oEv.clientY-disY;

				if(l<0){
					l=0
				}

				if(l>screenW-obj.offsetWidth){
					l=screenW-obj.offsetWidth;
				}

				obj.style.left=l+"px";


				if(t<0){
					t=0
				}

				if(t>screenH-obj.offsetHeight){
					t=screenH-obj.offsetHeight;
				}
				obj.style.top=t+"px"
				}

			document.onmouseup=function(){
				document.onmousemove=null;
			}
		}
		return false;
	},

	/*通过计算让一个盒子居中显示*/
	center:function (obj){
		obj.style.display="block";
		var l=(document.documentElement.clientWidth-obj.offsetWidth)/2;
		var t=(document.documentElement.clientHeight-obj.offsetHeight)/2;
		obj.style.left=l+"px";
		obj.style.top=t+"px";
	},


	/*运动框架*/
	getStyle:function(obj,stl){
		var val;
		val=obj.currentStyle? currentStyle[stl]:getComputedStyle(obj,false)[stl];
		if(stl=="opacity"){
			val=Math.round(val*100);
		}else{
			val=parseInt(val);
		}
		return val;
	},

	move:function (obj,moveJson,speed,fn){//对象 运动模式 移动时间 回调
		var prd_speed={ //预定义 predefine
			veryslow:	5000,
			slow:		2000,
			normal:		1000,
			fast:		700,
			veryfast:	300
		};

		//如果输入预定速度的字符串，就进行转换
		if(speed){
			if(typeof stopTime=='string') speed=prd_speed[speed];
		}else{
			speed=prd_speed.normal;
		}

		//-----------------------------------------------------
		var start={};//起点json
		var dis={};//距离json

		for(var key in moveJson){
			start[key]=this.getStyle(obj, key);
			dis[key]=moveJson[key]-start[key];//距离 distance
		}

		//分段
		var count=parseInt(speed/30);////次数
		var n=0;//步进

		//定时器---------------------------------------------
		clearInterval(obj.timer);//使用对象属性，定义计时器变量
		obj.timer=setInterval(function(){
			n++;
			for(var key in moveJson){
				var a=1-n/count;  //a的值会越来越小
				a=Math.floor(a*100)/100;
				var step_dis=start[key]+dis[key]*(1-a*a*a*a);

				if(key=='opacity'){//透明
					obj.style.filter='alpha(opacity:'+step_dis+')';
					obj.style.opacity=step_dis/100;
				}
				else{//其他
					obj.style[key]=step_dis+'px';
				}
			};

			//取消定时器
			if(n==count){
				clearInterval(obj.timer);
				fn && fn();
			};

		},30)
	},

	

	getByClass:function (oParent,className){
		
		if(document.getElementsByClassName) return oParent.getElementsByClassName(className);
		else{
			var arr=[]; //容器
			var aEl=oParent.getElementsByTagName('*');//所有标签
			for(var i=0;i<aEl.length;i++){
				if(new RegExp(className+'\\b','g').test(aEl[i].className)) arr.push(aEl[i]);//向数组中添加
			}
		return arr;
		}
	},


	getStyle:function(obj,name){
		if(obj.currentStyle){
			return obj.currentStyle[name]
		}else{
			return getComputedStyle(obj,false)[name];
		}
	},


	animate:function (obj,json,fn) {
		clearInterval(obj.time);
		obj.time = setInterval(function () {
			var stop = true;
			for (var attr in json) {
				var cur = 0;

				if (attr == 'opacity') {
					cur = parseInt(parseFloat(wangFrame.getStyle(obj, attr)) * 100);
				}
				else {
					cur=parseInt(wangFrame.getStyle(obj, attr));
				}

				var speed = (json[attr] - cur) / 6;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

				if (json[attr] != cur) {
					stop = false;
				}

				if (attr == 'opacity') {
					obj.style.opacity = (speed+cur)/ 100;
					obj.style.filter = 'alpha(' + (speed + cur) + ')';
				} else {
					obj.style[attr] = speed + cur + 'px';
				}
			}

			if (stop) {
				clearInterval(obj.timer);
				fn && fn();
			}
		}, 30);
	},


	/*轮播*/

	changePho:function (id,showNum){
		var banner=document.getElementById(id);
		var oUl=slider.getElementsByTagName("ul")[0];
		var aLi=oUl.children;
		//var aBtn=slider.getElementsByTagName("ol")[0].children;
		
		//按钮
		var prevBtn=banner.children[2].children[0];
		var nextBtn=banner.children[2].children[1];


		var ulW=wangFrame.getStyle(aLi[0],"width");
		oUl.style.width=ulW*aLi.length+"px";
		var n=0;


		//插入切换按钮
		var dotted=document.createElement("div");
		dotted.className="tab_dotted_wrap";

		for(var c=0; c<aLi.length; c++){
			dotted.innerHTML+='<span class="tab_dotted">'+(showNum ? c+1 : "")+'</span>';
		}

		banner.appendChild();
		var aBtn=wangFrame.getByClass("banner","tab_dotted_wrap")[0].children;
		aBtn[0].className="active";

		
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].index=i;
			//function(index){}
			aBtn[i].onclick=function(){
				for(var j=0; j<aBtn.length; j++){
					aBtn[j].className="";
				}

				this.className="active";

				//滚动图片
				n=this.index;
				wangFrame.move(oUl,{"left":-ulW*n});
			};
		}

		function slide(n){
			for(var k=0; k<aLi.length; k++){
				aBtn[k].className="";
			}

			aBtn[n].className="active";
			wangFrame.move(oUl,{"left":-ulW*n});
		}


		/*上下按钮*/
		prevBtn.onclick=function(){
			n--;
			if(n<0){
				n=aLi.length-1;
			}
			
			slide(n);

		}

		nextBtn.onclick=function(){
			n++;
			if(n>aLi.length-1){
				n=0;
			}
			
			slide(n);
		}
	},

	

	offsetTop:function (elm){ 
		var top = elm.offsetTop; 
		var parent = elm.offsetParent; 
		while( parent != null ){ 
			top += parent.offsetTop; 
			parent = parent.offsetParent; 
		}; 
		return top; 
	}, 

	//计算offsetLeft
	offsetLeft:function(elm){ 
		var left = elm.offsetLeft; 
		var parent = elm.offsetParent; 
		while( parent != null ){ 
			left += parent.offsetLeft; 
			parent = parent.offsetParent; 
		}; 
		return left; 
	},

	//简单切换
	cliTab:function(n,obj,obj2,cls){
			for(var i=0; i<obj.length; i++){
				obj[i].className="";
				if(obj2){
					aBigPic[i].className="";	
				}	
			}

			obj[n].className=cls;

			if(obj2){
					aBigPic[n].className=cls;	
				}			
	},

	tab:function(obj,cls,_this){
		for(var j=0; j<obj.length; j++){
			obj[j].className="";
		};

		_this.className=cls;
				
	},

	addEvent:function(obj,ev,fn){
		obj.attachEvent? obj.attachEvent('on'+ev,fn):obj.addEventListener(ev,fn,false);

	},

	startMove:function (obj,json,fn) {
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                var bStop = true;
                for(attr in json){
                    // 1. 取得当前的值（可以是widht，height，opacity等的值）
                    var objAttr = 0;
                    if(attr == "opacity"){
                        objAttr = Math.round(parseFloat(this.getStyle(obj,attr))*100);
                    }else{
                        objAttr = parseInt(this.getStyle(obj,attr));
                    }
                    // 2.计算运动速度
                    var iSpeed = (json[attr] -objAttr)/10;
                        iSpeed = iSpeed>0 ?Math.ceil(iSpeed):Math.floor(iSpeed);
                    // 3. 检测所有运动是否到达目标
                    if(objAttr != json[attr]){
                        bStop = false;
                    }
                    if(attr == "opacity"){
                        obj.style.filter = 'alpha(opacity:'+(objAttr+iSpeed)+')';
                        obj.style.opacity = (objAttr+iSpeed)/100;
                    }else{
                        obj.style[attr] =  objAttr+iSpeed+'px';// 需要又.属性名的形式改成[]
                    }
                }
                if(bStop){ // 表示所有运动都到达目标值
                    clearInterval(obj.timer);
                    if(fn){
                        fn();
                    }
                }
            },30);
    }

}//wangFrame框架集结束


