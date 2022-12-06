var landscape = window.matchMedia("(orientation:landscape)");
//----------------------------------------------------------->

function loadPerfect(){
	navbar = document.getElementById('tab');
	navbar.style.display = "none";
}

function tabbar() {
	navbar = document.getElementById('tab');
	body =  document.getElementById('bodycontent');
	stab = document.getElementById('subtab');
	
	if(landscape.matches){
		if (navbar.style.display === "none") {////if it's hidden, make it show
			navbar.style.display = "block";
			body.style.marginLeft = "12.5vw";
			stab.style.left = "12.5vw";
			stab.style.width = "87.5vw";
		}    
		else {//// if it's not hidden,hide it!
			navbar.style.display = "none";
			body.style.marginLeft = "0vw";
			stab.style.left = "0vw";
			stab.style.width = "100vw";
		}
	}
	else{
		if (navbar.style.display === "none") {
			navbar.style.display = "block";
		}
		else {
			navbar.style.display = "none";
		}
	}
}

function subTabs(subButton, tabContent){
	links = document.getElementsByClassName('sublinks');
	subContent = document.getElementsByClassName('subcontent');
	
	for (i= 0; i < links.length; i++){
		links[i].className = links[i].className.replace(" on", ""); 
		subContent[i].style.display = "none"; //hide all contents
	}
	document.getElementById(tabContent).style.display = "block"; //show our concerned content
	document.getElementById(subButton).className += " on" //add (+=) 'on' class to current clicked button
	
	window.scrollTo(0, 0);//scroll to top
}

function dropdown(dropcontent, dropbutton) {
	dropcontent = document.getElementById(dropcontent);
	dropbutton = document.getElementById(dropbutton)
	
	if (dropcontent.style.display === "none"){
		dropcontent.style.display = "block";
		dropbutton.className += ' expanded';
	}
	else{
		dropcontent.style.display = "none";
		dropbutton.className = dropbutton.className.replace('expanded', '');
	}
}