var save = document.getElementById('save');
// var text = document.getElementById('text').value;
var txt = document.getElementById('text');
var ele = document.getElementById('file');

//textarea内のテキストを保存
save.addEventListener("click", function(){
    //textareaの中身を格納
    var text = document.getElementById('text').value;
    if (!text) { return; }
      // 文字列をBlob化
      const blob = new Blob([text], { type: 'text/plain' });

      // ダウンロード用のaタグ生成
      const a = document.createElement('a');
      a.href =  URL.createObjectURL(blob);
      a.download = 'sample.txt';
      a.click();
}, false);

/*---------------------------------------------------*/

//ローカルファイルからtextareaに表示
ele.addEventListener('change', function(){
    //FileReaderオブジェクトの生成
    var fr = new FileReader();
    //読み込みが完了したらtextarea
    fr.onload = function(){
        txt.textContent = fr.result;
    }
    fr.readAsText(this.files[0]);
})

/*---------------------------------------------------*/