function MakeTable(){
    var options = Array.from(document.getElementById('table-options').children);
    var make = false;
    //check if at least one option is selected
    for(var i = 0; i < options.length; i++){
        if(options[i].className == activeClass){
            make = true;
            break;
        }
    }
    if(make){
        console.log('table making...');
    }
    else{
        alert('Please select at least one option to record');
    }
}