window.onload = function(){
	greet();
};

/* greetings  */
function greet(){
	document.getElementById('my-title').setAttribute('style' , 'opacity : 1 ; transition : 10s');
}


/* scroll to about */

function aboutUs(){
	if(window.innerWidth > 768){
		window.scrollTo({
		top : 1300,
		behavior : 'smooth'
		});
	}else{
		window.scrollTo({
		top : 1650,
		behavior : 'smooth'
		});
	}
	
}
/* scroll to admission */

function admission(){
	if(window.innerWidth > 768){		
		window.scrollTo({
			top : 2050,
			behavior : 'smooth'
		});
	}else{
		window.scrollTo({
			top : 3150,
			behavior : 'smooth'
		});
	}
	
}

/* mission vision */
function missionVision(){
	if(window.innerWidth > 768){
		window.scrollTo({
		top : 630,
		behavior : 'smooth'
		});
	}else{
		window.scrollTo({
		top : 950,
		behavior : 'smooth'
	});
	}
	
}


/* courses */
function courses(){
	if(window.innerWidth > 768){		
		window.scrollTo({
			top : 2800,
			behavior : 'smooth'
		});
	}else{
		window.scrollTo({
			top : 4030,
			behavior : 'smooth'
		});
	}
	
}


console.log(window.innerWidth);