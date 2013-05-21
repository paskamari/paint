var cnv = document.getElementById('paint');

var ctx = cnv.getContext('2d');

ctx.strokeStyle = 'black';

var painting = false;

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