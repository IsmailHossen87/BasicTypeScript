{
    // instant তৈরি না করে কুন একটা class কে directly বেবহার করার মাদ্ধমে  static property use korte pari 
// static 
// class Counter {
//    static count:number = 0;
//     increment(){
//        return Counter.count = Counter.count + 1
//     }
//     decrement(){
//         return Counter.count = Counter.count - 1
//     }
// }
//     const instance1 = new Counter()
//     console.log(instance1.increment) 
//     const instance2 = new Counter()
//     console.log(instance1.increment()) 
class Counter {
   static count:number = 0;
   static increment(){
       return Counter.count = Counter.count + 1
    }
   static decrement(){
        return Counter.count = Counter.count - 1
    }
}
// ইনস্টেন্ট বানাচ্ছি
    const instance1 = new Counter()
    console.log(Counter.increment) 
    const instance2 = new Counter()
    console.log(Counter.increment()) 















    
}