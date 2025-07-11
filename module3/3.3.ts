{
    // type guard 


    // type of --- type guard
    type Alphanumeric = string | number
    const addGuard = (params1:Alphanumeric ,params2:Alphanumeric): Alphanumeric=>{
        if(typeof params1 === "number" && typeof params2 === "number"){
            return params1 + params2
        }else{
            return params1.toString() + params2.toString()
        }
    }

    const result1 = addGuard(2,4)


    
    // in guard 
    type NormalUser ={
        name:string
    }
    type AdminUser = {
        name:string;
        role:"admin"
    }
    const getUser = (user:NormalUser | AdminUser)=>{
        if("role" in user ){
            console.log(`My name is ${user.name} and my role is ${user.role}`)
        }else{
            console.log(`My name is ${user.name}`)
        }
    }
    const normalUser : NormalUser ={
        name:"Mr.X"
    }
    const adminUser :AdminUser ={
        name:"Mr.X",
        role:"admin"
    }
    
}