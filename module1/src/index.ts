const course :string = "Ismail" ;
console.log(course)

const firstName :string = "Ismail"
const age :boolean = true

// array
const friend :string[] = ["d","dd","df"]
const friend1 :number[] = [34,3]

const user:{
    firstName:string,
    lastName:string,
    age?:number
}={
    firstName:"ismail",
    lastName:"Hossen",
    age:23
}

// function
function add (num1:number,num2:number):number{
    return num1 + num2
}
add(3,6)

const addArrow = (num1:number,num2:number) :number=>num1 + num2 


// object 
const PoorUser ={
    name:"Ismail",
    balance:0,
    addBalance(balance:number):string{
      return  `My new Balance is ${this.balance + balance}`
    }
}

const arr:number[] =[3,2467,8,64,]

const newArray:number[] = arr.map((element:number):number=>element*element)


// spreed
const arr1:number[] = [3,2467,8,64,]
const arr2:number[] = [3,2467,8,64,]

arr1.push(...arr2) 

// Rest
const greetFriend =(...frnd:string[])=>{
    // console.log(`Hi ${frnd1} ,${frnd2}`)
    frnd.forEach((data:string)=>console.log(`Hi ${data}`))
}

greetFriend("d","c","w","r","d")

// Distructuring
const user1={
    id:233,
    name:{
        firstName:"iSMAIL",
        lastName:"Hossen"
    },
    contractNo:343
}

const {contractNo,name:{firstName:Middlename}} = user1

const arr5 = [2,23,5,67,3,2,74,3]
const [,,...rest] = arr5 

// type alias
type Ismail = {
    firstName:string,
    lastName:string,
    age:number
}

const data :Ismail={
    firstName:"ismail",
    lastName:"Hossen",
    age:34  
}
// function use TypeAlias
// function

type Add =(n:number,m:number) =>number

const addArrow1:Add = (num5,num6)=>num5 + num6



// Type definition
type Frontend = {
  skill: string[];
  designation1: "FrontendDeveloper" 
};

type Backend = {
  skill: string[];
  designation2: "BackendDeveloper";
};

type FullStack = Frontend & Backend;

const fullStackDeveloper: FullStack = {
  skill: ["CSS", "HTML", "Node.js", "MongoDB"], 
  designation1: "FrontendDeveloper", 
  designation2:"BackendDeveloper"
};
 

