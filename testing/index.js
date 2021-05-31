//make html elements draggable
dragElement(document.getElementById('top-panel'));
dragElement(document.getElementById('side-panel'));

//since points is the default
optionsHTML.height = document.getElementById('Height');
optionsHTML.width = document.getElementById('Width');
document.getElementById('Height').remove();
document.getElementById('Width').remove();

for(var i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', clicked);
}

function clicked(){
    if(this.id == 'Points' || this.id == 'Rectangles'){
        changeOptions(this.id);
    }
    else if(this.id == 'Primary'){
        if(this.className == activeClass){
            this.className = inactiveClass;
            document.getElementById('Secondary').className = activeClass;
        }
        else{
            this.className = activeClass;
            document.getElementById('Secondary').className = inactiveClass;
        }
    }
    else if(this.id == 'Secondary'){
        if(this.className == activeClass){
            this.className = inactiveClass;
            document.getElementById('Primary').className = activeClass;
        }
        else{
            this.className = activeClass;
            document.getElementById('Primary').className = inactiveClass;
        }
    }
    else if(this.id == 'Min' || this.id == 'Max'){
        SidePanelCollapse(this.id);
    }
    else if(this.id == 'Plus' || this.id == 'Minus'){
        TopPanelCollapse(this.id);
    }
    else if(this.id == 'Top' || this.id == 'Bottom' || this.id == 'Left' || this.id == 'Right' || this.id == 'Height' || this.id == 'Width'){
        if(this.className == activeClass){
            this.className = inactiveClass;
        }
        else{
            this.className = activeClass;
        }
    }
    else if(this.id == 'make-table'){
        MakeTable();
    }
}