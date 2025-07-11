{
//  abstraction : 1 Use Interface    2: abstract

// Its a leader interface class
interface Vehicle {
    startEngine ():void;
    stopEngine ():void;
    move ():void;

}
// classe kivabe interface use korte hoi
class Car1 implements Vehicle {
    startEngine(): void {
        console.log(`i AM starting the car engine`)
    }
    stopEngine(): void {
        console.log(`i AM stoping the car engine`)
    }
    move(): void {
        console.log(`I am moving the car`)
    } 
    // চাইলে extra use kora jai
    test(){
        console.log(`I am just testy `)
    }

}
const toyotaCar = new Car1()
toyotaCar.startEngine()



// how to create abstract class  ,Its a leader abstract class

// abstract class give idea
abstract class Car2 {
    // create abstract method 
abstract startEngine(): void;
abstract stopEngine(): void ;
abstract move(): void ;
    test(){
        console.log(`I am just testy `)
    }
}

class ToyotaCar extends Car2 {
    startEngine(): void {
        console.log(`I AM STARTING`)
    }
    stopEngine(): void {
        console.log(`I am stoping`)
    }
    move(): void {
        console.log(`I am moving the car`)
    }
}














}