interface IPerson {
    name:String,
    family: string,
    age: number,
    gender: gender,
    email?:string
}
enum gender{
   male=1,
   female=2,
}

function register(person:IPerson){
 console.log(person.name+" "+person.family)

}
 var iman:IPerson= {
    name : "fateme",
    family: "mavandadi",
    age: 23,
    gender:gender.female,
 }

 register(iman);
 interface IPersonservice{
    add(person:IPerson):IPerson,
    delete(person:IPerson):void,
    getall():IPerson[],
    getById(personId:number):IPerson,
 }
 enum days{
   shanbe,
   yek ,
   doshanbe,
   seshanbe,
 }
 enum colors {
   red= "#0cxxff",
   green="#3xfccc"
 }
 console.log(colors.green)

 function SayHello (type: gender){
 if (type==gender.female){
   console.log("hello female")
 }
if (type===gender.male){
   console.log("hello male")
}
 }
 console.log(SayHello(gender.female))