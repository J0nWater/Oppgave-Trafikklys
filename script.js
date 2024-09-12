
showView();
function showView(){
    document.getElementById('showView').innerHTML = /*HTML*/`
    <h1>Trafikklys</h1>
    <div class="trafficLightContainer">
        <div id="red" class="red lamp"></div>
        <div id="orange" class="orange lamp"></div>
        <div id="green" class="green lamp"></div>
    </div>
    <br>
    <button onclick="onLight('red','red','orange','green')">Red</button>
    <button onclick="onLight('orange','orange','red','green')">orange</button>
    <button onclick="onLight('green','green','red','orange')">Green</button>
    
    <br>
    <button onclick="autoLight()">Start Trafikklys</button>
    
    `
}

function autoLight(){
    setTimeout(onRed, 1000);
}
function onRed(){
    onLight('red','red','orange','green');
    setTimeout(onRedOrange, 3000);
}
function onRedOrange(){
    onLight('red','orange','green','green');
    setTimeout(onGreen, 1000);
}
function onGreen(){
    onLight('green','green','red','orange');
    setTimeout(onOrange, 2000);
}
function onOrange(){
    onLight('orange','orange','red','green');
    setTimeout(onRed, 1000);
}
function onLight(divId1, divId2, divId3, divId4){
    document.getElementById(divId1).classList.add('active');
    document.getElementById(divId2).classList.add('active');
    document.getElementById(divId3).classList.remove('active');
    document.getElementById(divId4).classList.remove('active');
}

