var canvas = document.getElementById('cv');
var context = canvas.getContext('2d');
var btn = document.getElementById('clear');
var color2 = document.getElementById('c2');
var color3 = document.getElementById('c3');
var color4 = document.getElementById('c4');
var color5 = document.getElementById('c5');
var color6 = document.getElementById('c6');
var color7 = document.getElementById('c7');
var color8 = document.getElementById('c8');
var color9 = document.getElementById('c9');
var color10 = document.getElementById('c10');
var color1 = document.getElementById('c1');
var save = document.getElementById('save');
var rect = document.getElementById('rect');
var stop_rect = document.getElementById('stop');
var circle = document.getElementById('circle');

/* -------------------------------------------- */

context.lineWidth = 5;
context.strokeStyle = '#000';
context.lineCap = 'round';
textarea = null;

/* -------------------------------------------- */

let mouse = {x: 0, y: 0};
let color = document.getElementById('color');
let width = document.getElementById('width');

/* -------------------------------------------- */


//mouse座標取得
canvas.addEventListener("mousemove", function(e){
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
     // console.log(mouse);
}, false);

/* -------------------------------------------- */

//描画処理
canvas.addEventListener("mousedown", function(e){
    context.beginPath();
    context.moveTo(mouse.x, mouse.y);

    canvas.addEventListener("mousemove", onPaint, false);
}, false);

canvas.addEventListener("mouseup", function(){
    canvas.removeEventListener("mousemove", onPaint, false);
})

canvas.addEventListener("mouseout", function(){
    canvas.removeEventListener("mousemove", onPaint, false);
})

var onPaint = function(){
    context.lineTo(mouse.x, mouse.y);
    context.stroke();
    // console.log(mouse);
}

/* -------------------------------------------- */

//ボタンによる色変換

color2.addEventListener("click", function(){
    // var clr = '#999';
    context.strokeStyle = '#fff';
}, false);

color3.addEventListener("click", function(){
    // var clr = '#999';
    context.strokeStyle = '#f00';
}, false);

color4.addEventListener("click", function(){
    // var clr = '#999';
    context.strokeStyle = '#080';
}, false);

color5.addEventListener("click", function(){
    // var clr = '#999';
    context.strokeStyle = '#00f';
}, false);

color6.addEventListener("click", function(){
    // var clr = '#999';
    context.strokeStyle = '#800';
}, false);

color7.addEventListener("click", function(){
    // var clr = '#999';
    context.strokeStyle = '#fd0';
}, false);

color8.addEventListener("click", function(){
    // var clr = '#999';
    context.strokeStyle = '#fcc';
}, false);

color9.addEventListener("click", function(){
    // var clr = '#999';
    context.strokeStyle = '#888';
}, false);

color10.addEventListener("click", function(){
    // var clr = '#999';
    context.strokeStyle = '#000';
}, false);

color1.addEventListener("click", function(){
    // var clr = '#999';
    context.strokeStyle = '#000';
}, false);

/* -------------------------------------------- */

//クリア機能
btn.addEventListener("click", function(){
    context.clearRect(0, 0, canvas.width, canvas.height);
}, false);

/* -------------------------------------------- */

//カラーピックによる色変更
color.addEventListener("change", function(){
    context.strokeStyle = this.value;
}, false);

/* -------------------------------------------- */

//任意の太さに変更
width.addEventListener("change", function(){
    // console.log(this.value);
    context.lineWidth = this.value;
},false);

/* -------------------------------------------- */

//canvasの保存
save.addEventListener("click", function(){
    var a = document.createElement('a');
    a.href = canvas.toDataURL('image/png', 0.85);
    a.download = 'download.png';
    a.click();
}, false);

/* -------------------------------------------- */

rect.addEventListener("click", function(){
    canvas.addEventListener("click", onRect, false);
}, false);

stop_rect.addEventListener("click", function(){
    canvas.removeEventListener("click", onRect, false);
    canvas.removeEventListener("click", onCircle, false);
}, false);

circle.addEventListener("click", function(){
    canvas.addEventListener("click", onCircle, false);
})

var onRect = function(e){
    var W = prompt("幅を設定してください");
    var H = prompt("高さを設定してください");

    context.fillRect(e.clientX, e.clientY, W, H);
    color.addEventListener("change", function(){
        context.fillStyle = this.value;
    }, false);
    context.fill();
}

var onCircle = function(e){
    var R = prompt("半径を設定してください");

    context.arc(e.clientX, e.clientY, R, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
    color.addEventListener("change", function(){
        context.fillStyle = this.value;
    }, false);
    context.fill();
    // context.fillStyle = 'yellow';
}
canvas.addEventListener("click", function(e){
    var x = context.isPointInPath(e.clientX, e.clientY);
    console.log(x);
}, false);

/*
描画を始める … beginPath()
移動する … moveTo(x,y) : 座標(x,y)にペンを移動する。
線を引く … lineTo(x,y) : 現在位置から(x,y)まで線を引く。
二次曲線を引く … quadraticCurveTo(xm,ym,x,y) : 現在位置から(xm,ym)が頂点に向くような二次曲線を(x,y)まで引く
三次曲線を引く … bezierCurveTo(x1,y1, x2,y2, x,y);
… 現在位置から２つのコントロール座標に向かって曲線を構成し、(x,y)に至る三次曲線を引く
描画する … stroke() : beginPath以後、記述された線を引く。
 */