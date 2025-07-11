{
    // instance or guard
// Parent
    class  Animal {
        name:string;
        species:string;

        constructor(name:string,species:string){
            this.name = name;
            this.species = species
        }

        makeSound(){
            console.log(`I am making sound`)
        }
    }
    // child 
    class Dog extends  Animal {
        constructor (name:string,species:string){
            super(name,species)
        }
        makeBark(){
            console.log(` I am barking`)
        }
    }
    class Cat extends  Animal {
        constructor (name:string,species:string){
            super(name,species)
        }
        makeMew(){
            console.log(` I am mewaw`)
        }
    }
    // notun kore functin define kora lagtaseeeeeeeeeeeeeee

    // const getAnimal = (animal:Animal)=>{
    //     if(animal instanceof Dog){
    //         animal.makeBark()
    //     }else if(animal instanceof Cat){
    //         animal.makeMew()
    //     }else {
    //         animal.makeSound()
    //     }
    // }


    // Professional way start                   error dewar kotha         (animal is Dog)
    const isDog = (animal:Animal) =>{
        return animal instanceof Dog
    }
    const isCat = (animal:Animal)=>{
        return animal instanceof Cat
    }
      // Professional way end



    const getAnimal = (animal:Animal)=>{
        // instanceof করার কারনে Dog classer  makeBar আসছে
        if(isDog(animal)){
            animal.makeBark()
        }else if(isCat(animal)){
            animal.makeMew()
        }else {
            animal.makeSound()
        }
    }


    const dog = new Dog("Deshi Kukur","dog")
    const cat = new Cat("Deshi biral","cat")

















}