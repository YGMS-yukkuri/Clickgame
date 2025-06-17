const GameVersion = "1.0.1";
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
const progbarText = document.getElementById("progress-message");
const NowDisplay = document.getElementById("NOW");
const ClickUpgCostDisplay = document.getElementById("ClickUpgradeCost");
const MachineUpgCostDisplay = document.getElementById("auto1UpgradeCost");
const FactoryUpgCostDisplay = document.getElementById("auto2UpgradeCost");
const GeneratorUpgCostDisplay = document.getElementById("auto3UpgradeCost");
const GodUpgCostDisplay = document.getElementById("auto4UpgradeCost");
const GameClearDisplay = document.getElementById("game-clear-popup");
const DifficultySelect = document.getElementById("difficulty");
let PlayTime = 0;
let Clearpoint;
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
let isGameActive = false;

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
    NowDisplay.textContent = `資産:${count.toLocaleString()}`;
}

function updateprogress(point) {//プログレスバーの更新
    progbar.style.width = point + "%";
}
function updateUpgradeInfo() {//アップグレード情報の更新
    //クリックアップグレード
    ClickUpgCostDisplay.textContent = `コスト:${clickUpgCost.toLocaleString()}`;
    ClickUpgradeBtn.innerHTML = "クリック" + "<br>" + `アップグレード(${clickUpg.toLocaleString()})`;
    //機械化
    MachineUpgCostDisplay.textContent = `コスト:${MachineUpgradeCost.toLocaleString()}`;
    MachineUpgradeBtn.innerHTML = "機械化" + "<br>" + `(${MachineUpgradeCount.toLocaleString()})`;
    //工業化
    FactoryUpgCostDisplay.textContent = `コスト:${FactoryUpgradeCost.toLocaleString()}`;
    FactoryUpgradeBtn.innerHTML = "工業化" + "<br>" + `(${FactoryUpgradeCount.toLocaleString()})`;
    //ジェネレーター
    GeneratorUpgCostDisplay.textContent = `コスト:${GeneratorUpgradeCost.toLocaleString()}`;
    GeneratorUpgradeBtn.innerHTML = "ジェネレーター" + "<br>" + `(${GeneratorUpgradeCount.toLocaleString()})`;
    //神の祝福
    GodUpgCostDisplay.textContent = `コスト:${GodUpgradeCost.toLocaleString()}`;
    GodUpgradeBtn.innerHTML = "神の祝福" + "<br>" + `(${GodUpgradeCount.toLocaleString()})`;
    //資産の表示
    NowDisplay.textContent = `資産:${count.toLocaleString()}`;
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
    if (!isGameActive) {//アクティブかの判断
        return;
    }
    if (count >= Clearpoint) {//クリア条件を満たしたかの判断
        GameClearDisplay.style.display = "flex";
        document.getElementById("PlayTimetext").textContent = `プレイ時間:${(PlayTime / 2)}秒`
        isGameActive = false;
    }
    if (!isGodDisplay) {//神の祝福が表示されているかどうか
        Activate();
    }
    PlayTime++
    let temp = 0;
    temp = Math.floor((MachineUpgradeCount * 2 + FactoryUpgradeCount * 5 + GeneratorUpgradeCount * 10) * godpower);
    count = count + temp;//自動化によって増えた量を資産に加算
    NowDisplay.textContent = `資産:${count.toLocaleString()}`;
    document.getElementById("AUTO").textContent = `AUTO:${Math.floor(temp * 2).toLocaleString()}/s`;//0.5秒ごとに実行されるので2倍
    document.getElementById("perclick").textContent = `PerClick:${Math.floor(zouka + 1).toLocaleString()}`;
    //プログレスバー用の計算処理
    progtemp = count / Clearpoint;
    progtemp = progtemp * 100;
    updateprogress(progtemp);//バーの更新
}
function setsumei_close() {//説明を閉じる
    let FixedClearpoint;
    Clearpoint = DifficultySelect.value;
    document.getElementById("game-setsumei-popup").style.display = "none";
    isGameActive = true;
    switch (Clearpoint) {
        case "10000":
            FixedClearpoint = "10,000";
            break;
        case "20000":
            FixedClearpoint = "20,000";
            break;
        case "50000":
            FixedClearpoint = "50,000";
            break;
        case "100000":
            FixedClearpoint = "100,000";
            break;
        case "500000":
            FixedClearpoint = "500,000";
            break;
        case "1000000":
            FixedClearpoint = "1,000,000";
            break;
        case "5000000":
            FixedClearpoint = "5,000,000";
            break;
        case "10000000":
            FixedClearpoint = "10,000,000";
            break;
        case "20000000":
            FixedClearpoint = "20,000,000";
        case "50000000":
            FixedClearpoint = "50,000,000";
        case "100000000":
            FixedClearpoint = "100,000,000";
    }
    progbarText.textContent = `ゲージ満タン(資産が${FixedClearpoint})でゲームクリア！！`;
}

document.addEventListener(`contextmenu`, function (e) {
    e.preventDefault();
})

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
    PlayTime = 0;
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
    document.getElementById("game-setsumei-popup").style.display = "flex";
    console.log("Game has been reset.");
}
document.getElementById("versiontext").textContent = `Version:${GameVersion}`;
setInterval(Automaticloop, 500);//毎秒2回処理