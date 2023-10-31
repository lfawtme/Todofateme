class Person{
   static lastId=0;
   constructor(name:string,family:string){
 this.name=name;
 this.family=family;
   }
  name: string;
  family: string;
  Fullname=function():string{
   return this.name+' '+this.family;
   
  };
  static getNextId(){
   this.lastId+=1;
}
}

function Register(Person: Person){
   console.log(Person.name + ' '+Person.family)
}

var person1 = new Person("fateme","mavandadi");
console.log(person1.Fullname());
console.log(Person.lastId);
Person.getNextId();

var person2 = new Person("abass","rezaei");
console.log(person2.Fullname());
console.log(Person.lastId);
Person.getNextId();

