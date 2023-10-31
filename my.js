var Person = /** @class */ (function () {
    function Person(name, family) {
        this.Fullname = function () {
            return this.name + ' ' + this.family;
        };
        this.name = name;
        this.family = family;
    }
    Person.getNextId = function () {
        this.lastId += 1;
    };
    Person.lastId = 0;
    return Person;
}());
function Register(Person) {
    console.log(Person.name + ' ' + Person.family);
}
var person1 = new Person("fateme", "mavandadi");
console.log(person1.Fullname());
console.log(Person.lastId);
Person.getNextId();
var person2 = new Person("abass", "rezaei");
console.log(person2.Fullname());
console.log(Person.lastId);
Person.getNextId();
