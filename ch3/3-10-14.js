/**
 * Created by azu.
 * Date: 12/04/04 10:46
 * License: MIT License
 */

function generateCounter(){
    var i = 0;
    return function(){
        return i++;
    }
}
var countUp = generateCounter();
countUp();
