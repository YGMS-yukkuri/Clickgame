const mainbutton = document.querySelector("#mainbtn");
const ClickUpgrade = document.querySelector("#ClickUpgrade");
const AutoUpgrade1 = document.querySelector('#AutoUpgrade1');
const AutoUpgrade2 = document.querySelector('#AutoUpgrade2');
const AutoUpgrade3 = document.querySelector('#AutoUpgrade3');
const AutoUpgrade4 = document.querySelector('#AutoUpgrade4');
let zouka = 0;
let count = 0;
let auto1 = 0;
let auto2 = 0;
let auto3 = 0;
let auto4 = 0;
let clickUpgCost = 10;
let auto1Cost = 10;
let auto2Cost = 10;
let auto3Cost = 10;
let auto4Cost = 10;
mainbutton.addEventListener('click', function(){
    console.log("mainButton");
    mainClick();
});
ClickUpgrade.addEventListener('click', function(){
    console.log("UpgradeButton")
});
AutoUpgrade1.addEventListener('click', function(){
    console.log("UPG1")
});
AutoUpgrade2.addEventListener('click', function(){
    console.log("UPG2")
});
AutoUpgrade3.addEventListener('click', function(){
    console.log("UPG3")
});
AutoUpgrade4.addEventListener('click', function(){
    console.log("UPG4")
})

function mainClick(){
    count = zouka + 1;
}