$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let myAP = 100;

function onReady() {
    $('.arcane-scepter').on('click', arcaneScepter);
    $('.entangle').on('click', entangle);
    $('.dragon-blade').on('click', dragonBlade);
    $('.star-fire').on('click', starFire);
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}
function arcaneScepter(){
    if (myAP>=12){
        myAP-=12;
        fungusHP-=14;
        if(fungusHP<=0){
            fungusHP=0;
        }
    } 
}
function entangle(){
    if (myAP>=23){
        myAP-=23;
        fungusHP-=9;
        if(fungusHP<=0){
            fungusHP=0;
        }
    } 
}
function dragonBlade(){
    if (myAP>=38){
        myAP-=38;
        fungusHP-=47;
        if(fungusHP<=0){
            fungusHP=0;
        }
    } 
}
function starFire(){
    if (myAP>=33){
        myAP-=33;
        fungusHP-=25;
        if(fungusHP<=0){
            fungusHP=0;
        }
    } 
}
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

