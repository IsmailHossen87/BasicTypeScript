{
// map type
type AreaNumber ={
    height:number;
    width:number;
}

type AreaString ={
    [key in keyof AreaNumber ] :string
}

type Height = AreaNumber ["height"] //lookup type



type AreaString1<T> ={
    [key in keyof T ] :T[key]
}
const area1:AreaString1<{height:string;width:number}> ={
    height:"300",
    width:34
}


}