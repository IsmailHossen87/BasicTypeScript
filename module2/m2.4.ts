{
 // intercae - generic
type Developer <T,X=null> ={
    name:string;
    computer:{
        brand:string;
        model:string;
        releaseYear:number
    };
    smartWatch: T;
    bike?:X
}
type ForPoor ={
    brand:string,model:string,display:string
}

const poorDeveloper :Developer<ForPoor>= {
    name:"Persian",
    computer:{
        brand:"ASUS",
        model:"X-255UR",
        releaseYear:2013
    },
    smartWatch:{
        brand:"Emilab",
        model:"kw66",
        display:"OLED"
    }
}
interface AppleWatch {
    brand:string,
    model:string,
    heartTrack:boolean,
    sleepTrack:true
}
const richDeveloper :Developer<AppleWatch>= {
    name:"Persian",
    computer:{
        brand:"ASUS",
        model:"X-255UR",
        releaseYear:2013
    },
    smartWatch:{
        brand:"AppleWatch",
        model:"kw66",
        heartTrack:true,
        sleepTrack:true,
    }
}
















}