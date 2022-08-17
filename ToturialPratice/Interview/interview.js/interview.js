let array = [1, 2, 4, 4, 3, 5, 7]

let newArray = array.filter((value,index)=>{
    if(index === array.indexOf(value))
    return value;
})

console.log(newArray)


