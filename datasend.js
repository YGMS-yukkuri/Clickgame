const SendingDataURL = "https://script.google.com/macros/s/AKfycbw8QoBUsymWX7e4oLU3MV3rCfgK720yk4Ps7Dx4XhEgAn67dyLG9TJvOqQT0EmM8mjQgA/exec";
function MakeJSON(){
    const nowJST = new Date().toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo"
    });
    const data = {
        "name" : document.getElementById("name").value,
        "gamemode" : Clearpoint,
        "time" : PlayTime,
        "day" : nowJST
    }
    sendDataToGoogleSheets(data);
}
function sendDataToGoogleSheets(data){
    fetch(SendingDataURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        alert(result.message);
    })
    .catch(error => {
        alert("データの送信に失敗しました。");
    });
}