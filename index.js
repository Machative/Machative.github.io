var table;
var choicesArr = ["Vanilla","Chocolate","Strawberry","Moose Tracks","Cookie Dough"];
var mouseoverChoice = function(col){
    col.style.borderStyle="inset";
    col.style.color="rgb(97, 97, 255)";
}
var mouseoutChoice = function(col){
    col.style.borderStyle="outset";
    col.style.color="black";
}
var createChoices = function(){
    var numChoices = choicesArr.length;
    var rows=3;
    var cols=3;
    var choices = document.getElementById("choices");
    for(var row=0;row<rows;row++){
        var currow = document.createElement("div");
        currow.style.display="flex";
        currow.id="test";
        choices.append(currow);
        for(var col=0;col<cols;col++){
            var curcol = document.createElement("div");
            currow.append(curcol);
            var id = col + cols*row;
            curcol.style.maxWidth="300px";
            curcol.style.width=(Math.floor((window.innerWidth-100)-(14*cols))/cols)+"px";
            curcol.style.height="20vh";
            curcol.style.border="7px outset";
            curcol.style.display="flex";
            curcol.style.justifyContent="center";
            curcol.innerHTML=choicesArr[id];
            curcol.style.fontFamily="sans-serif";
            curcol.style.fontWeight="bold";
            curcol.style.fontSize="3vh";
            curcol.id="choice"+id;
            curcol.addEventListener("mouseover",function(){mouseoverChoice(this);});
            curcol.addEventListener("mouseout",function(){mouseoutChoice(this);});
        }
    }
}
var resizeCheck = function(){
    var choices = document.getElementById("choices");
    for(var i=0;i<choices.childNodes.length;i++){
        var row = choices.childNodes[i];
        for(var j=0;j<row.childNodes.length;j++){
            var col = choices.childNodes[i].childNodes[j];
            var cols = choices.firstChild.childNodes.length;
            col.style.width=(Math.floor((window.innerWidth-100)-(14*cols))/cols)+"px";
        }
    }
};
var init = function(){
    createChoices();
    window.addEventListener("resize", resizeCheck);
}
init();