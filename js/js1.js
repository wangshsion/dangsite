/*function getByClass(obj,scl){
		
		var el=obj.getElementsByTagName('*');
		var result=[];
		for(var i=0;i<el.length;i++){
			if(el[i].className==scl){
				result.push(el[i])
			}
		}
		return result;
	}*/

	function getByClass(sClass,parent){
		var oParent=parent?document.getElementById(parent):document;
		var el=oParent.getElementsByTagName('*');
		var result=[];

		for(var i=0;i<el.length;i++){
			if(el[i].className==sClass){
				result.push(el[i]);
			}
		}
		return result;
	}

	function getStyle(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr]
		}

		else{
			return getComputedStyle(obj,false)[attr];
		}
	}

	function ani(obj,json,fnEnd){
		var timer;
		
		/*运动框架*/
		clearInterval(obj.timer);

		obj.timer=setInterval(function(){
			for(var attr in json){
				var stop=true;
				var cur=0;
				if(attr=='opacity'){
					cur=Math.round(parseFloat(getStyle(obj,attr))*100);
				}

				else{
					var cur=parseInt(getStyle(obj,attr));
				}
			
				var speed=(json[attr]-cur)/6;
					speed=speed>0?Math.ceil(speed):Math.floor(speed);
				if(json[attr]!=cur)stop=false;


				if(attr=='opacity'){
					obj.style.filter='alpha(opacity:'+(speed+cur)+')';
					obj.style.opacity=(cur+speed)/100;
				}

				else{
					obj.style[attr]=cur+speed+'px';
				}
		
			
			}

			if(stop){
				clearInterval(obj.timer);
				if(fnEnd)fnEnd();
			}	

		
		},30);

		
	}

	
	

	




