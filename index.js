var topPanelBtns = document.getElementsByClassName('btnJS');
var activeClass = 'btn btn-primary active btnJS';
var inactiveClass = 'btn btn-outline-primary btnJS';

for(var i = 0; i < topPanelBtns.length; i++){
    topPanelBtns[i].addEventListener('click', toggleBtn);
}

var editor = CodeMirror.fromTextArea(document.getElementById('editor'),{
    mode: "javascript",
    theme: "default",
    lineNumbers: true,
    readOnly: true
});

function toggleBtn(){
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

function showOptions(){
    
}