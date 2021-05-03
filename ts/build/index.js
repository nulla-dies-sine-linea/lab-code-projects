"use strict";
var var1 = "hey mama";
console.log(var1);
var var2 = 6;
console.log(var2);
var var3 = true;
console.log(var3);
var var4 = [1, 8];
console.log(var4);
var var5 = [3, "3", true];
// const var6: any = 9;
console.log(var5);
var Color;
(function (Color) {
    Color[Color["Back"] = 0] = "Back";
    Color[Color["White"] = 1] = "White";
    Color[Color["Grey"] = 2] = "Grey";
})(Color || (Color = {}));
console.log(Color.Back);
// const errorFunction = (): never => {
//     throw new Error("Oops!...I did it again");
// }
// errorFunction();
var concat = function (a, b) {
    return a + b;
};
console.log(concat("we ", "are"));
console.log(concat("1", "1"));
var concatLog = function (a, b) {
    console.log(a + b);
};
concatLog("counting ", "stars");
var readyPlayerOne = {
    id: "dfghfgh",
    hp: 78,
    weapon: null
};
var readyPlayerTwo = {
    id: "dfghfgh",
    hp: 78,
    weapon: null
};
