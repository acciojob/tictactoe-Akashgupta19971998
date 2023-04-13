//your JS code here. If required.
let player1=document.getElementById("player1");
let player2=document.getElementById("player2");
let toBeHidden=document.getElementsByClassName("container");
let message=document.getElementsByClassName("message");
function click(){
toBeHidden.style.display="none";
message.innerHTML=player1.value +" , you're up";
}