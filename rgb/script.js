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
