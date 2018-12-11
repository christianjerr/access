















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

/* campuses js */

let campusButton = document.getElementById('campus-btn');
let campusStatus = false;

campusButton.addEventListener('click' , function(){
	let hiddenCampus = document.querySelectorAll('.hide');
	
	if(campusStatus == false){
		document.getElementsByTagName('header')[0].setAttribute('style' , 'margin-bottom : 0px ; height : 100%');
		
		Array.from(hiddenCampus).forEach(function(item){
			item.setAttribute('style' , 'opacity : 1 ; visibility : visible ; transition : 1s ')
		});
		
		campusStatus = true;
		campusButton.innerHTML = "Hide";
		
	}else if(campusStatus == true){
		
		if(window.innerWidth > 768){
			document.getElementsByTagName('header')[0].setAttribute('style' , 'margin-bottom : 0px ; height : 100vh');	
		
		}else{
			document.getElementsByTagName('header')[0].setAttribute('style' , 'margin-bottom : 1180px ; height : 100vh');	
		}
		Array.from(hiddenCampus).forEach(function(item){
			item.setAttribute('style' , 'opacity : 0 ; visibility : hidden ; transition : .5s ;')
		});
		
		campusButton.innerHTML = "See more";
		campusStatus = false;
	}
	
	
})






