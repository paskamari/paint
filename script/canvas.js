var
	cnv = document.getElementById('paint'),
	ctx = cnv.getContext('2d'),
	painting = false;

ctx.strokeStyle = 'black';

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
	painting = true;
}



cnv.onmouseup=function(){
	painting = false;
}