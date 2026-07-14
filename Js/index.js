// datatypes
// Number
let x=10
console.log(typeof(x));

// String
let names = "Arun"
console.log(typeof(names));

// boolean
let todayClass = true
// undefined
let num = undefined
console.log(typeof(num));

// Null
let newValue = null
console.log(typeof(newValue));

// Nan
// not an number
console.log("Hello"*x);


// complex data types or non premitive
//array
let arr = [20,30,30,40,true,undefined,"userName",null]
// length - >8
// 0 index ->20
// 1 index ->30
// 2 index ->30
// 3 index ->40
// 4 index ->true
// 5 index ->undefined
// 6 index ->userName
// 7 index ->null
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[8]);

console.log(arr.length);

//object
// key value pair
const person = {
    userName:"Bala",
    age:30,
    address:"CBE",
    family:{
        dad:"muthu",
        mom:"mani",
        siblings:{
            brothers:["raja","ravi"],
            Sisters:["divya","deepa"]
        }
    }
}

// console.log("The userName is:",person.userName+"The user Age is:"+person.age);
// end->\n
// sep->,

console.log(person.family.siblings.Sisters);
console.log(person["family"]["siblings"]);



// array
let c =[10,20,30,40]