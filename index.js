var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1; //random number for dice 1

var randomImage="dice"+randomNumber1+".png";
var randomImageSource="images/"+randomImage;  //images/dice(1-6).png

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageSource2="images/dice"+randomNumber2+".png"; //random number for dice 2

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

//functionality
if(randomNumber1>randomNumber2)
document.querySelector("h2").innerHTML="🏆Player 1 Wins🏆";
else if(randomNumber1<randomNumber2)
document.querySelector("h2").innerHTML="🏆Player 2 Wins🏆";
else
document.querySelector("h2").innerHTML="🎌Draw🎌";