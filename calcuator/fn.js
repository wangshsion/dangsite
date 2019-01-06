	var count = new Count();
	var oBox= document.getElementById("box");
	var oKey=document.getElementById("keies");
	var aLi=oKey.getElementsByTagName("li");


	var show=document.getElementById("show");
	var showLine=show.getElementsByTagName("li");

	var oScreen=oBox.getElementsByTagName("div")[0];
	var n=0,n1=0,n2=0;
	var countType = 'add', add=false,subtra=false,milti=false,devision=false,done = false;

	showLine[2].innerHTML = '0';

	for(var i=aLi.length-1; i>=0; i--){
		aLi[i].style.height=aLi[i].clientWidth+'px'
		aLi[i].style.lineHeight=aLi[i].clientWidth+'px'

	}


	function cover(n){
		aLi[n].className="cover"
	}

	function discover(n){
		aLi[n].className=""
	}

	
	function computed(){
		console.log(showLine[2].innerHTML)
		n1=Number(showLine[2].innerHTML);

		showLine[0].innerHTML=n1;
		showLine[2].innerHTML="0";
	}

	function equalble(){
		n2=Number(showLine[2].innerHTML);
		showLine[1].innerHTML=n2;
		//showLine[2].innerHTML="0";

	}

	document.onclick = function(e){
		e.preventDefault();
		if(showLine[0].innerHTML != '' && showLine[0].innerHTML != '' && showLine[2].innerHTML != '0'){
			showLine[0].innerHTML = ''
			showLine[1].innerHTML = ''
			showLine[2].innerHTML = '0'
		}
		switch(e.target.innerHTML){
			case '+':
			countType='add';
			computed()
			break;

			case '-':
			countType='sub';
			computed()
			break;

			case '*':
			countType='div';
			computed()
			break;

			case '/':
			countType='mul';
			computed()
			break;

			case '=':
			equalble()
			showLine[2].innerHTML = count[countType](n1,n2)
			break;

			case 'c':
			equalble()
			showLine[0].innerHTML = '';
			showLine[1].innerHTML = '';
			showLine[2].innerHTML = '0';
			break;

			default:
			
			if(String(Number(e.target.innerHTML)) !== 'NaN' || e.target.innerHTML == '.'){
				
				if(showLine[2].innerHTML.substr(0, 1) == '0' && e.target.innerHTML != '0' && e.target.innerHTML != '.' && showLine[2].innerHTML.substr(0, 2) != '0.'){
					showLine[2].innerHTML = e.target.innerHTML;
					break;
				}

				if(showLine[2].innerHTML.substr(0, 1) == '0' && e.target.innerHTML == '0' && showLine[2].innerHTML.substr(0, 2) != '0.'){
					showLine[2].innerHTML = '0'
					break;
				}
			
				showLine[2].innerHTML += e.target.innerHTML;
				
				
			}
			
		}
	};


	document.onkeyup=function(ev){
		var oEv=ev||window.event; 
		for(var i=0;i<aLi.length;i++){
			aLi[i].className="";
		}

		switch(oEv.keyCode){
			case 107:
			countType = 'add';
			computed();
			break;

			case 109:
			countType = 'sub';
			computed();
			break;

			case 106:
			countType = 'div';
			computed();
			break;

			case 111:
			countType = 'mul';
			computed();
			break;

			case 46:
			showLine[0].innerHTML="";
			showLine[1].innerHTML="";
			showLine[2].innerHTML="0";
			break;

			case 13:
			equalble();
			showLine[2].innerHTML = count[countType](n1,n2);
			break
		}
		
		if(oEv.keyCode > 95 && oEv.keyCode < 106 || oEv.keyCode === 110){
			
			if(showLine[2].innerHTML.substr(0, 1) == '0' && oEv.key != '0' && oEv.key != '.' && showLine[2].innerHTML.substr(0, 2) != '0.'){
				showLine[2].innerHTML = oEv.key;
				return;
			}

			if(showLine[2].innerHTML.substr(0, 1) == '0' && oEv.key == '0' && showLine[2].innerHTML.substr(0, 2) != '0.'){
				showLine[2].innerHTML = '0'
				return;
			}


			showLine[2].innerHTML+=oEv.key;
			
		}

	}
