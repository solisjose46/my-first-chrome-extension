var buttons = document.getElementsByClassName('buttonsJS');
var activeClass = 'btn btn-primary btn-sm buttonsJS';
var inactiveClass = 'btn btn-outline-primary btn-sm buttonsJS';

document.getElementById('canvas').addEventListener('click', createPoint);

var table = null;

var topPanelHtml = {
    group1: null,
    group2: null,
    group3: null
};

var panelHtml = {
    collapsed: false,
    side: null
};

var optionsHTML = {
    height: null,
    width: null
};

//-----make html elements draggable-----
function dragElement(elmnt){
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;
    
    function dragMouseDown(e){
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }
    
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
//classes
class Row{
    constructor(cells){
        this.cellHtml = [];
        this.html;

        var tr = document.createElement('tr');
        var th = document.createElement('th');
        th.setAttribute('scope', 'row');
        th.innerHTML = cells[0];
        this.cellHtml[0] = th;
        tr.appendChild(th);

        for(var i = 1; i < cells.length; i++){
            var td = document.createElement('td');
            td.innerText = cells[i];
            this.cellHtml[i] = td;
            tr.appendChild(td);
        }

        //document.getElementById('table-body').appendChild(tr);
        this.html = tr;
    }
    changeCell(cell, value){
        this.cellHtml[cell].innerHTML = value;
    }
    removeRow(){
        this.html.remove();
    }
}

class Table{
    constructor(options){
        this.optionsHTML;
        this.rows = [];
        this.html;
        this.tabel_body;

        var col = document.createElement('div');
        col.className = 'col';
        var table = document.createElement('table');
        table.className = 'bg-white table table-sm table-striped table-hover table-bordered';

        var thead = document.createElement('thead');
        var tr = document.createElement('tr');
        
        
        for(var i = 0; i < options.length; i++){
            var th = document.createElement('th');
            th.setAttribute('scope', 'row');
            th.innerText = options[i];
            tr.appendChild(th);
        }

        thead.appendChild(tr);
        table.appendChild(thead);
        var tbody = document.createElement('tbody');
        tbody.setAttribute('id', 'table-body');
        this.tabel_body = tbody;
        table.appendChild(tbody);
        col.appendChild(table);
        this.html = col;
    }
    newRow(values){
        var newRow = new Row(values);
        this.rows.push(newRow);
        this.tabel_body.appendChild(newRow.html);
    }
    removeRow(rowNumber){
        //etc
    }
}
class Point{
    constructor(top, bottom, left, right){
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
        this.html;

        var div = document.createElement('div');
        div.className = 'rounded-circle bg-warning point';
        this.html = div;
    }
}

function createPoint(e){
    e.preventDefault();
    var canvas = document.getElementById('canvas');
    var top = parseInt(window.getComputedStyle(canvas).top.replace('px', ''));
    var left = parseInt(window.getComputedStyle(canvas).left.replace('px', ''));

    // var newTop = e.pageY - top;
    // var newBottom = newTop - canvas.style.height.replace('px', );
    // var newLeft = e.pageX - left;
    // var newRight = newLeft - window.innerWidth;

    // console.log('top: ' + newTop);
    // console.log('bottom: ' + newBottom);
    // console.log('left: ' + newLeft);
    // console.log('right: ' + newRight);

    console.log(parseInt(window.getComputedStyle(canvas).width.replace('px', '')));

    //left off here
    
    //var point = new Point()
}