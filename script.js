const mainbutton = document.querySelector("#mainbtn");
const ClickUpgradeBtn = document.querySelector("#ClickUpgrade");
const MachineUpgradeBtn = document.querySelector('#AutoUpgrade1');
const FactoryUpgradeBtn = document.querySelector('#AutoUpgrade2');
const GeneratorUpgradeBtn = document.querySelector('#AutoUpgrade3');
const GodUpgradeBtn = document.querySelector('#AutoUpgrade4');
const MachineUpgMenu = document.getElementById("MachineUpgMenu");
const FactoryUpgMenu = document.getElementById("FactoryUpgMenu");
const GeneratorUpgMenu = document.getElementById("GeneratorUpgMenu");
const GodUpgMenu = document.getElementById("GodUpgMenu");
const progbar = document.getElementById("progress-bar");
const NowDisplay = document.getElementById("NOW");
const ClickUpgCostDisplay = document.getElementById("ClickUpgradeCost");
const MachineUpgCostDisplay = document.getElementById("auto1UpgradeCost");
const FactoryUpgCostDisplay = document.getElementById("auto2UpgradeCost");
const GeneratorUpgCostDisplay = document.getElementById("auto3UpgradeCost");
const GodUpgCostDisplay = document.getElementById("auto4UpgradeCost");
const GameClearDisplay = document.getElementById("game-clear-popup");
const Clearpoint = 100000;
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
let godpower = 1;
let isGodDisplay = false;
let isGameActive = true;

function randommath() {
    return Math.floor(Math.random() * 3) + 8; // 8, 9, 10のいずれかをランダムに返す
}
mainbutton.addEventListener('click', function () {//メインボタンのクリックイベント
    mainClick();
});
ClickUpgradeBtn.addEventListener('click', function () {//クリックアップグレード
    if (clickUpgCost > count) {
        return;
    }
    count = count - clickUpgCost;
    clickUpg++;
    zouka++;
    if (zouka % 5 === 0) {//5の倍数かを判別
        clickUpgCost = Math.floor(clickUpgCost * (randommath() / 10));
    }
    else {
        clickUpgCost = Math.floor(clickUpgCost * 1.1);
    }
    updateUpgradeInfo()
});
MachineUpgradeBtn.addEventListener('click', function () {//機械化
    if (MachineUpgradeCost > count) {
        return;
    }
    count = count - MachineUpgradeCost;
    MachineUpgradeCount++;
    if (MachineUpgradeCount % 5 === 0) {//5の倍数かを判別
        MachineUpgradeCost = Math.floor(MachineUpgradeCost * (randommath() / 10));
    }
    else {
        MachineUpgradeCost = Math.floor(MachineUpgradeCost * 1.2);
    }
    updateUpgradeInfo()
});
FactoryUpgradeBtn.addEventListener('click', function () {//工業化
    if (FactoryUpgradeCost > count) {
        return;
    }
    count = count - FactoryUpgradeCost;
    FactoryUpgradeCount++;
    if (FactoryUpgradeCount % 5 === 0) {//5の倍数かを判別
        FactoryUpgradeCost = Math.floor(FactoryUpgradeCost * (randommath() / 10));
    }
    else {
        FactoryUpgradeCost = Math.floor(FactoryUpgradeCost * 1.25);
    }
    updateUpgradeInfo()
});
GeneratorUpgradeBtn.addEventListener('click', function () {//ジェネレーター
    if (GeneratorUpgradeCost > count) {
        return;
    }
    count = count - GeneratorUpgradeCost;
    GeneratorUpgradeCount++;
    if (GeneratorUpgradeCount % 5 === 0) {//5の倍数かを判別
        GeneratorUpgradeCost = Math.floor(GeneratorUpgradeCost * (randommath() / 10));
    }
    else {
        GeneratorUpgradeCost = Math.floor(GeneratorUpgradeCost * 1.3);
    }
    updateUpgradeInfo()
});
GodUpgradeBtn.addEventListener('click', function () {//神の祝福
    if (GodUpgradeCost > count) {
        return;
    }
    count = count - GodUpgradeCost;
    GodUpgradeCount++;
    godpower = godpower * 2;
    if (godpower > 4) { //神の力が4を超えた場合
        //神の力が4を超えた場合、資産の増加量を調整
        let temp = zouka * godpower * 3 / 2;
        if (temp > 100000) {
            zouka = zouka + 10000;
        }
        else if (temp > 50000) {
            zouka = Math.floor(zouka * godpower * 0.2);
        }
        else if (temp > 20000) {
            zouka = Math.floor(zouka * godpower * 0.3);
        }
        else if (temp > 10000) {
            zouka = Math.floor(zouka * godpower * 0.4);
        }
        else if (temp > 5000) {
            zouka = Math.floor(zouka * godpower * 0.6);
        }
        else {
            zouka = Math.floor(zouka * godpower * 0.8);
        }
    }
    else {
        zouka = zouka * godpower * 3 / 2;
    }
    if (GodUpgradeCount % 5 === 0) {//5の倍数かを判別
        //コストがランダムで減少する
        GodUpgradeCost = Math.floor(GodUpgradeCost * (randommath() / 10));
    }
    else {
        GodUpgradeCost = Math.floor(GodUpgradeCost * 1.7);
    }
    updateUpgradeInfo();
})

