/**
 * Created by azu.
 * Date: 12/03/21 10:29
 * License: MIT License
 */

var car = {};
car.color = "color";
car["range"] = 230; // == car.range = 230

var hoge = "key";
car[hoge] // == car["key"]

// modelプロパティが存在してない
car.model.birth = "12/1/31";// error
