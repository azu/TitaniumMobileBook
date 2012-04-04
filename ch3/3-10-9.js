/**
 * Created by azu.
 * Date: 12/03/28 10:57
 * License: MIT License
 */

var a = "out";
var hoge = function(){
    return "out";
};
(function(){
    var a = "in", b = "in";
    var hoge = function(){
        return "in";
    };
    console.log("IN",
            a,
            hoge());
    hoge();
})();
console.log(
        "OUT",
        a,
        hoge()
);
