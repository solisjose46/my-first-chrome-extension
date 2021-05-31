function MakeTable(){
    var options = Array.from(document.getElementById('table-options').children);
    var make = false;
    var opt = [];
    opt.push('#');
    //check if at least one option is selected
    for(var i = 0; i < options.length; i++){
        if(options[i].className == activeClass){
            opt.push(options[i].innerHTML);
            //make = true;
            //break;
        }
    }
    if(opt.length > 1){
        console.log('table making...');
        console.log(opt);
        table = new Table(opt);
        var insert = document.getElementById('insert-side-panel');
        //console.log(insert.firstElementChild);
        insert.firstElementChild.remove();
        //insert.appendChild(table.html);
        var row = document.createElement('div');
        row.className = 'row pt-1';
        row.appendChild(table.html);
        insert.appendChild(row);
        row = document.createElement('div');
        row.className = 'row pb-1';
        row.appendChild(makeTableBtns('Format'));
        row.appendChild(makeTableBtns('Reset'));
        insert.appendChild(row);
    }
    else{
        alert('Please select at least one option to record');
    }
}

function makeTableBtns(name){
    var col = document.createElement('div');
    var btn = document.createElement('button');
    btn.innerText = name;
    btn.className = 'btn btn-primary';
    btn.setAttribute('type', 'submit');
    col.appendChild(btn);
    return col;
}