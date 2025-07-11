{
// interface
type User1 ={
    name:string;
    age:number
} 

interface user2{
    name:string;
    age:number
}
// type used
type UserWithRoll1 = User1 & {role :string}
// intercace used
interface UserWithRoll2 extends user2 {role:number}

const user1:UserWithRoll1={
    name: "Ismail",
    age:34,
    role:"34"
}
const user2:UserWithRoll2={
    name: "Ismail",
    age:34,
    role:32
}

// use Array
type Roll1 = number[]
interface Roll2 {[index:number] : number}

// use function 
type Add1 =(num1:number,num2:number)=> number
// Or
interface Add2 {
    (num1:number ,num2:number) :number
}

const add:Add1= (num1,num2) => num1 + num2
const rollNumber :Roll1 =[1,2,3]















}