//BackGrounColor Canvas

function changeBGC(bgc){
	var canvas = document.getElementById('paint');
	canvas.style.backgroundColor = bgc;
}


//Contact Validation

function validateText(str,len){
	return str.length >= len;
}

function validateEmail(str){
	var emailPattern = /^[a-z0-9+_%.-]+@(?:[a-z0-9-]+\.)+[a-z]{2,6}$/i ;

	return emailPattern.test(str);
}

$(function(){
	$('#contact-form').submit(function(){
		var target, err = false;

		target = $('#name');
		if( validateText(target.val(),3) ){
			target.removeClass('err').addClass('ok');
		}else{
			target.removeClass('ok').addClass('err');
			err = true;
		}

		target = $('#subject');
		if( validateText(target.val(),5) ){
			target.removeClass('err').addClass('ok');
		}else{
			target.removeClass('ok').addClass('err');
			err = true;
		}

		target = $('#mail');
		if( validateEmail(target.val()) ){
			target.removeClass('err').addClass('ok');
		}else{
			target.removeClass('ok').addClass('err');
			err = true;
		}

		target = $('#txt');
		if( validateText(target.val(),10) ){
			target.removeClass('err').addClass('ok');
		}else{
			target.removeClass('ok').addClass('err');
			err = true;
		}

		return !err;

	});
});

//Contact Slide

$(function(){
	var closeform = $('.container .formdesign .close'),
		formdesign = $('.container .formdesign'),
		contact = $('.container .contact');
	closeform.click(function(){
		contact.animate({opacity:1},200);
		formdesign.animate({
			top:-800
		},700);
	});
	contact.click(function(){
		$(this).animate({opacity:0},500);
		formdesign.animate({
			top:-10
		},700);
	});
});

//background image

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