alert("enter the number between 1 and 3");
var a=prompt("player 1 enter");
var b=prompt("player 2 enter");
if(a==="1"){
	document.querySelector(".img1").setAttribute("src","images/stone.png");
	if(b==="2"){
		document.querySelector(".img2").setAttribute("src","images/paper.png");
		document.querySelector("h1").innerHTML="Player 2 wins";
    }
    else if(b==="3"){
		document.querySelector(".img2").setAttribute("src","images/scissor.png");
		document.querySelector("h1").innerHTML="Player 1 wins";
    }
    else{
    	document.querySelector(".img2").setAttribute("src","images/stone.png");
    	document.querySelector("h1").innerHTML="Draw";
    }
}
if(a==="2"){
	document.querySelector(".img1").setAttribute("src","images/paper.png");
	if(b==="3"){
		document.querySelector(".img2").setAttribute("src","images/scissor.png");
		document.querySelector("h1").innerHTML="Player 2 wins";
	}
	else if(b==="1"){
		document.querySelector(".img2").setAttribute("src","images/stone.png");
		document.querySelector("h1").innerHTML="Player 1 wins";
	}
	else{
		document.querySelector(".img2").setAttribute("src","images/paper.png");
		document.querySelector("h1").innerHTML="Draw";
	}
}
if(a==="3"){
	document.querySelector(".img1").setAttribute("src","images/scissor.png");
	if(b==="1"){
		document.querySelector(".img2").setAttribute("src","images/stone.png");
		document.querySelector("h1").innerHTML="Player 2 wins";
	}
	else if(b==="2"){
		document.querySelector(".img2").setAttribute("src","images/paper.png");
		document.querySelector("h1").innerHTML="Player 2 wins";
	}
	
	else{
		document.querySelector(".img2").setAttribute("src","images/scissor.png");
		document.querySelector("h1").innerHTML="Draw";
	}
}