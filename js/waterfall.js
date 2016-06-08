$(window).on('load',function(){
	waterfall();
	//checkScroll()
	var dataInt={'data':[{'src':'56.jpg'},{'src':'57.jpg'},{'src':'58.jpg'},{'src':'59.jpg'},{'src':'50.jpg'},{'src':'61.jpg'},{'src':'62.jpg'},{'src':'62.jpg'},{'src':'70.jpg'},{'src':'75.jpg'},{'src':'74.jpg'},{'src':'71.jpg'},{'src':'81.jpg'},{'src':'68.jpg'},{'src':'69.jpg'}]};
	$(window).on('scroll',function(){
		if(checkScroll()){
			console.log(checkScroll())
			$.each(dataInt.data,function(index,value){
				var  $boxs=$('<div>').addClass('box').appendTo($('#main'));
				var $pic=$('<div>').addClass('pic').appendTo($boxs);
				$('<img>').attr('src','images/'+$(value).attr('src')).appendTo($pic)
			})
			waterfall(); 
		}
	})
		
})

function waterfall(){
	var $main=$('#main');
	var $boxs=$('#main > div');

	var $pic=$('#main > div').find('div');
	var $screenW=$(window).width();
	var cols=Math.floor($screenW/$boxs.eq(0).outerWidth())-1;
	var w=$boxs.eq(0).outerWidth();
	$main.width($boxs.eq(0).outerWidth()*cols).css('margin','0 auto');
	var hArr=[];
	$boxs.each(function(index,value){
		
		var h=$boxs.eq(index).outerHeight();
		if(index<cols){
			

			hArr[index]=h;
			//console.log(hArr);
			
			//var minH=Math.min.apply(h);
		}else{
			var minH=Math.min.apply(null,hArr);
			var minHIndex=$.inArray(minH,hArr);

			
			$(value).css({
				'position':'absolute',
				'top':minH+'px',
				'left':minHIndex*w+'px'
			});
			hArr[minHIndex]+=$boxs.eq(index).outerHeight();
			
		}
		

	})
	
}

function checkScroll(){
	var $lastBox=$('#main>div').last();
	var lastBoxDis=$lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
	var scrollTop=$(window).scrollTop();
	var screenH=$(window).height();

	return (scrollTop+screenH>lastBoxDis)?true:false;
	
}
