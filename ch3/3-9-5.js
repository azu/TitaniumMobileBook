/**
 * Created by azu.
 * Date: 12/03/21 10:57
 * License: MIT License
 */

function foo(params){
    console.log(params.firstName);// Taro
    console.log(params.lastName);// Yamada
}

foo({
    "firstName" : "Taro",
    "lastName" : "Yamada"
});