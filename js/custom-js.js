const header = document.getElementsByClassName("header");
const nav = document.querySelector(".header .nav");

window.addEventListener('scroll',onScrollHandler );

function onScrollHandler(){
	
    // switching color
    if(window.scrollY > 50){    
        header[0].style.backgroundColor  = "#fff";		
		nav.style.color = "#333";
		header[0].style.boxShadow = "0 0 5px 0 #333"
    }else{
		header[0].style.backgroundColor  = "transparent";
		nav.style.color = "#fff";
		header[0].style.boxShadow = "0 #333"
	}

}