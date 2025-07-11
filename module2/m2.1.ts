{
// assertion
let name : any ;
name = "Ismail ";
name = 3232;

(name as string)
// (name as number)
// example 2

const kgtoGram =(value : string | number) :string | number | undefined=>{
    if(typeof value === "string"){
        const convertedValue = parseFloat(value) *1000
        return `The converted value is ${convertedValue}`
    }else if(typeof value === "number"){
          return `The converted value is ${value * 1000}`
    }
}

const result1 = kgtoGram(1000 ) as number
const result2 = kgtoGram("1000" ) as string
// use try catch
type customError ={
    messege:string
}
try{

}catch(error){
    console.log((error as customError).messege)
}

















}