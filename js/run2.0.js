function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr]
	}

	else{
		return getComputedStyle(obj,true)[attr]
	}

}

/*window.onload=function(){
	var tool=document.getElementById('tools');
	alert(getByClass(tool,'height'))

}*/

function run(obj,json,fnEnd){
	var timer;
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var stop=true;
	for(var attr in json){
		cur=0;
		if(attr=='opacity'){
			cur=(parseFloat(getStyle(obj,attr)*100))
		}

		else{

			cur=parseInt(getStyle(obj,attr));
		}
		
		var speed=(json[attr]-cur)/3;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		if(json[attr]!=cur)stop=false;
		/*if(json[attr]==cur){
			clearInterval(obj.timer)
			if(fnEnd)fnEnd();
		}*/
		
			if(attr=='opacity'){
			obj.style.filter='alpha('+(cur+speed)+')'
			obj.style[attr]=(cur+speed)/100;
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