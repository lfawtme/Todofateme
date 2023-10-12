var animal = {
    name: "pet",
    sepices: "dog",
    age: CalculateAge(2012),
    speak: function () {
        console.log('woof!');
    }
};
function CalculateAge(brithYear) {
    return Date.now() - brithYear;
}
function totalLength(x, y) {
    var total = x.length - y.length;
    return total;
}
console.log(animal);
