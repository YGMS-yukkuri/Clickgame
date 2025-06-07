const mainbutton = document.querySelector("#mainbtn");
const ClickUpgrade = document.querySelector("#ClickUpgrade");
const AutoUpgrade1 = document.querySelector('#AutoUpgrade1');
const AutoUpgrade2 = document.querySelector('#AutoUpgrade2');
const AutoUpgrade3 = document.querySelector('#AutoUpgrade3');
const AutoUpgrade4 = document.querySelector('#AutoUpgrade4');
const RandomMath39 = Math.floor(Math.random()) * 3 + 9;//
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
    if (clickUpgCost <= count){
        count = count - clickUpgCost;
        zouka++;
        if (zouka % 5 === 0){
            clickUpgCost = Math.floor(clickUpgCost * (RandomMath39/10));
        }
        else{
            clickUpgCost = Math.floor(clickUpgCost * 1.2);
        }
        document.getElementById("NOW").textContent = `NOW:${count}`;
        document.getElementById("ClickUpgradeCost").textContent = `コスト:${clickUpgCost}`;
        ClickUpgrade.innerHTML = "クリック" + "<br>" + `アップグレード(${zouka})`;
    };
});
AutoUpgrade1.addEventListener('click', function(){
    console.log("UPG1")
    if (auto1Cost <= count){
        count = count - auto1Cost;
        auto1++;
        if (auto1 % 5 === 0){
            auto1Cost = Math.floor(auto1Cost * (RandomMath39/10));
        }
        else{
            auto1Cost = Math.floor(auto1Cost * 1.3);
        }
        document.getElementById("NOW").textContent = `NOW:${count}`;
        document.getElementById("auto1UpgradeCost").textContent = `コスト:${auto1Cost}`;
        AutoUpgrade1.innerHTML = "機械化" + "<br>" + `(${auto1})`;
    };
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
    count = count + zouka + 1;
    document.getElementById("NOW").textContent = `NOW:${count}`;
}







function Automaticloop(){
    let temp = 0; 
    temp = auto1 * 2 + auto2 * 5 + auto3 * 10 + auto4 * 25 + temp;
    count = count + temp;
    document.getElementById("NOW").textContent = `NOW:${count}`;
}
setInterval(Automaticloop, 500);



function debug(a,n){
    switch(a){
        case "now":
            count = n;
            document.getElementById("NOW").textContent = `NOW:${count}`;
            break;
        case "reset":
            count = 0;
            zouka = 0;
            auto1 = 0;
            auto2 = 0;
            auto3 = 0;
            auto4 = 0;
            clickUpgCost = 10;
            auto1Cost = 10;
            auto2Cost = 10;
            auto3Cost = 10;
            auto4Cost = 10;
            document.getElementById("NOW").textContent = `NOW:${count}`;
            document.getElementById("ClickUpgradeCost").textContent = `コスト:${clickUpgCost}`;
            AutoUpgrade1.innerHTML = "機械化" + "<br>" + `(${auto1})`;
            console.log("Game reset");
            break;
        default:
            console.log("Invalid debug command");
            break;
    }
}