//New Javascript, better setup of different actions in game.
var i = 0;

const skills = new Map();

skills.set('DV', 0);

function barIDFromName(name) {
    var nameString = name + "Bar";
    return nameString;
};

function lvlIDFromName(name) {
    var nameString = name + "Lvl";
    return nameString;
};


//Game functions

function getXPNeeded(skill) {
    //first get the level of the skill
    var lvl = skills.get(skill)
        //Next, return the xp needed based on the level of the skill
    var nextcost = Math.floor(100 * Math.pow(1.08, lvl));
    return nextcost
}

function GameUpdate() {
    for (const [key, value] of skills) {
        var name = lvlIDFromName(key)
        document.getElementById(name).innerHTML = value;
    }
}

function increaseLvl(skill) {
    var curSkillLvl = skills.get(skill);
    var newSkillLvl = curSkillLvl + 1;
    skills.set(skill, newSkillLvl);

};

function activate(skill) {
    if (i == 0) {
        i = 1;
        var name = barIDFromName(skill)
        var elem = document.getElementById(name);
        var width = 1;
        var id = setInterval(frame, 10);



        var max = getXPNeeded(skill)



        function frame() {
            if (width >= max) {
                clearInterval(id);
                i = 0;
                elem.style.width = 0;
                increaseLvl(skill)
            } else {
                width++;

                elem.style.width = (width / max) * 100 + "%";
            }
        }
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
    var saves = {};
    localStorage.setItem("saves", JSON.stringify(saves));
}

// loads files from storage
function load() {
    localStorage.getItem("saves")
}
// resetter values
function reset() {
    localStorage.removeItem("saves");

}
//Save, Load, Reset, and reduction in amount of decimals ends.


//Functions ends

//Timers

window.setInterval(function() {
    GameUpdate();
}, 10)

//Timers end