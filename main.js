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
   updateImages(staminaldolf);
}

function updateImages(staminaldolf) {
   const imageContainer = document.getElementById("imageContainer");
   imageContainer.innerHTML = ''; // 既存の画像をクリア
   const URL = "https://img.game8.jp/6681396/2318a499ea11250aa17e4bbc9df98e76.png/show"

   if (staminaldolf >= 100) {
       // 数が100以上の場合、メッセージを表示
       imageContainer.innerText = 'これ以上は表示できん！！';
       return; // ここで処理を終了
   }

   // 画像の数に応じてコンテナの幅を設定
   const imageCount = Math.ceil(staminaldolf);
   const imageWidth = imageContainer.offsetWidth / imageCount; // コンテナ幅を画像の数で割る

   // 整数部分の画像を表示
   const fullImagesCount = Math.floor(staminaldolf);
   for (let i = 0; i < fullImagesCount; i++) {
       const imgElement = document.createElement('img');
       imgElement.src = URL; // 完全な画像のURL
       imgElement.alt = 'Full Staminaldolf';
       imgElement.className = 'full-image';
       imageContainer.appendChild(imgElement);
   }

   // 小数部分の画像をクリップして表示
   const decimalPart = staminaldolf % 1;
   if (decimalPart > 0) {
       const imgElement = document.createElement('img');
       imgElement.src = URL; // 完全な画像のURL
       imgElement.alt = 'Partial Staminaldolf';
       imgElement.className = 'clip-image';
       imgElement.style.width = `${imageWidth}px`; // 画像の幅を設定
       imgElement.style.clipPath = `inset(0 ${100 - (decimalPart * 100)}% 0 0)`;
       imageContainer.appendChild(imgElement);
   }
}

