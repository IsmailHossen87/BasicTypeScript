{

    class Animal {
        // Property declare and type declage

    //    public name:string;
    //    public species:string;
    //    public sound:string;

        // parameter Properties
        constructor(public name:string,public species:string,public sound:string ){

            // initialize er kaj eta

            // this.name = name;
            // this.species = species;
            // this.sound = sound
        }
        // anonumus function
        // ক্লাসের মধ্যে মেথড তৈরি করা হল 
        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`)
        }
    }
    const dog= new Animal("Garram Shepard","dog","ghew ghew")

    dog.makeSound()








}