function mainClick() {//クリックボタンの処理
    count = Math.floor(count + zouka + 1);
    NowDisplay.textContent = `資産:${count}`;
}

function updateprogress(point) {//プログレスバーの更新
    progbar.style.width = point + "%";
}
function updateUpgradeInfo() {//アップグレード情報の更新
    //クリックアップグレード
    NowDisplay.textContent = `資産:${count}`;
    ClickUpgCostDisplay.textContent = `コスト:${clickUpgCost}`;
    ClickUpgradeBtn.innerHTML = "クリック" + "<br>" + `アップグレード(${clickUpg})`;
    //機械化
    NowDisplay.textContent = `資産:${count}`;
    MachineUpgCostDisplay.textContent = `コスト:${MachineUpgradeCost}`;
    MachineUpgradeBtn.innerHTML = "機械化" + "<br>" + `(${MachineUpgradeCount})`;
    //工業化
    NowDisplay.textContent = `資産:${count}`;
    FactoryUpgCostDisplay.textContent = `コスト:${FactoryUpgradeCost}`;
    FactoryUpgradeBtn.innerHTML = "工業化" + "<br>" + `(${FactoryUpgradeCount})`;
    //ジェネレーター
    NowDisplay.textContent = `資産:${count}`;
    GeneratorUpgCostDisplay.textContent = `コスト:${GeneratorUpgradeCost}`;
    GeneratorUpgradeBtn.innerHTML = "ジェネレーター" + "<br>" + `(${GeneratorUpgradeCount})`;
    //神の祝福
    NowDisplay.textContent = `資産:${count}`;
    GodUpgCostDisplay.textContent = `コスト:${GodUpgradeCost}`;
    GodUpgradeBtn.innerHTML = "神の祝福" + "<br>" + `(${GodUpgradeCount})`;
}
function Activate() {//アップグレードを表示させる関数
    if (count > 35) {
        MachineUpgMenu.style.display = "flex";
    }
    if (count > 70) {
        FactoryUpgMenu.style.display = "flex";
    }
    if (count > 350) {
        GeneratorUpgMenu.style.display = "flex";
    }
    if (count > 2000) {
        GodUpgMenu.style.display = "flex";
        isGodDisplay = true;
    }
}
function Automaticloop() {//自動処理
    if (!isGameActive) {//クリア表示を行っているかの判断
        return;
    }
    if (count >= Clearpoint) {//クリア条件を満たしたかの判断
        GameClearDisplay.style.display = "flex";
        isGameActive = false;
    }
    if (!isGodDisplay) {//神の祝福が表示されているかどうか
        Activate();
    }
    let temp = 0;
    temp = Math.floor(MachineUpgradeCount * 2 + FactoryUpgradeCount * 5 + GeneratorUpgradeCount * 10 * godpower);
    count = count + temp;//自動化によって増えた量を資産に加算
    NowDisplay.textContent = `資産:${count}`;
    document.getElementById("AUTO").textContent = `AUTO:${Math.floor(temp * 2)}/s`;//0.5秒ごとに実行されるので2倍
    document.getElementById("perclick").textContent = `PerClick:${Math.floor(zouka + 1)}`;
    //プログレスバー用の計算処理
    progtemp = count / Clearpoint;
    progtemp = progtemp * 100;
    updateprogress(progtemp);//バーの更新
}
function setsumei_close() {//説明を閉じる
    document.getElementById("game-setsumei-popup").style.display = "none";
}

function debug(a, n) {//コンソールで叩けるやつ
    switch (a) {
        case "now":
            count = n;
            NowDisplay.textContent = `資産:${count}`;
            break;
        case "reset":
            reset();
            break;
        default:
            console.log("Invalid debug command");
            break;
    }
}
function reset() {//ゲームのリセットを行うやつ
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
    godpower = 1;
    isGodDisplay = false;
    isGameActive = true;
    MachineUpgMenu.style.display = "none";
    FactoryUpgMenu.style.display = "none";
    GeneratorUpgMenu.style.display = "none";
    GodUpgMenu.style.display = "none";
    NowDisplay.textContent = `資産:${count}`;
    ClickUpgCostDisplay.textContent = `コスト:${clickUpgCost}`;
    MachineUpgCostDisplay.textContent = `コスト:${MachineUpgradeCost}`;
    FactoryUpgCostDisplay.textContent = `コスト:${FactoryUpgradeCost}`;
    GeneratorUpgCostDisplay.textContent = `コスト:${GeneratorUpgradeCost}`;
    GodUpgCostDisplay.textContent = `コスト:${GodUpgradeCost}`;
    ClickUpgradeBtn.innerHTML = "クリック" + "<br>" + `アップグレード(${clickUpg})`;
    MachineUpgradeBtn.innerHTML = "機械化" + "<br>" + `(${MachineUpgradeCount})`;
    FactoryUpgradeBtn.innerHTML = "工業化" + "<br>" + `(${FactoryUpgradeCount})`;
    GeneratorUpgradeBtn.innerHTML = "ジェネレーター" + "<br>" + `(${GeneratorUpgradeCount})`;
    GodUpgradeBtn.innerHTML = "神の手" + "<br>" + `(${GodUpgradeCount})`;
    GameClearDisplay.style.display = "none"
    updateprogress(0);
    console.log("Game has been reset.");
}
setInterval(Automaticloop, 500);//毎秒2回処理