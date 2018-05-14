//Foreground Processes

var DVXP = 0;
var DVLVL = 0;
var SLVL = 1;

//Search the darkness
function Search(number) {
    DVXP = DVXP + number/5;
    document.getElementById("DVXP").innerHTML = prettify(DVXP);
    
    if (DVXP >= 2) {
        AutoSearchShower();
	}
	
	if (DVLVL == 2 && Damage == 0) {
        WeaponShower();
	}
}

// buy autosearches. 
function Buy_AutoSearch() {
    var DVREQ = Math.floor(2 * Math.pow(1.08, DVLVL));  //finds the level up requirement
    if (DVXP >= DVREQ) {
        DVLVL = DVLVL + 1;  //If the Darkvision XP is hagher than the requirement, increase Darkvision level, and decrease Darkvision XP by requirement.
        DVXP = DVXP - DVREQ;
        document.getElementById("DVREQ").innerHTML = prettify(DVREQ);   //remove decimals from Darkvision level up requirement, and show DVREQ to the HTML document
        document.getElementById("DVLVL").innerHTML = DVLVL; //Replace 0 in HTML document under DVLVL with DVLVL
    }
}

//auto calls function every 100ms 
window.setInterval(function () {
    Search(DVLVL/10);
}, 100) 







//Atack and Weapon

var Damage = 0 //Damage done
var AXP = 0; //Attack XP from Creatures
var ALVL = 0; //Attack level
var ACD = 0; //Attack cooldown
var DamageDone = 0; //Damage done to creatures

//WeaponChoice
function WeaponChoice1() {
    Damage = 6;
    ACD = 3000;
    AttackShower();
    WeaponHider();
}

function WeaponChoice2() {
    Damage = 2;
    ACD = 1000;
    AttackShower();
    WeaponHider();
}

//Attack
function tryk(number) {
    AXP = AXP + number/5;
    document.getElementById("AXP").innerHTML = prettify(AXP);
        
    DamageDone = DamageDone + Damage
    Document.getElementById("DamageDone").innerHTML = prettify(DamageDone)
    
if (AXP >= 10) {
	ButtonShower();
	}
}

var amount_autohitters = 0; //Attack level
var cost_autohitters = 10; //Attack levelup requirement

// buy autohitters. 
function buy_auto_1() {
    var cost_autohitters = Math.floor(10 * Math.pow(1.08, amount_autohitters));
    if (AXP >= cost_autohitters) {
        amount_autohitters = amount_autohitters + 1;
        AXP = AXP - cost_autohitters;
        document.getElementById("attacks").innerHTML = prettify(attacks);
        document.getElementById("amount_autohitters").innerHTML = amount_autohitters;
    }
    var nextcost = Math.floor(10 * Math.pow(1.08, amount_autohitters));
    document.getElementById("cost_autohitters").innerHTML = nextcost;
}

//auto calls function every 100ms 
window.setInterval(function () {
    tryk(amount_autohitters / 5);
}, 100);




















//Background Processes

var TimerVar

function Timer() {
	TimerVar = setTimeout(tryk(attacks), ACD)
}

function WeaponShower() {
    var WeaponChoiceEvent = document.getElementById('WeaponChoiceEvent');
    var WeaponChoiceEventDisplay = WeaponChoiceEvent.style.display;
    
    if (WeaponChoiceEventDisplay == 'none') {
        WeaponChoiceEvent.style.display = 'block';
    }
}

function WeaponHider() {
    var WeaponChoiceEvent = document.getElementById('WeaponChoiceEvent');
    var WeaponChoiceEventDisplay = WeaponChoiceEvent.style.display;
    
    if (WeaponChoiceEventDisplay == 'block') {
        WeaponChoiceEvent.style.display = 'none';
    }
}

function AutoSearchShower() {
    //get the button
    var AutoSearch = document.getElementById('AutoSearch');
    
    //get buttons display property
    var AutoSearchDisplay = AutoSearch.style.display;
    
    if (AutoSearchDisplay == 'none') {
        //If button to buy autohitter is visible hide it.
        AutoSearch.style.display = 'block';
    }
}

function AttackShower() {
    //get the button
    var Attacks = document.getElementById('Attacks');
    
    //get buttons display property
    var AttackDisplay = Attacks.style.display;
    
    if (AttackDisplay == 'none') {
        //If button to buy autohitter is visible hide it.
        Attacks.style.display = 'block';
    }
}

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
