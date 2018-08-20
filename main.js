//New Javascript, better setup of different actions in game.

//TODO: FÅ KODEN TIL AT VIRKE

//Variables, ALL variables

    //Level and Experience variables
var DVXP = 0; //Darkvision Experience
var DVLVL = 0; //Darkvision Level
var SLVL = 1; //Search Level
var AXP = 0; //Attack XP from Creatures
var ALVL = 0; //Attack level
var VLVL = 0 //Vitality level

    //Level and Experience variables Ends

    //Attack related Variables
var Damage = 0; //Damage Done
var ACD = 0; //Attack cooldown
var DamageDone = 0; //Damage done to creatures
var attack_cd = 0; //Timer or Cooldown
var enemymaxhealth = 20; //Max health of enemies
var enemyhealth = 0; //the actual health of a mob
var enemyDamage = 0; //Damage a mob can do
    //Attack related Variables ends

    //Health related Variables
var HP = 0
var vitality = 10
    
    //Health related Variables ends

    //Automation
var amount_autohitters = 0; //Attack level
var cost_autohitters = 10; //Attack levelup requirement
    //Automation ends.

//Variables ends

//Functions

    //Buttonpresses and automation
        //Search and Search auto
function Search(number) {
    DVXP = DVXP + number/5;
    document.getElementById("DVXP").innerHTML = prettify(DVXP);
}


function Buy_AutoSearch() {
    var DVREQ = Math.floor(2 * Math.pow(1.08, DVLVL));  //finds the level up requirement
    if (DVXP >= DVREQ) {
        DVLVL = DVLVL + 1;  //If the Darkvision XP is higher than the requirement, increase Darkvision level, and decrease Darkvision XP by requirement.
        DVXP = DVXP - DVREQ;
        document.getElementById("DVREQ").innerHTML = prettify(DVREQ);   //remove decimals from Darkvision level up requirement, and show DVREQ to the HTML document
        document.getElementById("DVLVL").innerHTML = DVLVL; //Replace 0 in HTML document under DVLVL with DVLVL
        document.getElementById("DVXP").innerHTML = prettify(DVXP);
    }
}
        //Search and Search auto ends

        //Attack, Attack cooldown and Attack auto
function tryk(number) {
    if (attack_cd < 1){
        AXP = AXP + number/5;
        cooldown();
        document.getElementById("AXP").innerHTML = prettify(AXP);
        DamageDone = DamageDone + Damage;
        if (enemyhealth > 0){
            enemyhealth = enemyhealth - Damage;
        }
        if (enemyhealth <= 0){
            creature();
            
        }
        
        document.getElementById("DamageDone").innerHTML = prettify(DamageDone);
        document.getElementById("enemyhealth").innerHTML = prettify(enemyhealth)
        document.getElementById("enemymaxhealth").innerHTML = prettify(enemymaxhealth)
        
    }
}

        //AutoAttack
function tryk_auto(number) {    
    // the amout of damage done by auto hitter
    if (enemyhealth > 0){
        AXP = AXP + number/5;
        DamageDone = DamageDone + Damage / 5;
        enemyhealth = enemyhealth - Damage / 5;
        if (enemyhealth < 0){
            enemyhealth = 0;
        }
    }
    
    //Reduces decimal numbers of values
    document.getElementById("DamageDone").innerHTML = prettify(DamageDone);
    document.getElementById("enemyhealth").innerHTML = prettify(enemyhealth)
    document.getElementById("enemymaxhealth").innerHTML = prettify(enemymaxhealth)
    document.getElementById("AXP").innerHTML = prettify(AXP);
    
}

function buy_auto_1() {
    var cost_autohitters = Math.floor(10 * Math.pow(1.08, amount_autohitters));
    if (AXP >= cost_autohitters) {
        amount_autohitters = amount_autohitters + 1;
        AXP = AXP - cost_autohitters;
        document.getElementById("amount_autohitters").innerHTML = amount_autohitters;
        
    }
    var nextcost = Math.floor(10 * Math.pow(1.08, amount_autohitters));
    document.getElementById("cost_autohitters").innerHTML = nextcost;
}

