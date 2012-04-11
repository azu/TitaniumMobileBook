/**
 * Created by azu.
 * Date: 12/04/11 10:35
 * License: MIT License
 */

var ary = ["yamada", "suzuki", "sato"];
for (var i = 0, len = ary.length; i < len; i++){
    console.log(ary[i]);
}

ary.forEach(function(name){
    console.log(name);
})
