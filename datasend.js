const SendingDataURL = "https://script.google.com/macros/s/AKfycbylTRarra7wDI_MkjclU2-v9_fzuDz8jKiPzUMlAlHvQ1heDO5Yd4_IBU1bE6ssArs6UQ/exec";
function MakeJSON(){
    const nowJST = new Date().toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo"
    });
    const data = {
        "name" : document.getElementById("name").value,
        "gamemode" : Clearpoint,
        "time" : PlayTime,
        "avg" : parseFloat(mainbuttonClickCount / PlayTime).toFixed(2),
        "day" : nowJST
    }
    console.log(data);
    sendDataToGoogleSheets(data);
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
    })
    .catch(error => {
        alert("データの送信に失敗しました。");
    });
}