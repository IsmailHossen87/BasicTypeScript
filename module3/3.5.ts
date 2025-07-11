{
  //access modifi
  class BankAccout{
    id:number;
    name:string;
   protected _balance:number;

    constructor(id:number,name:string,balance:number){
        this.id = id;
        this.name = name;
        this._balance = balance
    }
    addDeposit(amount:number){
        this._balance = this._balance + amount
    }

    getBalance (){
        return this._balance;
    }
  } 

//   child
    class    student extends BankAccout {
    test(){
       return this._balance
    }
}

  const goribManusherAccout = new BankAccout(111,"Mr.x",23)
  goribManusherAccout.addDeposit(34)
}