window.onload=function(){
	//通过class获取元素
	var headTool=getByClass('tools','tools')[0];
	


	//获取非行间样式
	/*function getStyle(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}

		else{
			return getComputedStyle(obj,true)[attr];
		}
	}*/
	//运动框架
	/*function run(obj,json,fnEnd){
		var timer,
			cur=0,
			speed;
		for(var attr in json){
			
			obj.timer=setInterval(function(){
				if(attr=='opacity'){
					cur=(parseFloat(getStyle(obj,attr)))*100;
					
				}

				else{
					cur=parseInt(getStyle(obj,attr));
					
				}
				speed=(json[attr]-cur)/6;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
				
				if(cur==json[attr]){
					clearInterval(obj.timer)
					if(fnEnd)fnEnd();
				}
				
				if(attr=='opacity'){
					obj.style.filter='alpha(opacity:'+(cur+speed)+')';
					obj.style[attr]=(cur+speed)/100;
				}
				else{
					obj.style[attr]=cur+speed+'px';
				}

			},30);

		}
	}*/


	
	var addBtn=getByClass('address')[0],//地址按钮
		addBox=document.getElementById('all_area'),//地址框
		addUl=getByClass('address_column')[0],//ul地址列表
		addList=(addUl.children),
		arr=[];
	

	addBtn.onclick=function(e){
		e=e||window.event;
		if(e.stopPropagation){
			e.stopPropagation();
		}

		else{
			e.cancelBubble=true;
		}

		addBox.style.display='block';
	}

	document.onclick=function(){
		addBox.style.display='none';
	}

	//鼠标经过改变颜色
	for(var i=0;i<addList.length;i++){
		arr.push(addList[i].childNodes[0]);
		addList[i].onmouseover=function(){
			for(var i=0;i<arr.length;i++){
				arr[i].style.color='#333';
			}
			this.childNodes[0].style.color='#ff2838';
		}
		
	}



	//鼠标点击地址列表
	for(var i=0;i<addList.length;i++){

		addList[i].onclick=function(){
			addBtn.innerHTML='送到：<span>'+this.childNodes[0].textContent+'</span>';
			addBox.style.display='none';
		}
	}

	//我的当当
	var myddBtn=getByClass('my_dd')[0],
		myddBox=myddBtn.getElementsByTagName('ul')[0],
		myddList=myddBox.getElementsByTagName('li');
		myddBtn.onmouseover=function(){
			showMore(myddBox)
		}

		myddBtn.onmouseout=function(){
			hideMore(myddBox);
		}


	//企业采购
	var groupBuyBtn=getByClass('enterprise_buy')[0],
		groupBuyBox=groupBuyBtn.getElementsByTagName('ul')[0],
		groudBuyList=myddBox.getElementsByTagName('li');
		groupBuyBtn.onmouseover=function(){

			showMore(groupBuyBox)
		}

		groupBuyBtn.onmouseout=function(){

			hideMore(groupBuyBox)
		}

		//客户服务
		var customerBtn=getByClass('customer')[0],
		customerBox=customerBtn.getElementsByTagName('ul')[0],
		customerList=customerBox.getElementsByTagName('li');
		customerBtn.onmouseover=function(){

			showMore(customerBox)
		}

		customerBtn.onmouseout=function(){

			hideMore(customerBox)
		}

		//显示更多的通用函数
	function showMore(showBox){
				
		showBox.style.display='block';
	}

	function hideMore(showBox){
				
		showBox.style.display='none';
	}
	
	var searchBtn=getByClass('select')[0],
		show_category=getByClass('show_category_name')[0],
		select_pop=getByClass('select_pop')[0],
		select_list=select_pop.getElementsByTagName('a');
		select_pop.onmouseover=searchBtn.onmouseover=function(){
			select_pop.style.zIndex='998';
		}

		searchBtn.onmouseout=select_pop.onmouseout=function(){
			select_pop.style.zIndex='-10';
		}
	
		for(var i=0;i<select_list.length;i++){
			select_list[i].onmouseover=function(){
				for(var i=0;i<select_list.length;i++){
					select_list[i].style.background='#fff';
					select_list[i].childNodes[0].style.color='#999';
				}
				this.style.background='#646464';
				this.childNodes[0].style.color='#fff';
			}
		}

		//轮播
		var runBox=getByClass('run_poster')[0],

			runUl=getByClass('posterList')[0],
			runList=runUl.getElementsByTagName('li'),
			runTab=getByClass('tab')[0],
			runTabBtn=runTab.getElementsByTagName('li'),
			ZIndex=10,
			now=0;


			for(var i=0;i<runTabBtn.length;i++){
				runTabBtn[i].index=i;
				runTabBtn[i].onmouseover=function(){
					//clearInterval(timer);
					if(now==this.index)return;
					
					now=this.index;

					tab();	
					
				}
				

			}

			function tab(){
				for(var i=0; i<runTabBtn.length;i++){
					runTabBtn[i].style.background='#999';
				}
				runList[now].style.opacity=0;
				ani(runList[now],{opacity:100});
				runList[now].style.zIndex=ZIndex;
				runTabBtn[now].style.background='#ff2838';
				ZIndex++;
			}

			function next(){
				now++;
				if(now==runList.length){
					now=0;
				}
				tab();
				
			}

			//next()
		var timer;
		timer=setInterval(next,2000);
		//run(runList,{zIndex:20})
		/*for(var i=0; i<runList.length;i++){
			runList[1]=run(run);
		}*/

		//标签切换

		var sale_window=getByClass('ad_window')[0],
			saleBtns=sale_window.getElementsByTagName('div'),
			saleList=sale_window.getElementsByTagName('ul');
		
		for(var i=0;i<saleBtns.length;i++){

			saleBtns[i].onmouseover=function(){
				for(var i=0;i<saleBtns.length;i++){
				
				saleBtns[i].style.background='#ddd';
				saleList[i].style.display='none';
				
				saleBtns[i].style.border='1px solid #aaa'
				saleBtns[i].index=i;
			}
			
			saleList[this.index].style.display='block';
			this.style.background='#fff';
			this.style.border='none';

			}

			
		}
		
		//标签切换2
		var goodsTag=getByClass('goods_play')[0],
			goodsBtns=goodsTag.getElementsByTagName('div'),
			goodsUl=goodsTag.getElementsByTagName('ul')[0],
			goodsLi=goodsUl.getElementsByTagName('li');
		for(var i=0;i<goodsBtns.length;i++){
			goodsBtns[i].index=i;
			goodsBtns[i].onmouseover=function(){
				for(var i=0;i<goodsBtns.length;i++){
					goodsLi[i].style.display='none';
					goodsBtns[i].style.background='#ddd';
					goodsBtns[i].style.border='1px solid #aaa'

				}
				goodsLi[this.index].style.display='block';
				this.style.background='#fff';
				this.style.border='none';
			}
		}

		/*楼层指引*/
		var screenW=document.documentElement.clientWidth||document.body.clientWidth;
		var screenH=document.documentElement.clientHeight||document.body.clientHeight;
		var floorWrap=document.getElementById('cellCenter');
		var floorTag=floorWrap.children;
		var currentId='';
		var menus=document.getElementById('floorLeader').getElementsByTagName('a');
		var floorL=document.getElementById('floorLeader');
		floorL.style.top=(screenH-(floorL.offsetHeight-440))/2+'px';
		floorL.style.left=Math.round(((screenW-1200))-floorL.offsetWidth)/2+'px';	
		
		window.onscroll=function(){
		var scrollT=document.documentElement.scrollTop||document.body.scrollTop;

			
			
			for(var i=0; i<floorTag.length; i++){
				
				if(scrollT+screenH-(screenH/2)<floorTag[floorTag.length-1].offsetTop && scrollT+(screenH/2)>floorTag[1].offsetTop){

					ani(floorL,{'opacity':'100','width':40,'height':440});
											
				}
				else{
					ani(floorL,{'opacity':'0','width':100,'height':800});
					break;
				}

				
				var _floorTag=floorTag[i];
				var floorTop=_floorTag.offsetTop
				if(scrollT>floorTop-200){
				currentId=_floorTag.id;
					
				}
				else{
					break;
				}
			}
			
			if(currentId){
				for(var j=0; j<menus.length; j++){

					menus[j].index=menus[j];
					var pos=this.index*40+'px';
					var _menus=menus[j];
					var _href=_menus.href.split("#");
					
					if(_href[_href.length-1]!=currentId){
						
						_menus.style.cssText=" background-color:none;";
						_menus.className='f'+(j+1);
						
					}

					else{
						_menus.style.cssText=" background-color:#ff2838;";
						_menus.className='current'+j;
						
					}
				}
			}
			
		}

		var bd=document.getElementById('bd');
		var tag_panel=document.getElementById('tag-panel');
		var goods_sort=getByClass('goods_sort')[0];
		tag_panel.onmouseover=goods_sort.onmouseover=function(){
			
			tag_panel.style.display='block';


			
		}

		tag_panel.onmouseout=goods_sort.onmouseout=function(){
			

			tag_panel.style.display='none';


			
		}


};



