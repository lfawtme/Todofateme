
function fullname(x:String, y:string, c:string):string
function fullname(x:string , y:string):string
{
    return x+" "+y;
}

function totallength(x:string,y:string):number
function totallength(x:any[],y:any[]):number
function totallength(x: string | any[],y:string | any[])
{
    var total :number =x.length+y.length;
    x.slice(0)
    if (x instanceof Array){

    }
   if (x instanceof String){

   }


    return total;
}
totallength("fateme","mavandadi")
totallength(["ali","hossein","reza"],["alizade","dehqan","mavandadi"])