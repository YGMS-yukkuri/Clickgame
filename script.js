const mainbutton = document.querySelector("#mainbtn");
const ClickUpgradeBtn = document.querySelector("#ClickUpgrade");
const MachineUpgradeBtn = document.querySelector('#AutoUpgrade1');
const FactoryUpgradeBtn = document.querySelector('#AutoUpgrade2');
const GeneratorUpgradeBtn = document.querySelector('#AutoUpgrade3');
const GodUpgradeBtn = document.querySelector('#AutoUpgrade4');
const Clearpoint = 100000;
const MachineUpgMenu = document.getElementById("MachineUpgMenu");
const FactoryUpgMenu = document.getElementById("FactoryUpgMenu");
const GeneratorUpgMenu = document.getElementById("GeneratorUpgMenu");
const GodUpgMenu = document.getElementById("GodUpgMenu");
let zouka = 0;
let count = 0;
let clickUpg = 0;
let MachineUpgradeCount = 0;
let FactoryUpgradeCount = 0;
let GeneratorUpgradeCount = 0;
let GodUpgradeCount = 0;
let clickUpgCost = 10;
let MachineUpgradeCost = 50;
let FactoryUpgradeCost = 100;
let GeneratorUpgradeCost = 500;
let GodUpgradeCost = 2500;
let GodActive = 0;
let godpower = 1;
let Active = 1;
function randommath(){
    return Math.floor(Math.random() * 3) + 8; // 8, 9, 10のいずれかをランダムに返す
}


mainbutton.addEventListener('click', function () {
    mainClick();
    console.log(randommath())
});
ClickUpgradeBtn.addEventListener('click', function () {
    if (clickUpgCost > count) {
        return;
    }
    count = count - clickUpgCost;
    clickUpg++;
    zouka++;
    if (zouka % 5 === 0) {
        clickUpgCost = Math.floor(clickUpgCost * (randommath() / 10));
    }
    else {
        clickUpgCost = Math.floor(clickUpgCost * 1.1);
    }
    document.getElementById("NOW").textContent = `NOW:${count}`;
    document.getElementById("ClickUpgradeCost").textContent = `コスト:${clickUpgCost}`;
    ClickUpgradeBtn.innerHTML = "クリック" + "<br>" + `アップグレード(${clickUpg})`;

});
MachineUpgradeBtn.addEventListener('click', function () {
    if (MachineUpgradeCost > count) {
        return;
    }
    count = count - MachineUpgradeCost;
    MachineUpgradeCount++;
    if (MachineUpgradeCount % 5 === 0) {
        MachineUpgradeCost = Math.floor(MachineUpgradeCost * (randommath() / 10));
    }
    else {
        MachineUpgradeCost = Math.floor(MachineUpgradeCost * 1.2);
    }
    document.getElementById("NOW").textContent = `NOW:${count}`;
    document.getElementById("auto1UpgradeCost").textContent = `コスト:${MachineUpgradeCost}`;
    MachineUpgradeBtn.innerHTML = "機械化" + "<br>" + `(${MachineUpgradeCount})`;
});
FactoryUpgradeBtn.addEventListener('click', function () {
    if (FactoryUpgradeCost > count) {
        return;
    }
    count = count - FactoryUpgradeCost;
    FactoryUpgradeCount++;
    if (FactoryUpgradeCount % 5 === 0) {
        FactoryUpgradeCost = Math.floor(FactoryUpgradeCost * (randommath() / 10));
    }
    else {
        FactoryUpgradeCost = Math.floor(FactoryUpgradeCost * 1.25);
    }
    document.getElementById("NOW").textContent = `NOW:${count}`;
    document.getElementById("auto2UpgradeCost").textContent = `コスト:${FactoryUpgradeCost}`;
    FactoryUpgradeBtn.innerHTML = "工業化" + "<br>" + `(${FactoryUpgradeCount})`;
});
GeneratorUpgradeBtn.addEventListener('click', function () {
    if (GeneratorUpgradeCost > count) {
        return;
    }
    count = count - GeneratorUpgradeCost;
    GeneratorUpgradeCount++;
    if (GeneratorUpgradeCount % 5 === 0) {
        GeneratorUpgradeCost = Math.floor(GeneratorUpgradeCost * (randommath() / 10));
    }
    else {
        GeneratorUpgradeCost = Math.floor(GeneratorUpgradeCost * 1.3);
    }
    document.getElementById("NOW").textContent = `NOW:${count}`;
    document.getElementById("auto3UpgradeCost").textContent = `コスト:${GeneratorUpgradeCost}`;
    GeneratorUpgradeBtn.innerHTML = "ジェネレーター" + "<br>" + `(${GeneratorUpgradeCount})`;
});
GodUpgradeBtn.addEventListener('click', function () {
    if (GodUpgradeCost > count) {
        return;
    }
    count = count - GodUpgradeCost;
    GodUpgradeCount++;
    godpower = godpower * 2;
    zouka = zouka * godpower * 3 / 2;
    if (GodUpgradeCount % 5 === 0) {
        GodUpgradeCost = Math.floor(GodUpgradeCost * (randommath() / 10));
    }
    else {
        GodUpgradeCost = Math.floor(GodUpgradeCost * 1.7);
    }
    document.getElementById("NOW").textContent = `NOW:${count}`;
    document.getElementById("auto4UpgradeCost").textContent = `コスト:${GodUpgradeCost}`;
    GodUpgradeBtn.innerHTML = "神の手" + "<br>" + `(${GodUpgradeCount})`;
})

