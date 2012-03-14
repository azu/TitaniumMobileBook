/**
 * Created by azu.
 * Date: 12/03/07 10:39
 * License: MIT License
 */
function total(num){
    if(num < 1 || num > 100){
        alert("1以上100以下の値を指定下さい");
        return;
    }
    var result = 0;
    for (var i = 0; i < num; i++){
        result += i;
    }
    alert('0から ' + num + 'までの合計は' + result);
}
total(200);
total(50);