function TopPanelCollapse(collapse){
    document.getElementById(collapse).className = activeClass;
    if(document.getElementById('insert-top-panel').childElementCount <= 2 && collapse == 'Plus'){
        document.getElementById('Minus').className = inactiveClass;

        document.getElementById('insert-top-panel').appendChild(topPanelHtml.group1);
        document.getElementById('insert-top-panel').appendChild(topPanelHtml.group2);
        document.getElementById('insert-top-panel').appendChild(topPanelHtml.group3);
    }
    else if(document.getElementById('insert-top-panel').childElementCount >= 5 && collapse == 'Minus'){
        document.getElementById('Plus').className = inactiveClass;

        topPanelHtml.group1 = document.getElementById('group1');
        topPanelHtml.group2 = document.getElementById('group2');
        topPanelHtml.group3 = document.getElementById('group3');

        document.getElementById('group1').remove();
        document.getElementById('group2').remove();
        document.getElementById('group3').remove();
    }
}

function SidePanelCollapse(collapse){
    document.getElementById(collapse).className = activeClass;
    if(collapse == 'Min' && panelHtml.collapsed == false){
        var sidePanel = document.getElementById('side-panel');
        panelHtml.side = sidePanel;
        sidePanel.remove();
        panelHtml.collapsed = true;
        document.getElementById('Max').className = inactiveClass;
    }
    else if(collapse == 'Max' && panelHtml.collapsed == true){
        document.body.appendChild(panelHtml.side);
        panelHtml.collapsed = false;
        document.getElementById('Min').className = inactiveClass;
    }
}

function changeOptions(option){
    document.getElementById(option).className = activeClass;
    var table = document.getElementById('table-options');
    if(option == 'Points' && table.childElementCount == 6){
        document.getElementById('Rectangles').className = inactiveClass;
        var height = document.getElementById('Height');
        var width = document.getElementById('Width');
        optionsHTML.height = height;
        optionsHTML.width = width;
        height.remove();
        width.remove();
    }
    else if(option == 'Rectangles' && table.childElementCount == 4){
        document.getElementById('Points').className = inactiveClass;
        optionsHTML.height.addEventListener('click', clicked);
        optionsHTML.width.addEventListener('click', clicked);
        table.appendChild(optionsHTML.height);
        table.appendChild(optionsHTML.width);

    }
}

function changeTheme(theme){
    document.getElementById(theme).className = activeClass;
    if(theme == 'Primary'){
        document.getElementById('Secondary').className = inactiveClass;
        //
    }
    else{
        document.getElementById('Primary').className = inactiveClass;
    }
}