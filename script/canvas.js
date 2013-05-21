(function(){

	var cnv = document.getElementById('paint');
	var ctx = cnv.getContext('2d');
	var painting = false;
	var a= 2;

	function colorB(color){
		b = color;
		return b;
	}

	var sizebox = document.querySelectorAll('.sizebox li');

	for(var i=0;i<sizebox.length;i++){
		sizebox.item(i).style.width = (i+8)+'px';
		sizebox.item(i).style.height = (i+8)+'px';
	}

	for(var i=0;i<sizebox.length;i++){
		(function(j){
			sizebox.item(i).onclick = function(){
				a = (2*j)+1;
			}				
		})(i);
	}

	cnv.onmousemove = function (event){
		if(painting){
			var x = event.offsetX;
			var y = event.offsetY;
			ctx.lineTo(x,y);
			ctx.stroke();
		}
	};

	cnv.onmousedown=function(event){
		var x = event.offsetX;
		var y = event.offsetY;
		ctx.beginPath();
		ctx.moveTo(x,y);
		ctx.strokeStyle=b;
		ctx.lineWidth=a;
		painting = true;
	}

	cnv.onmouseup=function(){
		painting = false;
	}

})();