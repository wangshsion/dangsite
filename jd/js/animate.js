function getByClass(oParent,cls){
	var result=[];
	var els=oParent.getElementsByTagName('*');
	for(var i=0;i<els.length;i++){
		if(els[i].className==cls){
			result.push(els[i]);
		}
	}
	return result;
	
}

function getStyle(obj,name){
	if(obj.currentStyle){
		return obj.currentStyle[name]
	}else{
		return getComputedStyle(obj,false)[name];
	}
}


function animate(obj,json,fn) {
	clearInterval(obj.time);
	obj.time = setInterval(function () {
		var stop = true;
		for (var attr in json) {
			var cur = 0;

			if (attr == 'opacity') {
				cur = parseInt(parseFloat(getStyle(obj, attr)) * 100);
			}
			else {
				cur=parseInt(getStyle(obj, attr));
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
			if (fn) {
				fn();
			}
		}
	}, 30)


}





