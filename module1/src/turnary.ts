{


// Ternary oparetor
const age = 25
if(age > 18){
    console.log("adult")
}else{
    console.log("Not Adult")
}

const isAdult = age >18 ? "Adult" : "Not Adult"

// Nullishing
const isAuthentication = null

const result = isAuthentication ??  "Guest"


type UType ={
    name:string,
    address:{
        city:string,
        presentAddress:string,
        parmanentAddress?:string
    }
}

const user :UType ={
    name:"Ismail",
    address:{
        city:"sylhet",
        presentAddress:"Boroikandi",
        // parmanentAddress:null
    }
}

const parmanentAddress = user?.address?.parmanentAddress ?? "Parmanet address is not define"
console.log(parmanentAddress)

// Nullable Type
const searchName =(value:string | null )=>{
    if(value){
        console.log(value)
    }else{
        console.log("The search is not find")
    }
}
searchName(null)


// Unknown
const getSpeedInMetterPerSecond = (value:unknown)=>{
    if(typeof value == "number"){
        const parse = (value *1000)/3600
        console.log(`The speed is ${parse}`)
    }else if(typeof value == "string"){
        const [result,unit] = value.split(' ')
        const convertSpeed = (parseFloat(result)*1000)/3600
        console.log(convertSpeed)
    }
}

getSpeedInMetterPerSecond(`20 kmh1`)


}