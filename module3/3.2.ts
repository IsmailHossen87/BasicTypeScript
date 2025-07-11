{
    // inheritance 
    // parent class create 
class People {
    name:string;
    age:number;
    mobile:string;
    address:string;

     // parameter Properties
     constructor(name:string,age:number,mobile:string,address:string){
        this.name = name;
        this.age = age;
        this.mobile = mobile;
        this.address = address;
     }
    //  method declare 
    getSleep(numHour:number){
        console.log(`The ${this.name} will sleep for ${numHour}`)
    }
}






    // child class create
    class student extends People{

         // parameter Properties
         constructor(name:string,age:number,mobile:string,address:string){
           super(name,age,mobile,address)
         }
    }
    const student1 = new student("Ismail",34,"01754433707","Mymensing")

    // ------------ for teacher -----------------
    class teacher extends People{
        designation:string

         // perameter declare 
         constructor(name:string,age:number,mobile:string,address:string,   designation:string){ 
            super(name,age,mobile,address)
            this.designation =designation;
         }
          //  method declare 
        getSleep(numHour:number){
            console.log(`The ${this.name} will sleep for ${numHour}`)
        }
         //  method declare 
         takeClass(numClass:number){
            console.log(`The ${this.name} will sleep for ${numClass}`)
        }
    }
    const teacher1 = new teacher("Mr.X",34,"01754433707","Sylhet","good Person")
  



}