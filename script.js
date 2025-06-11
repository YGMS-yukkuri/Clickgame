const mainbutton = document.querySelector("#mainbtn");
const ClickUpgrade = document.querySelector("#ClickUpgrade");
const AutoUpgrade1 = document.querySelector('#AutoUpgrade1');
const AutoUpgrade2 = document.querySelector('#AutoUpgrade2');
const AutoUpgrade3 = document.querySelector('#AutoUpgrade3');
const AutoUpgrade4 = document.querySelector('#AutoUpgrade4');
const RandomMath39 = Math.floor(Math.random()) * 3 + 9;//
const Clearpoint = 100000;
let zouka = 0;
let count = 0;
let clickUpg = 0;
let auto1 = 0;
let auto2 = 0;
let auto3 = 0;
let auto4 = 0;
let clickUpgCost = 10;
let auto1Cost = 50;
let auto2Cost = 100;
let auto3Cost = 500;
let auto4Cost = 2500;
let godpower = 1;
mainbutton.addEventListener('click', function(){
    mainClick();
});
ClickUpgrade.addEventListener('click', function(){
    if (clickUpgCost <= count){
        count = count - clickUpgCost;
        clickUpg++;
        zouka++;
        if (zouka % 5 === 0){
            clickUpgCost = Math.floor(clickUpgCost * (RandomMath39/10));
        }
        else{
            clickUpgCost = Math.floor(clickUpgCost * 1.1);
        }
        document.getElementById("NOW").textContent = `NOW:${count}`;
        document.getElementById("ClickUpgradeCost").textContent = `コスト:${clickUpgCost}`;
        ClickUpgrade.innerHTML = "クリック" + "<br>" + `アップグレード(${clickUpg})`;
    };
});
AutoUpgrade1.addEventListener('click', function(){
    if (auto1Cost <= count){
        count = count - auto1Cost;
        auto1++;
        if (auto1 % 5 === 0){
            auto1Cost = Math.floor(auto1Cost * (RandomMath39/10));
        }
        else{
            auto1Cost = Math.floor(auto1Cost * 1.2);
        }
        document.getElementById("NOW").textContent = `NOW:${count}`;
        document.getElementById("auto1UpgradeCost").textContent = `コスト:${auto1Cost}`;
        AutoUpgrade1.innerHTML = "機械化" + "<br>" + `(${auto1})`;
    };
});
AutoUpgrade2.addEventListener('click', function(){
    if (auto2Cost <= count){
        count = count - auto2Cost;
        auto2++;
        if (auto2 % 5 === 0){
            auto2Cost = Math.floor(auto2Cost * (RandomMath39/10));
        }
        else{
            auto2Cost = Math.floor(auto2Cost * 1.25);
        }
        document.getElementById("NOW").textContent = `NOW:${count}`;
        document.getElementById("auto2UpgradeCost").textContent = `コスト:${auto2Cost}`;
        AutoUpgrade2.innerHTML = "工業化" + "<br>" + `(${auto2})`;
    };
});
AutoUpgrade3.addEventListener('click', function(){
    if (auto3Cost <= count){
        count = count - auto3Cost;
        auto3++;
        if (auto3 % 5 === 0){
            auto3Cost = Math.floor(auto3Cost * (RandomMath39/10));
        }
        else{
            auto3Cost = Math.floor(auto3Cost * 1.3);
        }
        document.getElementById("NOW").textContent = `NOW:${count}`;
        document.getElementById("auto3UpgradeCost").textContent = `コスト:${auto3Cost}`;
        AutoUpgrade3.innerHTML = "ジェネレーター" + "<br>" + `(${auto3})`;
    };
});
AutoUpgrade4.addEventListener('click', function(){
    if (auto4Cost <= count){
        count = count - auto4Cost;
        auto4++;
        godpower = godpower * 1.5;
        zouka = zouka * godpower;
        if (auto4 % 5 === 0){
            auto4Cost = Math.floor(auto4Cost * (RandomMath39/10));
        }
        else{
            auto4Cost = Math.floor(auto4Cost * 1.7);
        }
        document.getElementById("NOW").textContent = `NOW:${count}`;
        document.getElementById("auto4UpgradeCost").textContent = `コスト:${auto4Cost}`;
        AutoUpgrade4.innerHTML = "神の手" + "<br>" + `(${auto4})`;
    };
})

function mainClick(){
    count = Math.floor(count + zouka + 1);
    document.getElementById("NOW").textContent = `NOW:${count}`;
}

function updateprogress(point){
    const progbar = document.getElementById("progress-bar");
    progbar.style.width = point + "%";
}

function Automaticloop(){
    if (count >= 100000){
        document.getElementById("game-clear-popup").style.display = "flex";
    }
    let temp = 0; 
    temp = Math.floor(auto1 * 2 + auto2 * 5 + auto3 * 10 * godpower);
    count = count + temp;
    document.getElementById("NOW").textContent = `NOW:${count}`;
    document.getElementById("AUTO").textContent = `AUTO:${Math.floor(temp * 2)}/s`;
    document.getElementById("perclick").textContent = `PerClick:${Math.floor(zouka + 1)}`;
    progtemp = count / Clearpoint;
    progtemp = progtemp * 100;
    updateprogress(progtemp);
}
setInterval(Automaticloop, 500);

function debug(a,n){
    switch(a){
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
function reset(){
    zouka = 0;
    count = 0;
    clickUpg = 0;
    auto1 = 0;
    auto2 = 0;
    auto3 = 0;
    auto4 = 0;
    clickUpgCost = 10;
    auto1Cost = 50;
    auto2Cost = 100;
    auto3Cost = 500;
    auto4Cost = 2500;
    document.getElementById("NOW").textContent = `NOW:${count}`;
    document.getElementById("ClickUpgradeCost").textContent = `コスト:${clickUpgCost}`;
    document.getElementById("auto1UpgradeCost").textContent = `コスト:${auto1Cost}`;
    document.getElementById("auto2UpgradeCost").textContent = `コスト:${auto2Cost}`;
    document.getElementById("auto3UpgradeCost").textContent = `コスト:${auto3Cost}`;
    document.getElementById("auto4UpgradeCost").textContent = `コスト:${auto4Cost}`;
    ClickUpgrade.innerHTML = "クリック" + "<br>" + `アップグレード(${clickUpg})`;
    AutoUpgrade1.innerHTML = "機械化" + "<br>" + `(${auto1})`;
    AutoUpgrade2.innerHTML = "工業化" + "<br>" + `(${auto2})`;
    AutoUpgrade3.innerHTML = "ジェネレーター" + "<br>" + `(${auto3})`;
    AutoUpgrade4.innerHTML = "神の手" + "<br>" + `(${auto4})`;
    console.log("Game reset");
    document.getElementById("game-clear-popup").style.display = "none"
}