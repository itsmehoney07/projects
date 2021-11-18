var randomnnumber1=Math.random()*6;
randomnnumber1=Math.floor(randomnnumber1)+1;
if(randomnnumber1===1){
	document.querySelector(".dice img").setAttribute("src","images/dice1.png");
}
else if(randomnnumber1===2){
	document.querySelector(".img1").setAttribute("src","images/dice2.png");
}
else if(randomnnumber1===3){
	document.querySelector(".img1").setAttribute("src","images/dice3.png");
}
else if(randomnnumber1===4){
	document.querySelector(".img1").setAttribute("src","images/dice4.png");
}
else if(randomnnumber1===5){
	document.querySelector(".img1").setAttribute("src","images/dice5.png");
}
else{
	document.querySelector(".img1").setAttribute("src","images/dice6.png");
}
var randomnnumber2=Math.random()*6;
randomnnumber2=Math.floor(randomnnumber2)+1;
if(randomnnumber2===1){
	document.querySelector(".img2").setAttribute("src","images/dice1.png");
}
else if(randomnnumber2===2){
	document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
else if(randomnnumber2===3){
	document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
else if(randomnnumber2===4){
	document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
else if(randomnnumber2===5){
	document.querySelector(".img2").setAttribute("src","images/dice5.png");
}
else{
	document.querySelector(".img2").setAttribute("src","images/dice6.png");
}
if(randomnnumber1>randomnnumber2){
	document.querySelector("h1").textContent="Player1 wins";
}
else if(randomnnumber2>randomnnumber1){
	document.querySelector("h1").innerHTML="Player2 wins";
}
else{
	document.querySelector("h1").innerHTML="Draw";
}