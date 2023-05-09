$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let HP = 100;
let AP = 100;
let attacks = {
    arcaneScepter: {apCost:12, hpCost:14},
    entangle: {apCost:23, hpCost:9},
    dragonBlade: {apCost:38, hpCost:47},
    starFire: {apCost:33, hpCost:25}
}

function onReady() {
    $('.attack-btn').on('click', attackButton);
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}
function attackButton(event){
    event.preventDefault();
    let attackType = $(this).attr('id');
    let attack = attacks[attackType];

    //check if we have enough AP to use the attack
    if(AP < attack.apCost){
        //Can't attack - not enough AP
        return;
    }
    //reduce enemy HP
    HP-=attack.hpCost;
    if(HP < 0){
        HP=0;
    }
    //update fungus hp and progress bar
    updateHP();
    //see if fungus is defeated
    if(HP === 0){
        $('#fungus').removeClass('walk').addClass('dead'); //update class
        //disable attack buttons
        $('.attack-btn').attr('disabled', true);
    }
    //reduce my AP
    AP-= attack.apCost;
    if(AP < 0){
        AP=0;
    }
    updateAP();

    //check if we are out of AP
    if(AP===0){
        //if yes, change class to jump
        $('#fungus').removeClass('walk').addClass('jump');
        //disable attack buttons
        $('.attack-btn').attr('disabled', true);
    }
}
//update ap and hp at the end.
updateAP();
updateHP();
function updateAP(){
    $('.ap-text').text(AP);
    $('#ap-meter').val(AP);
}
function updateHP(){
    $('.hp-text').text(HP);
    $('#hp-meter').val(HP);
}


//----------------REQUIREMENTS----------------------
// -  update _state_ variable(s) to make the Freaky Fungus lose hit points (HP), and to reduce your attack points (AP).

// - See [Attacks](#attacks) below, for the AP and HP values of each attack

// - State may be held in one or more variables of your choosing

// - HP and AP values may not be negative (set to zero, if they would otherwise be negative)

// - Update the text above the attack buttons (eg, "100 AP")

// - Update the text above the enemy fungus (eg, "100 HP")

// - If the Freaky Fungus runs out of HP, the monster is dead and you win! 

// Replace the `walk` class with a `dead` class on the freaky-fungus element, to make them fall over and die.

// - If you run out of AP, the monster wins and humanity is doomed 😢 
// Replace the `walk` class with a `jump` class on the freaky-fungus element, to make them jump for the glory of the fungal race.

//   - You may no longer attack, if AP is `0`. Give all of the attack buttons 
// a [`disabled`](https://www.w3schools.com/tags/att_button_disabled.asp) attribute, so they may no longer be used. 

//-------------------STRETCH GOALS-----------------------
// **Progress Bar**

// When state changes:
//   - Update the value of each `<progress>` element

// > Hint: the jQuery `.val()` method updates the `value` attribute of HTML elements!

// **HP Regeneration**

// [Scientist have recently revealed](https://www.nature.com/articles/s41598-022-05715-9) that fungi are tougher under harsh conditions.

// If the Freaky Fungus' HP falls below 50, have it regenerate 1 HP every second.

// > HINT: Look up the built in `setInterval()` function!
