var pic = document.getElementById("vimage");
var cBtn = document.getElementById("clear");
var mBtn = document.getElementById("move");
var cx = 0;
var cy = 0;


var circleclick = function(e){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", 0);
    c.setAttribute("cy", 0);
    c.setAttribute("r", "100");
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    pic.appendChild(c);
    }

var clr = function(e){
    pic.innerHTML = "";
}

var mv = function(e){

}

pic.addEventListener("click", circleClick);
cBtn.addEventListener("click", clr);
mBtn.addEventListener("click", mv);
