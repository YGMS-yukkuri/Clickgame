const GameVersion = "1.3.0"; //ゲームのバージョン
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
let mainbuttonClickCount = 0;
let LuckeyEventCount = 0;

function randommath() {
    return Math.floor(Math.random() * 3) + 8; // 8, 9, 10のいずれかをランダムに返す
}
mainbutton.addEventListener('click', function () {//メインボタンのクリックイベント
    mainClick();
    mainbuttonClickCount++;
    if (mainbuttonClickCount % 2 == 0){
        getLuckyDiscount(); // 2のクリックでラッキー割引を適用
    }
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
    getLuckyDiscount(); // ラッキー割引の適用
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
        MachineUpgradeCost = Math.floor(MachineUpgradeCost * 1.15);
    }
    updateUpgradeInfo()
    getLuckyDiscount();// ラッキー割引の適用
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
        FactoryUpgradeCost = Math.floor(FactoryUpgradeCost * 1.2);
    }
    updateUpgradeInfo()
    getLuckyDiscount();// ラッキー割引の適用
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
    getLuckyDiscount();// ラッキー割引の適用
});
GodUpgradeBtn.addEventListener('click', function () {//神の祝福
    if (GodUpgradeCost > count) {
        return;
    }
    mainbutton.style.backgroundColor = "#ffe863"; //クリックボタンの色を変更
    count = count - GodUpgradeCost;
    GodUpgradeCount++;
    godpower = godpower * 2;
    if (godpower >= 4) { //神の力が4を超えた場合
        //神の力が4を超えた場合、資産の増加量を調整
        let temp = zouka * godpower * 0.5;
        if (temp > 1000000) {
            zouka = zouka + godpower * 1000;
        }
        else if (temp > 500000) {
            zouka = Math.floor(temp * godpower * 0.0005);
        }
        else if (temp > 100000) {
            zouka = Math.floor(temp * godpower * 0.001);
        }
        else if (temp > 50000) {
            zouka = Math.floor(temp * godpower * 0.01);
        }
        else if (temp > 20000) {
            zouka = Math.floor(temp * godpower * 0.05);
        }
        else if (temp > 10000) {
            zouka = Math.floor(temp * godpower * 0.1);
        }
        else if (temp > 5000) {
            zouka = Math.floor(temp * godpower * 0.2);
        }
        else {
            zouka = Math.floor(temp * godpower * 0.3);
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
        GodUpgradeCost = Math.floor(GodUpgradeCost * (godpower));
    }
    updateUpgradeInfo();
    getLuckyDiscount();// ラッキー割引の適用
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
        document.getElementById("PlayTimetext").textContent = `プレイ時間:${PlayTime}秒`;
        document.getElementById("AvgClick").textContent = `平均クリック数:${parseFloat(mainbuttonClickCount / PlayTime).toFixed(2)}回/s`;
        isGameActive = false;
    }
    if (!isGodDisplay) {//神の祝福が表示されているかどうか
        Activate();
    }
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
function button_activate() {//ボタンのグレーアウト処理
    const upgrades = [
        { cost: clickUpgCost, btn: ClickUpgradeBtn },
        { cost: MachineUpgradeCost, btn: MachineUpgradeBtn },
        { cost: FactoryUpgradeCost, btn: FactoryUpgradeBtn },
        { cost: GeneratorUpgradeCost, btn: GeneratorUpgradeBtn },
        { cost: GodUpgradeCost, btn: GodUpgradeBtn },
    ];
    upgrades.forEach(upg => {
        upg.btn.disabled = count < upg.cost;
    });
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
            break;
        case "50000000":
            FixedClearpoint = "50,000,000";
            break;
        case "100000000":
            FixedClearpoint = "100,000,000";
            break;
    }
    progbarText.textContent = `ゲージ満タン(資産が${FixedClearpoint})でゲームクリア！！`;
}

document.addEventListener(`contextmenu`, function (e) {
    e.preventDefault();
})

function getLuckyDiscount(){
    const discountRate = Math.random() * 1000; // 0から1000の間のランダムな値を生成
    if (discountRate <= 10){ // 1%の確率で割引イベントを発生させる
        let discountAmount = Math.floor(Math.random() * 30) + 1; // 1から30の間のランダムな値を生成
        showLuckyBanner(discountAmount); // バナーを表示
        discountAmount = discountAmount / 100; // 割引率を小数に変換
        clickUpgCost = Math.floor(clickUpgCost - (clickUpgCost * discountAmount));
        MachineUpgradeCost = Math.floor(MachineUpgradeCost - (MachineUpgradeCost * discountAmount));
        FactoryUpgradeCost = Math.floor(FactoryUpgradeCost - (FactoryUpgradeCost * discountAmount));
        GeneratorUpgradeCost = Math.floor(GeneratorUpgradeCost - (GeneratorUpgradeCost * discountAmount));
        GodUpgradeCost = Math.floor(GodUpgradeCost - (GodUpgradeCost * discountAmount));
        LuckeyEventCount++; // ラッキーイベントのカウントを増やす
        if (clickUpgCost < 10){
            clickUpgCost = 10; // 最低コストを10に設定
        }
        if (MachineUpgradeCost < 10){
            MachineUpgradeCost = 10; // 最低コストを10に設定
        }
        if (FactoryUpgradeCost < 10){
            FactoryUpgradeCost = 10; // 最低コストを10に設定
        }
        if (GeneratorUpgradeCost < 10){
            GeneratorUpgradeCost = 10; // 最低コストを10に設定
        }
        if (GodUpgradeCost < 10){
            GodUpgradeCost = 10; // 最低コストを10に設定
        }
        document.getElementById("LUCKEY").textContent = `Luckey:${LuckeyEventCount}`; // ラッキーイベントの回数を表示
        // アップグレード情報を更新
        updateUpgradeInfo();
    }
}
function showLuckyBanner(discountAmount) {
    // 既存のバナーを削除
    const existingBanner = document.querySelector('.lucky-banner');
    if (existingBanner) {
        existingBanner.remove();
    }
    
    // バナーを作成
    const banner = document.createElement('div');
    banner.className = 'lucky-banner';
    banner.innerHTML = `
        <div class="banner-content">
            <span class="banner-icon">🎉</span>
            <span class="banner-text">LUCKY! アップグレードコストが${discountAmount}%減少しました！</span>
            <button class="banner-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // bodyの最上部に追加
    document.body.insertBefore(banner, document.body.firstChild);
    
    // アニメーション開始
    setTimeout(() => banner.classList.add('show'), 10);
    
    // 5秒後に自動で削除
    setTimeout(() => {
        if (banner.parentNode) {
            banner.classList.add('hide');
            setTimeout(() => banner.remove(), 300);
        }
    }, 5000);
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
    isGameActive = false;
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
    mainbuttonClickCount = 0;
    updateprogress(0);
    document.getElementById("game-setsumei-popup").style.display = "flex";
    document.getElementById("name").disabled = false;
    document.getElementById("senddata").disabled = false;
    document.getElementById("senddata").innerText = "クリアデータを送信";
    mainbutton.style.backgroundColor = "#64e8e8f3"; //クリックボタンの色を元に戻す
    console.log("Game has been reset.");
}
function timecount() {
    if (!isGameActive) {//アクティブかの判断
        return;
    }
    PlayTime++
}
document.getElementById("versiontext").textContent = `Version:${GameVersion}`;
setInterval(Automaticloop, 500);//毎秒2回処理
setInterval(button_activate, 100);//毎秒10回
setInterval(timecount, 1000);//毎秒1回