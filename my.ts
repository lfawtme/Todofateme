interface IPerson {
    name:String,
    family: string,
    age: number,
    email?:string
}
function register(person:IPerson){

 console.log(person.name+" "+person.family)

}
 var iman:IPerson= {
    name : "fateme",
    family: "mavandadi",
    age: 23
 }

 register(iman);
 interface IPersonservice{
    add(person:IPerson):IPerson,
    delete(person:IPerson):void,
    getall():IPerson[],
    getById(personId:number):IPerson,
 }