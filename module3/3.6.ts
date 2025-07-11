{
    //getter and Setter
    // function er মত কাজ করার জন্য              function কে Property এর মত পাব
    class BankAccout{
      id:number;
      name:string;
     protected _balance:number;
  
      constructor(id:number,name:string,balance:number){
          this.id = id;
          this.name = name;
          this._balance = balance
      }
    //   addDeposit(amount:number){
    //       this._balance = this._balance + amount
    //   }
  
    //   getBalance (){
    //       return this._balance;
    //   }

    // use Getter
    get Balance(){
        return this._balance
    }
    set addBalance (amout:number){
          this.Balance + amout
    }
    } 
  
  //   child
      class    student extends BankAccout {
      test(){
         return this._balance
      }
  }
  
    const goribManusherAccout = new BankAccout(111,"Mr.x",23)
    // goribManusherAccout.addDeposit(34)

    // Property use kore
    const myBalance = goribManusherAccout.Balance 
  }