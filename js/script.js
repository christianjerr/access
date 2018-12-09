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
			top : 1950,
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

/* zoom effects */

let h4 = document.getElementsByTagName('h4');
Array.from(h4).forEach(function(items){
	items.addEventListener('mousemove' , function(){
		items.setAttribute('style' , ' transition : 1s ; font-size : 30px ; ')
	})
})
Array.from(h4).forEach(function(items){
	items.addEventListener('mouseleave' , function(){
		items.setAttribute('style' , 'text-shadow : 0px 0px 0px white ; transition : 1s')
	})
})


/* preloader */

document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('contents').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('load').style.visibility="hidden";
         document.getElementById('contents').style.visibility="visible";
      },1000);
  }
}

