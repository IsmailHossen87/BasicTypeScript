{

// constrain in typescript 

const addCourseToSuudent = <T extends {name:string;id:number;email:string}>(student:T) =>{
    const course = "Next level Wev Developer"
    return {
        ...student,
        course
    }
} 

const student1 = addCourseToSuudent({
    id:34,
    name:"Mx.x",
    email:"x@gmail.com",
    devType:"NLWD"
})
const student2 = addCourseToSuudent({
    name:"Mx.y",
    id:34,
    email:"y@gmail.com",
    handWatch:"Apple"
})








    // 
}