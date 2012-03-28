/**
 * Created by azu.
 * Date: 12/03/28 10:35
 * License: MIT License
 */

var mySpace = {};

// プロパティ
mySpace.intValue = 1;
mySpace.intValue = "sample";

// メソッド
mySpace.foo = function(name){
    return "foo" + name;
};
mySpace.bar = function(value){
    var parsedValue = parseInt(value, 10);
    if (isNaN(parsedValue)){
        throw new TypeError("value is not Number" + value);
    }
    return parsedValue * parsedValue;
};

mySpace.bar(2);// 4
mySpace.bar("str");// TypeError

mySpace.subSpace1 = {};
mySpace.subSpace1.foo = function(){
}; // noop
mySpace.subSpace2 = {};
mySpace.subSpace2.bar = function(){
};
