

/* scroll to about */

function aboutUs(){
	if(window.innerWidth > 768){
		window.scrollTo({
		top : 1450,
		behavior : 'smooth'
		});
	}else{
		window.scrollTo({
		top : 2400,
		behavior : 'smooth'
		});
	}
	
}
/* scroll to admission */

function admission(){
	if(window.innerWidth > 768){		
		window.scrollTo({
			top : 2080,
			behavior : 'smooth'
		});
	}else{
		window.scrollTo({
			top : 3710,
			behavior : 'smooth'
		});
	}
	
}

/* mission vision */
function missionVision(){
	if(window.innerWidth > 768){
		window.scrollTo({
		top : 900,
		behavior : 'smooth'
		});
	}else{
		window.scrollTo({
		top : 1770,
		behavior : 'smooth'
	});
	}
	
}


/* courses */
function courses(){
	if(window.innerWidth > 768){		
		window.scrollTo({
			top : 2700,
			behavior : 'smooth'
		});
	}else{
		window.scrollTo({
			top : 4430,
			behavior : 'smooth'
		});
	}
	
}


/* courses */
function campuses(){
	if(window.innerWidth > 768){		
		window.scrollTo({
			top : 370,
			behavior : 'smooth'
		});
	}else{
		window.scrollTo({
			top : 400,
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
	   document.body.style.background = "";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('load').style.visibility="hidden";
         document.getElementById('contents').style.visibility="visible";
		 document.body.style.background = "";
      },900);
  }
}

