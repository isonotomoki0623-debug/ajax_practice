// 投稿データを取得する関数
function loadPosts() {

  // APIへリクエスト送信
  fetch("https://jsonplaceholder.typicode.com/posts")

    // レスポンスをJSON形式に変換
    .then(response => response.json())

    // JSONデータを受け取る
    .then(data => {

      // ul要素を取得
      const postList = document.getElementById("postList");

      // 最初に中身を空にする
      postList.innerHTML = "";

      // dataを1件ずつ取り出す
      data.forEach(post => {

        // liタグを作成
        const li = document.createElement("li");

        // 投稿タイトルを設定
        li.innerText = post.title;

        // ulに追加
        postList.appendChild(li);

      });

    })

    // エラー処理
    .catch(error => {

      console.log(error);

      alert("データ取得失敗");

    });

}