function cooldown() {
    attack_cd = attack_cd + ACD;
}
function cd() {
    if (attack_cd > 0){
        attack_cd = attack_cd - 10;
    }
}


        //Attack,Attack cooldown and Attack auto ends.
    
    //Buttonpresses and automation ends.

    //Show/hide autobuyers, Weapon Choice, and Attack discovery
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

function AutoHitHider() {
    //get the button
    var Button1 = document.getElementById('Autohitter');
    
    //get buttons display property
    var displaySetting = Autohitter.style.display;
    
    if (displaySetting == 'block') {
        //If button to buy autohitter is visible hide it.
        Autohitter.style.display = 'none';
    }
}

function AutoHitShower() {
    //get the button
    var Button1 = document.getElementById('Autohitter');
    
    //Get buttons displat property
    var displaySetting = Button1.style.display;
    
    if (displaySetting == 'none') {
        //if button is invisible, make visible
        Button1.style.display = 'block';
    }
}


    //Choosing of weapons
function WeaponChoice1() {
    Damage += 6;
    ACD += 30;
    AttackShower();
    WeaponHider();
}

function WeaponChoice2() {
    Damage += 2;
    ACD += 10;
    AttackShower();
    WeaponHider();
}
    //Choosing of weapon ends



    //loss of health
function LoseHealth(enemyDamage) {
    HP = HP - enemyDamage
}
    //Loss of health ends



    //Calculation of Health
function CalcHP() {
    HP = vitality * 10;
}
    //Calculation of Health Ends



    //Mob aspects, Health, Boss-status, and attack damage.
function creature(){
    if (Math.random > 0.9){
        enemymaxhealth = 50;
        enemyDamage = Math.random * 10
    }
    
    else{
        enemymaxhealth = 20;
        enemyDamage = Math.random * 2
    }
    
    enemyhealth = enemymaxhealth;
}
    //Mob aspects, Health, Boss-status, and attack damage ends.



    //Showing of buttons    
function expansionChecker() {
    if (DVXP >= 2) {
        AutoSearchShower();
    }


    if (DVLVL >= 2 && Damage === 0) {
        WeaponShower();
    }
    
    
    if (AXP >= 10) {
	AutoHitShower();
	}
    
    
    if (AXP >= 10) {
	AutoHitShower();
	}
    
    
    
}
    //Showing of buttons ends

    //Save, Load, Reset, and reduction in amount of decimals
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
    //Save, Load, Reset, and reduction in amount of decimals ends.


//Functions ends

//Timers

window.setInterval(function () {
    expansionChecker();
}, 100) //Runs expansionChecker ever 100 ms, expansionChecker shows buttons for continuing the game.

window.setInterval(function () {
    if(amount_autoclickers > 0){
        
    }
}

window.setInterval(function () {
    if (amount_autohitters > 0){
        tryk_auto(amount_autohitters / 5);
    }
}, 100); //Checks if there is more than zero autohitters, and gives and clicks an amount based on the number of autohitters

window.setInterval(function () {
    cd();
}, 100); //Runs the attack cooldown function

window.setInterval(function () {
    combat();
}, 100);    //Runs the Combat function

//Timers end

//Debug
//function debug(){
//    alert(enemyhealth)
//}

//Debug ends

//Doesn't work
/*

// Creatures attacking system
function combat(){
    while (enemyhealth > 0 && enemyhealth < enemymaxhealth){
        if (Math.random() > 0.8){
            LoseHealth(enemyDamage){
            Health -= 1;
            document.getElementById("Health").innerHTML = Health;
        }
    }
}

SOMETHING ABOUT THIS MAKES THE LIVE SHOWCASE CRASH

*/
//Doesn't work ends

//FÅ KODEN TIL AT VIRKE