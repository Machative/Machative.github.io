var solidBtn = document.getElementById("solidBtn");
var fadeBtn = document.getElementById("fadeBtn");
var modeDivs = document.getElementsByClassName("modeDiv");
var switchMode = function(mode){
    for (var i=0;i<modeDivs.length;i++){
        var cur = modeDivs[i];
        if(cur.id == mode) cur.style.visibility="visible";
        else cur.style.visibility="hidden";
    }
}
var solidInput = document.getElementById("solidinput");
var onSolidInput = function(){
    var color = solidInput.value;
    var submit = document.getElementById("solidsubmit");
    submit.style.backgroundColor = color;
}
var onFadeNumSubmit = function(){
    var num = document.getElementById("fadenumber").value;
    var div = document.getElementById("colorsDiv")
    while(div.firstChild){
        div.removeChild(div.lastChild);
    }
    for(var i=0;i<num;i++){
        var input = document.createElement("INPUT");
        input.type="color";
        div.appendChild(input);
        input.style.display="inline";
        input.style.marginRight="5px";
    }
}
/*var fadeSubmit = function(){
}*/
/*var solidSubmit = function(){
}*/