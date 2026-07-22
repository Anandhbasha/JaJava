// // // datatypes
// // // Number
// // let x=10
// // console.log(typeof(x));

// // // String
// // let names = "Arun"
// // console.log(typeof(names));

// // // boolean
// // let todayClass = true
// // // undefined
// // let num = undefined
// // console.log(typeof(num));

// // // Null
// // let newValue = null
// // console.log(typeof(newValue));

// // // Nan
// // // not an number
// // console.log("Hello"*x);


// // // complex data types or non premitive
// // //array
// // let arr = [20,30,30,40,true,undefined,"userName",null]
// // // length - >8
// // // 0 index ->20
// // // 1 index ->30
// // // 2 index ->30
// // // 3 index ->40
// // // 4 index ->true
// // // 5 index ->undefined
// // // 6 index ->userName
// // // 7 index ->null
// // console.log(arr[0]);
// // console.log(arr[1]);
// // console.log(arr[2]);
// // console.log(arr[3]);
// // console.log(arr[4]);
// // console.log(arr[5]);
// // console.log(arr[8]);

// // console.log(arr.length);

// // //object
// // // key value pair
// // const person = {
// //     userName:"Bala",
// //     age:30,
// //     address:"CBE",
// //     family:{
// //         dad:"muthu",
// //         mom:"mani",
// //         siblings:{
// //             brothers:["raja","ravi"],
// //             Sisters:["divya","deepa"]
// //         }
// //     }
// // }

// // // console.log("The userName is:",person.userName+"The user Age is:"+person.age);
// // // end->\n
// // // sep->,

// // console.log(person.family.siblings.Sisters);
// // console.log(person["family"]["siblings"]);



// // // array
// // let c =[10,20,30,40]


// // Arithmetic
// // // +,-,*,/,%,++,--
// // console.log(10+5);
// // console.log(10-5);
// // console.log(10*5);
// // console.log(10/5);
// // console.log(10%5);
// // var a =10
// // // a++
// // // console.log(a);
// // // a--
// // // console.log(a);
// // // // 10
// // // post increment
// // console.log(a++);//10 a=11
// // // pre increment
// // console.log(++a);//12
// // // pre decrement
// // console.log(--a);//11
// // // post decrement
// // console.log(a--);//11 a=10
// // console.log(a);//10



// BODMAS
// bracket o ->of D-div m-multiplication A-addition s- subs
// console.log((10+2)/2*3+5+(6+20));
// 12/2*3+5+26
// 6*3+5+26
// 18+5+26
// 49


// // comparison operator
// // >,<.<=,>=,!=,==,===
// console.log(10<15);
// console.log(10>15);
// console.log(10!=15);
// console.log(10>=10);
// console.log(10<=15);
// console.log(10=="10");  // True
// console.log(10==="10"); //false 


// logical 
// && and 
// || or
// // !
// let age = 18
// let state = "TN"
// console.log(age>=18 && state=="KL" && age==18);

// // login
// let username = "Anandh"
// let pass = "Pass"
// // js -> variable and value both are case sensitive

// // console.log(username=="Anandh" && pass=="pass");

// // console.log(username=="Anand" || pass=="pass");

// console.log(!(pass=="pass"));


// assignmnet operator
// =,+=,-=,*=,/=.%=
// right side value going to assign left side variable

// let x =20
// console.log(x);
// x+=5
// // x=x+5
// console.log(x);
// x-=2
// console.log(x);
// x*=2;
// console.log(x);
// x/=2
// console.log(x);
// x%=3
// console.log(x);

// ternary 
// let temp = 31

// syntax of ternary
// condition ? "true" : "false"
// console.log(temp>32 ? "Swith on the Ac" : "Swith on the Fan");


// function
// function functionName(parameter){

// }

// without parameter
// function greet(){
//     console.log("Welcome to Functions");
    
// }
// greet()
// greet()
// greet()
// greet()
// greet()
// greet()
// // arrow
// const arrow = ()=>console.log("Arrow is working")
// arrow()
// // IIFI(Immeditate involked function expression)
// const all = (function(){
//     console.log("Welcome to IIFI");
    
// });

// all();
// // Ananoums
// let great = function(){
//     console.log("Welcome to Ananoums");
    
// }

// // great()
// const add = (a,b)=>console.log(a+b)


// add(90,60)
// add(80,60)


// const multi = (a,b)=>console.log(a*b);

// multi(10,7)


// const divs = (a,b)=>console.log(a/b);

// divs(4,2)

// const sub = (a,b)=>console.log(a-b);
// sub(15,10)


// const great = (a,b)=>console.log(a>b);

// great(10,5)



// return
// const add = (x,y)=>{return x+y}


// // let total = add(10,5)
// console.log(add(10,5));

// // callback function
// const avg =(tot)=>{
//     let average = tot/3
//     return average
// }
// const total = (s1,s2,s3)=>{
//     const res = s1+s2+s3
//     const stuAvg = avg(res)
//     return stuAvg
// }

// console.log(total(63,71,89));

//conditonal statements
// if
// let pass = 123
// // if(pass==1234){
// //     console.log("Mobile unlocked");    
// // }
// // if else
// //     if(pass==1234){
// //     console.log("Mobile unlocked");    
// // }else{
// //     console.log("Password invalid");
    
// // }
// // age<13 -> child age>13 age<19-> teenager age>19-> adult
// else if
// let age = 63
// if(age<13){
//     console.log("Child");    
// }
// else if(age>19 && age<60){
//     console.log("Adult");
    
// }
// else if(age>60){
//     console.log("Senior Citizens");
    
// }
// else{
//     console.log("Teenager");
    
// }

// nested if
// let player = "completed"

// if(player=="completed"){
//     if(player=="completed"){
//         if(player=="completed"){
//             console.log("Players is on Level 3");            
//         }
//     }
// }

// let sslc = "Fail"
// let hsc = "pass"

// if(sslc=="Pass"){
//     console.log("SSLC Cleared");
//     if(hsc=="pass"){
//         console.log("He is moving to Colledge");        
//     }    
// }

// switch
// >,<,=,>=,
// switch(condition){
//     case 1:
//         // code
//     case 2:
//         // code
//     case 3:
//         //code
//     default:
//         //code
// }


let today = "Wednesday"

switch(today){
    case "Monday":
        console.log("Today is Monday");
        break
    case "Tuesday":
        console.log("Today is Tuesday");
        break
    case "Wednesday":
        console.log("Today is Wednesday");
        break
    case "Thursday":
        console.log("Today is Thursday");
        break
    case "Friday":
        console.log("Today is Friday");
        break
    case "Saturday":
        console.log("Today is Saturday");
        break
    default:
        console.log("Today is Sunday");        
}
