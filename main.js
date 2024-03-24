function appendNumber(number) {
   const inputField = document.getElementById("inputAmount");
   inputField.value += number; // 数字を追加
   convertToStaminaldolf(); // 結果を更新
}

function clearInput() {
   const inputField = document.getElementById("inputAmount");
   inputField.value = ''; // 入力値をクリア
   convertToStaminaldolf(); // 結果を更新
}

function convertToStaminaldolf() {
   const amount = parseFloat(document.getElementById("inputAmount").value);
   const staminaldolf = (amount / 60000).toFixed(2);
   document.getElementById("output").innerText = `スタミナルドルフ: ${staminaldolf}`;
}
