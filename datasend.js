const SendingDataURL = "https://script.google.com/macros/s/AKfycbylTRarra7wDI_MkjclU2-v9_fzuDz8jKiPzUMlAlHvQ1heDO5Yd4_IBU1bE6ssArs6UQ/exec";
function MakeJSON(){
    const nowJST = new Date().toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo"
    });
    if (!document.getElementById("name").value) {
        alert("名前を入力してください。");
        return;
    }
    const data = {
        "name" : document.getElementById("name").value,
        "gamemode" : Clearpoint,
        "time" : PlayTime,
        "avg" : parseFloat(mainbuttonClickCount / PlayTime).toFixed(2),
        "day" : nowJST,
        "version" : GameVersion
    }
    console.log(data);
    sendDataToGoogleSheets(data);
    document.getElementById("senddata").disabled = true;
    document.getElementById("resetbutton").disabled = true;
    document.getElementById("senddata").innerText = "データを送信中...";
}
function sendDataToGoogleSheets(data){
    fetch(SendingDataURL, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type" : "application/x-www-form-urlencoded",
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(response => {
        alert(response.message);
        if (response.compleate === "true"){
            document.getElementById("name").disabled = true;
            document.getElementById("senddata").disabled = true;
            document.getElementById("senddata").innerText = "送信済み";
            document.getElementById("resetbutton").disabled = false;
        }
        else {
            document.getElementById("senddata").innerText = "クリアデータを送信";
            document.getElementById("senddata").disabled = false;
            document.getElementById("name").disabled = false;
            document.getElementById("resetbutton").disabled = false;
        }
    })
    .catch(error => {
        alert("データの送信に失敗しました。");
    });
}