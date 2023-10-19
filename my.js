var gender;
(function (gender) {
    gender[gender["male"] = 1] = "male";
    gender[gender["female"] = 2] = "female";
})(gender || (gender = {}));
function register(person) {
    console.log(person.name + " " + person.family);
}
var iman = {
    name: "fateme",
    family: "mavandadi",
    age: 23,
    gender: gender.female,
};
register(iman);
var days;
(function (days) {
    days[days["shanbe"] = 0] = "shanbe";
    days[days["yek"] = 1] = "yek";
    days[days["doshanbe"] = 2] = "doshanbe";
    days[days["seshanbe"] = 3] = "seshanbe";
})(days || (days = {}));
var colors;
(function (colors) {
    colors["red"] = "#0cxxff";
    colors["green"] = "#3xfccc";
})(colors || (colors = {}));
console.log(colors.green);
function SayHello(type) {
    if (type == gender.female) {
        console.log("hello female");
    }
    if (type === gender.male) {
        console.log("hello male");
    }
}
console.log(SayHello(gender.female));
