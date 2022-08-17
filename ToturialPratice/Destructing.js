
// <!-- -----------Destructing----------------- -->
//1. To destructor object {},and array[] required same key


let vaishnavi ={
    name:'Vaishnavi',
    batch:10,
    techStack:'MERN',
    address:{
        city:'Mirzapur',
        state:'UP',
        country:'India'
    }
}

console.log(Object.entries(vaishnavi));


// let {name,batch,address}=vaishnavi
// let {city,state}=address


// let {city,state}=vaishnavi.address

// let{name,batch,address:{city,state}}=vaishnavi
// console.log(city,state)


let arr=[1,2,['x','y'],3]
let [a,b,[g,h]]=arr
// let[g,h]=c
console.log(a,b,g,h);
// var a=1
// var b=2
// let temp=a
// a=b
// b=temp
// console.log(a,b);

//  var [b,a] = [a,b]
//   console.log(a,b);


