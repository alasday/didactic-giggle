var pic = document.getElementById("vimage");
'''
var cBtn = document.getElementById("clear");
var mBtn = document.getElementById("move");
'''

var cx = 0;
var cy = 0;

var create = function(){
    var c= document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", cx+e.offsetX);
    c.setAttribute("cy", cy+e.offsetY);
    c.setAttribute("r", "16");
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    c.addEventListener('click', circleclick);
    vimage.appendChild(c);
};
    

var circleclick = function(e){
    if (this.getAttribute("fill") == "red"){
	this.setAttribute("fill", "blue");
    }

    else if (this.getAttribute("fill") == "blue"){
	vimage.removeChild(this);
	var rplce=create();
	
	rplce.setAttribute("cx", Math.random()*500);
	rplce.setAttribute("cy", Math.random()*500);
	vimage.appendChild(rplce);
    }
    event.stopPropogation();
};


var clr = function(e){
    vimage.innerHTML = "";
}

var mv = function(e){

};


vimage.addEventListener('click', create);

'''
pic.addEventListener("click", circleClick);
cBtn.addEventListener("click", clr);
mBtn.addEventListener("click", mv);
'''