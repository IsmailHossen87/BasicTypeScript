{

    // polymorphijom
    class Person{
// method
        getSleep(){
            console.log(`i am slepping for 8 hour per day`)
        }
    }

    class Student extends Person {
        getSleep(){
            console.log(`i am slepping for 7 hour per day`)
        }
    }
    class Developer extends Person {
        getSleep(){
            console.log(`i am slepping for 6 hour per day`)
        }
    }
    const getSleepingHours = (params:Person) =>{
        params.getSleep()
    }

    const person1 = new Person()
    const person2 = new Student()
    const person3 = new Developer()

    getSleepingHours(person1)


// Example 2 

    class Shape {
        getArea():number{
            return 0
        }
    }
    class Cricle extends Shape {
        radius:number;
        constructor(radius:number){
            super()
            this.radius = radius
        }
        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }
    }

    class Rectangle extends Shape{
        height:number;
        width:number;
        constructor(height:number,width:number){
            super()
            this.height = height;
            this.width = width
        }
        getArea():number {
            return this.height * this.width 
        }
    }

    const getShapeArea = (param : Shape ) =>{
        console.log(param.getArea())
    }
    // ইনস্টেন্ট বানাচ্ছি
    const shape1 = new Shape()
    const shape = new Cricle(10)
    const shape3 = new Rectangle(23,43)

    getShapeArea(shape1)


}