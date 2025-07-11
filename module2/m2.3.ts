{
//Generic type declearee
type GenericArray<T> = Array<T>
const rollNumber:GenericArray<number> = [34,3,453,3545]

const nameList :GenericArray<string> = ["Ismail","Hossen"]

const booleanList:GenericArray<boolean> =[true,false,true]

// object declare
const users :GenericArray<{name:string,age:number}>=[
    {
        name:"Ismail",
        age:34
    },
    {
        name:"Ismail",
        age:34
    },
]

type GenericTruple <X,Y> = [X,Y]
const manList :GenericTruple<string,string> = ["Ismail","Yamin"]
const userWithId:GenericTruple<number,{name:string,email:string}> = [34,{name:"Ismail",email:"a@gmail.com"}]









}