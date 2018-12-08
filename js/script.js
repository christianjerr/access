window.onload = function(){
	greet();
};

/* greetings  */
function greet(){
	document.getElementById('my-title').setAttribute('style' , 'opacity : 1 ; transition : 10s');
}


/* scroll to about */

function aboutUs(){
	window.scrollTo({
		top : 1450,
		behavior : 'smooth'
	});
	
}
/* scroll to admission */

function admission(){
	window.scrollTo({
		top : 2160,
		behavior : 'smooth'
	});
	
}

/* mission vision */
function missionVision(){
	window.scrollTo({
		top : 630,
		behavior : 'smooth'
	});
	
}

