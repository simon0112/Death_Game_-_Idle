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
	
	if (DVLVL == 2) {
        WeaponShower();
	}
}

// buy autosearches. 
function Buy_AutoSearch() {
    var DVREQ = Math.floor(2 * Math.pow(1.08, DVLVL));  //finds the level up requirement
    if (DVXP >= DVREQ) {
        DVLVL = DVLVL + 1;  //If the Darkvision XP is hagher than the requirement, increase Darkvision level, and decrease Darkvision XP by requirement.
        DVXP = DVXP - DVREQ;
        document.getElementById("DVREQ").innerHTML = prettify(DVREQ);   //remove decimals from Darkvision level up requirement.
        document.getElementById("DVLVL").innerHTML = DVLVL;
    }
}

//Buy next level of search skill
function Buy_AutoSearch() {
    var DVREQ = Math.floor(2 * Math.pow(1.08, DVLVL));  //finds the level up requirement
    if (DVXP >= DVREQ) {
        DVLVL = DVLVL + 1;  //If the Darkvision XP is hagher than the requirement, increase Darkvision level, and decrease Darkvision XP by requirement.
        DVXP = DVXP - DVREQ;
        document.getElementById("DVREQ").innerHTML = prettify(DVREQ);   //remove decimals from Darkvision level up requirement.
        document.getElementById("DVLVL").innerHTML = DVLVL;
}    } 

//auto calls function every 100ms 
window.setInterval(function () {
    Search(DVLVL/10);
}, 100) 







//Atack and Weapon

var Damage = 0 //Damage done
var attacks = 0; //Attack XP from Creatures
var ALVL = 0; //Attack level
var ACD = 0; //Attack cooldown

//WeaponChoice
function WeaponChoice1() {
    Damage = 6;
    ACD = 15;
    AttackShower();
    WeaponHider();
}

function WeaponChoice2() {
    Damage = 2;
    ACD = 5;
    AttackShower();
    WeaponHider();
}

//Attack
function tryk(number) {
    attacks = attacks + number/5;   //gets the amount of XP gained from each click.
    
    Damage = Damage * Math.pow(1.05, ALVL) //Damage increses with attack level
    
    
    
    }
        
    if (attacks >= 10) {
       ButtonShower();
    }

var amount_autohitters = 0; //Atta
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