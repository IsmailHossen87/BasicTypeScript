{
// function with generic
const addCourseToStudent = <T>(student:T) =>{
    const course ="Next Level web Development"
    return {
        ...student,
        course
    }
}
const student1 = addCourseToStudent({name:"Mr.X",email:"x@gmail.com",id:23})
const student2 = addCourseToStudent({name:"Mr.Y",email:"y@gmail.com",id:43})

// example2
const createArray = (param:string) :string[] =>{
    return [param]
}
const res1 = createArray("Bangladesh")
// example3
const createArrayWithGeneric = <T>(param:T) :T[] =>{
    return [param]
}
const resGeneric = createArrayWithGeneric<string>("Country")
const resGenericObj1 = createArrayWithGeneric<object>({id:234,name:"Ismail"})
const resGenericObj2 = createArrayWithGeneric<{id:number;name:string}>({id:234,name:"Ismail"})
// example4
const createArrayWithGenericTuple = <X,Y>(param1:X,param2:Y) :[X,Y] =>{
    return [param1,param2]
}
const resGeneric1 = createArrayWithGenericTuple<string,number>("Country",344)
// ✅ Corrected: Object and String
const resGenericObj3 = createArrayWithGenericTuple<object,string>({id:234,name:"Ismail"},"Super")
// Custom Object Types
const resGenericObj4 = createArrayWithGenericTuple<
{id:number;name:string},{roll:number;name:string}
>
 ({id:234,name:"Ismail"},{roll:234,name:"Ismail"})




    // 
}