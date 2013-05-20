//background image
(function(){
	"use strickt";
var
	switcher = querySelectorAll('.switch li'),
	setClass = function(){
		switcher.item(i).addClass("brdbbb");
		this.removeClass("brdbbb");
		switcher.item(i).removeClass("brd333");
		this.addClass("brd333");
	};
alert(switcher);

for(i = 0;i < switcher.lenght;i++){
	switcher.item(i).click = alert(1);
}


function squares() {
	document.getElementById('bodysite').className='timeout squares';
}
function bgnoise() {
	document.getElementById('bodysite').className='timeout bgnoise';
}
function white_carbon() {
	document.getElementById('bodysite').className='timeout white_carbon';
}
function lghtmesh() {
	document.getElementById('bodysite').className='timeout lghtmesh';
}
function white_carbonfiber() {
	document.getElementById('bodysite').className='timeout white_carbonfiber';
}


})();



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

/*
// JavaScript Document
$(function(){
	var closeform = $('div.container div.formdesign .close'),
		formdesign = $('div.container div.formdesign'),
		contact = $('div.container a.contact');
	closeform.click(function(){
		contact.animate({opacity:1},200);
		formdesign.animate({
			top:-390
		},500);
	});
	contact.click(function(){
		$(this).animate({opacity:0},500);
		formdesign.animate({
			top:-10
		},500);
	});
});

*/
