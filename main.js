//Foreground Processes
var attacks = 0;

//Attack
function tryk(number) {
    attacks = attacks + number;
    document.getElementById("attacks").innerHTML = prettify(attacks);
    
    if (attacks >= 8) {
        ButtonShower()
    }
}

var amount_autohitters = 0;
var cost_autohitters = 10;

// buy autohitters. 
function buy_auto_1() {
    var cost_autohitters = Math.floor(10 * Math.pow(1.08, amount_autohitters));
    if (attacks >= cost_autohitters) {
        amount_autohitters = amount_autohitters + 1;
        attacks = attacks - cost_autohitters;
        document.getElementById("attacks").innerHTML = prettify(attacks);
        document.getElementById("amount_autohitters").innerHTML = amount_autohitters;
    }
    var nextcost = Math.floor(10 * Math.pow(1.08, amount_autohitters));
    document.getElementById("cost_autohitters").innerHTML = nextcost;
}

//auto calls function every 100ms 
window.setInterval(function () {
    tryk(amount_autohitters / 10);
}, 100);




















//Background Processes

function ButtonHider() {
    //get the button
    var Button1 = document.getElementById('Autohitter');
    
    //get buttons display property
    var displaySetting = Button1.style.display;
    
    if (displaySetting == 'block') {
        //If button to buy autohitter is visible hide it.
        Button1.style.display = 'none';
    }
}

function ButtonShower() {
    //get the button
    var Button1 = document.getElementById('Autohitter');
    
    //Get buttons displat property
    var displaySetting = Button1.style.display;
    
    if (displaySetting == 'none') {
        //if button is invisible, make visible
        Button1.style.display = 'block';
    }
}

// Removes decimals
function prettify(input) {
    var output = Math.round(input * 1000000) / 1000000;
	return output;
}

// saves files to storage
function save() {
    var saves = {
        attacks: attacks,
        amount_autohitters: amount_autohitters,
        cost_autohitters: cost_autohitters
    
    };
    localStorage.setItem("saves", JSON.stringify(saves));
}

// loads files from storage
function load() {
    var savegame = JSON.parse(localStorage.getItem("saves"));
    
    // clicks
    if (typeof savegame.attacks !== "undefined") {
        clicks = savegame.attacks;
    }
    
    // autoclickers
    if (typeof savegame.amount_autohitters !== "undefined") {
        amount_autoclickers = savegame.amount_autohitters;
    }
    
    // calculate costs
    var nextcost = Math.floor(10 * Math.pow(1.08, amount_autohitters));
    document.getElementById("cost_autohitters").innerHTML = nextcost;
    
    
    // update visuals
    document.getElementById("amount_autohitters").innerHTML = amount_autohitters;
    
        
}
// resetter values
function reset() {
    localStorage.removeItem("saves");
    attacks = 0;
    amount_autohitters = 0;
    
    // updates visuals
    document.getElementById("amount_autohitters").innerHTML = amount_autohitters;
    
    document.getElementById("cost_autohitters").innerHTML = cost_autohitters;
}

// auto saver
window.setInterval(function () {
    save();
}, 2000);