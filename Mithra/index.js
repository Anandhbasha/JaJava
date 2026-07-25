// functions
// function functionname(parameter){
// code
// }

// without parameter
// function greet(){
//     console.log("Hello Welcome");    
// }

// greet()
// //with parameter 
// function greet(name){
//    return "Hello Welcome", name;    
// }

// console.log(greet("Alagesh"))
// console.log(greet("Arun"))
// console.log(greet("Bala"))


// function add(a,b){
//     res = a+b;
//     return res
// }

// console.log(add(10,20));
// console.log(add(30,20));


// callback function

// function average(a){
//     let avg = a/3
//     return avg
// }
// function total(a,b,c){
//     let tot = a+b+c
//     return average(tot)

// }

// console.log(total(60,70,88));

// arrow
// let arr= ()=>console.log("Arrow is working")
// arr()

// // ananoums
// let ana = function(a,b){
//     console.log(a+b)
// }
// // IIFI
// let iffis = (function(a,b){
//     console.log(a+b)

// })


// ana(10,20)
// iffis(30,40)


// conditional Statements
// if
// if(condtion){
    // code
// }

// let temp = 42;
// // if(temp>32){
// //     console.log("Swith on the AC");    
// // }
// // if(temp<=32){
// //     console.log("Swith on the Fan");
// // }
// // if else
// if(temp<32){
//     console.log("Swith on the Fan");    
// }
// else{
//     console.log("Swith on the Ac");
// }
// // else if
// if(temp<32){
//     console.log("Swith on the Fan");    
// }
// else if(temp<20){
//     console.log("Switch of The AC and Fan");
    
// }
// else if(temp>40){
//     console.log("Swith on the Ac and Fan");
    
// }
// else{
//     console.log("Swith on the Ac");
// }
// nested 
// let sslc = true
// let hsc = true
// let ug = false

// if(sslc){
//     if(hsc){
//         if(ug){
//             console.log("You are eligible");            
//         }
//     }
// }

// // switch case
// let joiningDay = "Monday"

// // switch(expression){
// // case1 "":
//     // code
// // case2 "":
//     // code
// // }

// switch(joiningDay){
//     case "Monday":
//         console.log("I am goin to Join on Monday");
//         break;
//     case "Tuesday":
//         console.log("I am goin to Join on Tuesday");
//         break
//     case "Wednesday":
//         console.log("I am goin to Join on Wednesday");
//         break
//     case "Thursday":
//         console.log("I am goin to Join on Thursday");
//         break
//     default:
//         console.log("I am goin to Join on Friday");
        
// }


// loops
// while
// while(condtion){
// code
// }
// let a =1
// while(a<11){
//     console.log(a); 
//     a++   //a=3
// }
// // do while
// do{
//     console.log("Hello");
    
// }while(10>15)
// // for
// for(let a =1;a<10;a++){
//     console.log(a);    
// }

let arr = [10,20,30,40,50]
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// for(let a =0;a<arr.length;a++){
//     console.log(arr[a]);    
// }

// for of
// for(let x of arr){
//     console.log(x);
    
// }

// // for in 
// for(let x in arr){
//     console.log(arr[x]);
    
// }
// foreach
// arr.forEach((x)=>console.log(x))