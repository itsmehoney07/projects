var a=Math.random()*6;
a=Math.floor(a)+1;
var b=Math.random()*6;
b=Math.floor(b)+1;
if(a>b){
	document.write("Player 1 wins");
}
if(b>a){
	var dis="Player 2 wins";
	// dis.style.fontSize="10";
	// dis.style.color="white";
	dis=dis.style.cssText+='font-size:10px;color:white';
	document.write(dis);
}
if(a===b){
	document.write("try again");
}

