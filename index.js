var table;
var cols;
var rows;
var selectedID=-1;
var allChoices=[];
var choicesArr = ["Vanilla","Chocolate","Strawberry","Moose Tracks","Rainbow Sherbet","Flava 2.0","Coffee Fudge","Cosmopolitan","Cookie Dough","Anotha flava"];
var mouseoverChoice = function(col){
    col.style.borderStyle="inset";
    col.style.color="rgb(97, 97, 255)";
}
var mouseoutChoice = function(col){
    if(col.id!=selectedID){
        col.style.borderStyle="outset";
        col.style.color="black";
    }
}
var clickChoice = function(choice){
    if(selectedID!=choice.id){
        if(selectedID!=-1){
            var lastid = parseInt(String(selectedID).substring(6));
            var lastcol = allChoices[lastid];
            lastcol.style.borderStyle="outset";
            lastcol.style.color="black";
        }
        selectedID=choice.id;
    }else{
        selectedID=-1;
    }
}
var createChoices = function(){
    var numChoices = choicesArr.length;
    rows=3;
    cols=3;
    if(numChoices>9){
        rows=3;
        cols=4;
    }
    if(numChoices>12){
        rows=4;
        cols=4;
    }
    var index=0;
    var choices = document.getElementById("choices");
    for(var row=0;row<rows;row++){
        var currow = document.createElement("div");
        currow.style.display="flex";
        currow.id="test";
        choices.append(currow);
        for(var col=0;col<cols;col++){
            if(index<numChoices){
                var curcol = document.createElement("div");
                currow.append(curcol);
                var id = col + cols*row;
                curcol.style.maxWidth="300px";
                curcol.style.width=(Math.floor((window.innerWidth-100)-(14*cols))/cols)+"px";
                curcol.style.height=(Math.floor((0.7*window.innerHeight-50)-(14*rows))/rows)+"px";
                curcol.style.border="7px outset";
                curcol.style.display="flex";
                curcol.style.justifyContent="center";
                curcol.innerHTML=choicesArr[id];
                curcol.style.fontFamily="sans-serif";
                curcol.style.fontWeight="bold";
                curcol.style.fontSize=parseInt(String(curcol.style.width))*0.1+"px";
                curcol.id="choice"+id;
                curcol.addEventListener("mouseover",function(){mouseoverChoice(this);});
                curcol.addEventListener("mouseout",function(){mouseoutChoice(this);});
                curcol.addEventListener("click",function(){clickChoice(this)});
                allChoices.push(curcol);
                index++;
            }
        }
    }
}
var resizeCheck = function(){
    for(var col of allChoices){
        col.style.width=(Math.floor((window.innerWidth-100)-(14*cols))/cols)+"px";
        col.style.height=(Math.floor((0.70*window.innerHeight-50)-(14*rows))/rows)+"px";
        col.style.fontSize=parseInt(String(col.style.width))*0.115+"px";
    }
}
var init = function(){
    createChoices();
    window.addEventListener("resize", resizeCheck);
}
init();