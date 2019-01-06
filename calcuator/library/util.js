
function Count(val1,val2){
 		this.add = function(val1,val2){

 			let a = String(val1).indexOf('.');
			let b = String(val2).indexOf('.');
			let c = String(val1).substr(a+1);
			let d = String(val2).substr(b+1);
			let pow = 1;

			if(a > -1 || b > -1){
				if(c.length > d.length){
					pow = Math.pow(10,c.length)
				}else{
					pow = Math.pow(10,d.length)
				}
			}
			
			return ((val1*pow + val2*pow) / pow)
 		}

 		this.sub = function(val1,val2){

 			let a = String(val1).indexOf('.');
			let b = String(val2).indexOf('.');
			let c = String(val1).substr(a+1);
			let d = String(val2).substr(b+1);
			let pow = 1;

			if(a > -1 || b > -1){
				if(c.length > d.length){
					pow = Math.pow(10,c.length)
				}else{
					pow = Math.pow(10,d.length)
				}
			}
			
			return ((val1*pow - val2*pow) / pow)
 		}

 		this.div = function(val1,val2){

 			let a = String(val1).indexOf('.');
			let b = String(val2).indexOf('.');
			let c = String(val1).substr(a+1);
			let d = String(val2).substr(b+1);
			let pow = 1;
			let result = 0;

			if(a > -1 || b > -1){
				var dot = c.length + d.length;
				val1 = val1*Math.pow(10,c.length)
				val2 = val2*Math.pow(10,d.length)
				pow = Math.pow(10,dot)
				
			}
			console.log(val1,val2,dot,pow)
			return (val1 * val2 / pow)
 		}

 		this.mul = function(val1,val2){

 			let a = String(val1).indexOf('.');
			let b = String(val2).indexOf('.');
			let c = String(val1).substr(a+1);
			let d = String(val2).substr(b+1);
			let pow = 1;
			let result = 0;

			if(a > -1 || b > -1){
				var dot = c.length + d.length;
				val1 = val1*Math.pow(10,c.length)
				val2 = val2*Math.pow(10,d.length)
				pow = Math.pow(10,dot)
				
			}
			console.log(val1,val2,dot,pow)
			return (val1 / val2 / pow)
 		}
 	}