function mainClick() {
    count = Math.floor(count + zouka + 1);
    document.getElementById("NOW").textContent = `NOW:${count}`;
}

function updateprogress(point) {
    const progbar = document.getElementById("progress-bar");
    progbar.style.width = point + "%";
}

function Activate(){
    if (count > 35){
        MachineUpgMenu.style.display = "flex";
    }
    if(count > 70){
        FactoryUpgMenu.style.display = "flex";
    }
    if(count > 350){
        GeneratorUpgMenu.style.display = "flex";
    }
    if(count > 2000){
        GodUpgMenu.style.display = "flex";
        GodActive = 1;
    }
}
function Automaticloop() {
    if (Active === 0) {
        return;
    }
    if (count >= Clearpoint) {
        document.getElementById("game-clear-popup").style.display = "flex";
        Active = 0;
    }
    if (GodActive === 0){
        Activate();    
    }
    let temp = 0;
    temp = Math.floor(MachineUpgradeCount * 2 + FactoryUpgradeCount * 5 + GeneratorUpgradeCount * 10 * godpower);
    count = count + temp;
    document.getElementById("NOW").textContent = `NOW:${count}`;
    document.getElementById("AUTO").textContent = `AUTO:${Math.floor(temp * 2)}/s`;//0.5秒ごとに実行されるので2倍
    document.getElementById("perclick").textContent = `PerClick:${Math.floor(zouka + 1)}`;
    progtemp = count / Clearpoint;
    progtemp = progtemp * 100;
    updateprogress(progtemp);
}


function debug(a, n) {
    switch (a) {
        case "now":
            count = n;
            document.getElementById("NOW").textContent = `NOW:${count}`;
            break;
        case "reset":
            reset();
            break;
        default:
            console.log("Invalid debug command");
            break;
    }
}
function reset() {
    zouka = 0;
    count = 0;
    clickUpg = 0;
    MachineUpgradeCount = 0;
    FactoryUpgradeCount = 0;
    GeneratorUpgradeCount = 0;
    GodUpgradeCount = 0;
    clickUpgCost = 10;
    MachineUpgradeCost = 50;
    FactoryUpgradeCost = 100;
    GeneratorUpgradeCost = 500;
    GodUpgradeCost = 2500;
    GodActive = 0;
    godpower = 1;
    MachineUpgMenu.style.display = "none";
    FactoryUpgMenu.style.display = "none";
    GeneratorUpgMenu.style.display = "none";
    GodUpgMenu.style.display = "none";
    document.getElementById("NOW").textContent = `NOW:${count}`;
    document.getElementById("ClickUpgradeCost").textContent = `コスト:${clickUpgCost}`;
    document.getElementById("auto1UpgradeCost").textContent = `コスト:${MachineUpgradeCost}`;
    document.getElementById("auto2UpgradeCost").textContent = `コスト:${FactoryUpgradeCost}`;
    document.getElementById("auto3UpgradeCost").textContent = `コスト:${GeneratorUpgradeCost}`;
    document.getElementById("auto4UpgradeCost").textContent = `コスト:${GodUpgradeCost}`;
    ClickUpgradeBtn.innerHTML = "クリック" + "<br>" + `アップグレード(${clickUpg})`;
    MachineUpgradeBtn.innerHTML = "機械化" + "<br>" + `(${MachineUpgradeCount})`;
    FactoryUpgradeBtn.innerHTML = "工業化" + "<br>" + `(${FactoryUpgradeCount})`;
    GeneratorUpgradeBtn.innerHTML = "ジェネレーター" + "<br>" + `(${GeneratorUpgradeCount})`;
    GodUpgradeBtn.innerHTML = "神の手" + "<br>" + `(${GodUpgradeCount})`;
    document.getElementById("game-clear-popup").style.display = "none"
    updateprogress(0);
    console.log("Game has been reset.");
}

setInterval(Automaticloop, 500);