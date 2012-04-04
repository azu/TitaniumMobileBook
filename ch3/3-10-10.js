/**
 * Created by azu.
 * Date: 12/04/04 10:30
 * License: MIT License
 */

var a = "global";
(function(){
    var b = "local";
    var hoge = function(){
        return a + "-" + b;
    }
    alert(hoge());// global-local
})();