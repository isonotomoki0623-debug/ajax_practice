// 投稿データを取得する関数
function loadPosts() {

    const btn = document.getElementById("loadButton");

    // リクエスト前に読み込み中を表示
    // document.getElementById("loading").innerText = "読み込み中...";

    btn.disabled = true;
    btn.innerText = "読み込み中...";

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


            // 最初の5件だけ表示する
            data.slice(0, 5).forEach(post => {

                // dataを1件ずつ取り出す
                //data.forEach(post => {

                // liタグを作成
                const li = document.createElement("li");

                li.innerText = `${post.id} : ${post.title} \n ${post.body}`;

                // // 投稿タイトルを設定
                // li.innerText = post.title;

                // // 投稿本文を設定
                // li.innerText = post.body;

                // ulに追加
                postList.appendChild(li);

            });

        })

        // エラー処理
        .catch(error => {

            console.log(error);

            alert("データ取得失敗");

        })

        .finally(() => {
            // リクエスト終了後の処理
            // document.getElementById("loading").innerText = "";
            btn.disabled = false;
            btn.innerText = "データ取得";
        });
}

// function loading(message) {

//     // リクエスト前に読み込み中を表示
//     document.getElementById("loading").innerText = message;

//         .then(() => {

//         })

//         .catch(error => {

//             console.log(error);

//             alert("データ取得失敗");
//         })

//         .finally(() => {
//             // リクエスト終了後の処理
//             document.getElementById("loading").innerText = "";
//         });
// }