var editor = CodeMirror.fromTextArea(document.getElementById('editor'),{
    mode: "javascript",
    theme: "default",
    lineNumbers: true,
    readOnly: true
});
var activeClass = 'btn btn-primary active btnJS';
var inactiveClass = 'btn btn-outline-primary btnJS';

function PointsAction(){
    if(!sessionObject.Points){
        rectanglesBtn.className = inactiveClass;
        pointsBtn.className = activeClass;

        sessionObject.Points = true;
        //change to TBLR
    }
}

function RectanglesAction(){
    if(sessionObject.Points){
        rectanglesBtn.className = activeClass;
        pointsBtn.className = inactiveClass;

        sessionObject.Points = false;
        //change to TBLRHW
    }
}

var topPanelBtns = Array.from(document.getElementsByClassName('btnJS'));

for(var i = 0; i < topPanelBtns.length; i++){
    topPanelBtns[i].addEventListener('click', BtnToggle);
}

function BtnToggle(){
    if(this.id == 'Points'){
        document.getElementById('Rectangles').className = inactiveClass;
        this.className = activeClass;
    }
    else if(this.id == 'Rectangles'){
        document.getElementById('Points').className = inactiveClass;
        this.className = activeClass;
    }
    else if(this.id == 'Primary'){
        document.getElementById('Secondary').className = inactiveClass;
        this.className = activeClass;
    }
    else if(this.id == 'Secondary'){
        document.getElementById('Primary').className = inactiveClass;
        this.className = activeClass;
    }
    else if(this.id == 'Min'){
        document.getElementById('Max').className = inactiveClass;
        this.className = activeClass;
    }
    else if(this.id == 'Max'){
        document.getElementById('Min').className = inactiveClass;
        this.className = activeClass;
    }
}