// // // // datatypes
// // // // Number
// // // let x=10
// // // console.log(typeof(x));

// // // // String
// // // let names = "Arun"
// // // console.log(typeof(names));

// // // // boolean
// // // let todayClass = true
// // // // undefined
// // // let num = undefined
// // // console.log(typeof(num));

// // // // Null
// // // let newValue = null
// // // console.log(typeof(newValue));

// // // // Nan
// // // // not an number
// // // console.log("Hello"*x);


// // // // complex data types or non premitive
// // // //array
// // // let arr = [20,30,30,40,true,undefined,"userName",null]
// // // // length - >8
// // // // 0 index ->20
// // // // 1 index ->30
// // // // 2 index ->30
// // // // 3 index ->40
// // // // 4 index ->true
// // // // 5 index ->undefined
// // // // 6 index ->userName
// // // // 7 index ->null
// // // console.log(arr[0]);
// // // console.log(arr[1]);
// // // console.log(arr[2]);
// // // console.log(arr[3]);
// // // console.log(arr[4]);
// // // console.log(arr[5]);
// // // console.log(arr[8]);

// // // console.log(arr.length);

// // // //object
// // // // key value pair
// // // const person = {
// // //     userName:"Bala",
// // //     age:30,
// // //     address:"CBE",
// // //     family:{
// // //         dad:"muthu",
// // //         mom:"mani",
// // //         siblings:{
// // //             brothers:["raja","ravi"],
// // //             Sisters:["divya","deepa"]
// // //         }
// // //     }
// // // }

// // // // console.log("The userName is:",person.userName+"The user Age is:"+person.age);
// // // // end->\n
// // // // sep->,

// // // console.log(person.family.siblings.Sisters);
// // // console.log(person["family"]["siblings"]);



// // // // array
// // // let c =[10,20,30,40]


// // // Arithmetic
// // // // +,-,*,/,%,++,--
// // // console.log(10+5);
// // // console.log(10-5);
// // // console.log(10*5);
// // // console.log(10/5);
// // // console.log(10%5);
// // // var a =10
// // // // a++
// // // // console.log(a);
// // // // a--
// // // // console.log(a);
// // // // // 10
// // // // post increment
// // // console.log(a++);//10 a=11
// // // // pre increment
// // // console.log(++a);//12
// // // // pre decrement
// // // console.log(--a);//11
// // // // post decrement
// // // console.log(a--);//11 a=10
// // // console.log(a);//10



// // BODMAS
// // bracket o ->of D-div m-multiplication A-addition s- subs
// // console.log((10+2)/2*3+5+(6+20));
// // 12/2*3+5+26
// // 6*3+5+26
// // 18+5+26
// // 49


// // // comparison operator
// // // >,<.<=,>=,!=,==,===
// // console.log(10<15);
// // console.log(10>15);
// // console.log(10!=15);
// // console.log(10>=10);
// // console.log(10<=15);
// // console.log(10=="10");  // True
// // console.log(10==="10"); //false 


// // logical 
// // && and 
// // || or
// // // !
// // let age = 18
// // let state = "TN"
// // console.log(age>=18 && state=="KL" && age==18);

// // // login
// // let username = "Anandh"
// // let pass = "Pass"
// // // js -> variable and value both are case sensitive

// // // console.log(username=="Anandh" && pass=="pass");

// // // console.log(username=="Anand" || pass=="pass");

// // console.log(!(pass=="pass"));


// // assignmnet operator
// // =,+=,-=,*=,/=.%=
// // right side value going to assign left side variable

// // let x =20
// // console.log(x);
// // x+=5
// // // x=x+5
// // console.log(x);
// // x-=2
// // console.log(x);
// // x*=2;
// // console.log(x);
// // x/=2
// // console.log(x);
// // x%=3
// // console.log(x);

// // ternary 
// // let temp = 31

// // syntax of ternary
// // condition ? "true" : "false"
// // console.log(temp>32 ? "Swith on the Ac" : "Swith on the Fan");


// // function
// // function functionName(parameter){

// // }

// // without parameter
// // function greet(){
// //     console.log("Welcome to Functions");
    
// // }
// // greet()
// // greet()
// // greet()
// // greet()
// // greet()
// // greet()
// // // arrow
// // const arrow = ()=>console.log("Arrow is working")
// // arrow()
// // // IIFI(Immeditate involked function expression)
// // const all = (function(){
// //     console.log("Welcome to IIFI");
    
// // });

// // all();
// // // Ananoums
// // let great = function(){
// //     console.log("Welcome to Ananoums");
    
// // }

// // // great()
// // const add = (a,b)=>console.log(a+b)


// // add(90,60)
// // add(80,60)


// // const multi = (a,b)=>console.log(a*b);

// // multi(10,7)


// // const divs = (a,b)=>console.log(a/b);

// // divs(4,2)

// // const sub = (a,b)=>console.log(a-b);
// // sub(15,10)


// // const great = (a,b)=>console.log(a>b);

// // great(10,5)



// // return
// // const add = (x,y)=>{return x+y}


// // // let total = add(10,5)
// // console.log(add(10,5));

// // // callback function
// // const avg =(tot)=>{
// //     let average = tot/3
// //     return average
// // }
// // const total = (s1,s2,s3)=>{
// //     const res = s1+s2+s3
// //     const stuAvg = avg(res)
// //     return stuAvg
// // }

// // console.log(total(63,71,89));

// //conditonal statements
// // if
// // let pass = 123
// // // if(pass==1234){
// // //     console.log("Mobile unlocked");    
// // // }
// // // if else
// // //     if(pass==1234){
// // //     console.log("Mobile unlocked");    
// // // }else{
// // //     console.log("Password invalid");
    
// // // }
// // // age<13 -> child age>13 age<19-> teenager age>19-> adult
// // else if
// // let age = 63
// // if(age<13){
// //     console.log("Child");    
// // }
// // else if(age>19 && age<60){
// //     console.log("Adult");
    
// // }
// // else if(age>60){
// //     console.log("Senior Citizens");
    
// // }
// // else{
// //     console.log("Teenager");
    
// // }

// // nested if
// // let player = "completed"

// // if(player=="completed"){
// //     if(player=="completed"){
// //         if(player=="completed"){
// //             console.log("Players is on Level 3");            
// //         }
// //     }
// // }

// // let sslc = "Fail"
// // let hsc = "pass"

// // if(sslc=="Pass"){
// //     console.log("SSLC Cleared");
// //     if(hsc=="pass"){
// //         console.log("He is moving to Colledge");        
// //     }    
// // }

// // switch
// // >,<,=,>=,
// // switch(condition){
// //     case 1:
// //         // code
// //     case 2:
// //         // code
// //     case 3:
// //         //code
// //     default:
// // //         //code
// // // }



// // we cannot use any operator in switch cases
// // let today = "Wednesday"

// // switch(today){
// //     case "Monday":
// //         console.log("Today is Monday");
// //         break
// //     case "Tuesday":
// //         console.log("Today is Tuesday");
// //         break
// //     case "Wednesday":
// //         console.log("Today is Wednesday");
// //         break
// //     case "Thursday":
// //         console.log("Today is Thursday");
// //         break
// //     case "Friday":
// //         console.log("Today is Friday");
// //         break
// //     case "Saturday":
// //         console.log("Today is Saturday");
// //         break
// //     default:
// //         console.log("Today is Sunday");        
// // }


// // loops
// // while
// // condition must be failure to stop loop

// // while(condition){
// // code
// // // }

// // let a =1
// // while(a<6){ //6<6
// //     console.log("Hello Welcome"); 
// //     a++  //6
// // }

// // string iteration
// let name = "Suriya"
// // name[0] = S
// // name[1] = u
// // name[2] = r
// // name[3] = i
// // // name[4] = y
// // // name[5] = a
// // console.log(name[0]);
// // console.log(name[1]);
// // console.log(name[2]);
// // console.log(name[3]);
// // console.log(name[4]);
// // console.log(name[5]);

// // // array iteration
// let arr = [10,20,30,40,50]
// // console.log(arr[0]);
// // console.log(arr[1]);
// // console.log(arr[2]);
// // console.log(arr[3]);
// // console.log(arr[4]);

// // let x=0
// // while(x<6){ //1<6
// //     console.log(name[x]); //name[x]
// //     x++    //x=1
// // }
// // let x=0
// // while(x<6){ //1<6
// //     console.log(arr[x]); //name[x]
// //     x++    //x=1
// // }

// // console.log("Anandh");
// // console.log("Anandh");
// // console.log("Anandh");
// // // console.log("Anandh");
// // // console.log("Anandh");
// // let a =1
// // while(a<=5){ //6<=5
// //     console.log("Anandh"); //5
// //     a++ //a=6
// // }
// // do while
// // exist condition
// // do{
// //     console.log("Do while");
    
// // }while(10>15)
// // let chance = 3
// // let pass = "@nand#akumar123"
// // let enterPassword ="@nand#akumar121"
// // do{
// //     if(pass==enterPassword){
// //         console.log("Mobile is unlocked");
        
// //     }
// //     else{
// //         console.log("Attempt" + chance + "is Failed");
        
// //     }
// //     chance++
// // }while(chance<=3)
// // for
// // for(let x =0;x<5;x++){
// //     console.log(x);    
// // }


// // let arr1 = [10,20,30,40,50]

// // for(let x =4;x>=0;x--){ //4-1 =3
// //     console.log(x);    
// // }
// // 50
// // 40
// // 30
// // 20
// // 10

// // length of the array-> no of elements in array
// // 5

// let arr1 = [10,20,30,40,50]
// let len = arr1.length
// console.log(len);

// for(let i=0;i<arr1.length;i++){ //5-> 1<5
//     console.log(arr1[i]);  //arr[0]->10    arr[1]->20 
// }


// // name reverse
// let names = "Pranesh"

// let a =names.length-1
// while(a>=0){
//     console.log(names[a]);
//     a--
    
// }

// //find the total of array
// // let array = [55,77,88,99,66]
// // let sum;

// // for(let i=0;i<array.length;i++){
// //     sum=0
// //     sum+=array[i]  //0+88
// // }
// // // console.log(sum);
// // let largest = array[0]
// // for(let x=1;x<array.length;x++){
// //     if(array[x]>largest){ //array[1] = 99 >>66
// //         largest = array[x]
// //     }
// // }

// // console.log(largest);


// // // types of for
// // // for of
// // for(let x of array){ //x-array[0]
// //     console.log(x);    
// // }
// // // for in
// // for(let x in array){ //x-array[0]
// //     console.log(array[x]);    
// // }
// // // forEach
// // array.forEach((x)=>console.log(x))

// // array methods
// // map
// let array = [55,77,88,99,66]
// array.map((x)=>console.log(x))
// // 55
// // 77
// // 88
// // 99
// // 66
// // reduce
// let total = array.reduce((x,y)=>x+y)
// // x=0,y=55->55
// // x=55 y=77->132
// // x=132 y = 88 ->220
// // x=220 y =99->319
// // x=319 y =66 ->385
// // total = 385
// console.log(total);

// // filter
// let even = array.filter((x)=>x%2==0)
// let odd = array.filter((x)=>x%2!=0)
// console.log("Even Numbers are:",even);
// console.log("Odd Numbers are:",odd);

// // push
// even.push(24)
// console.log(even);

// // pop
// even.pop()
// console.log(even);

// // shift
// odd.shift()
// console.log(odd);

// // unshift
// odd.unshift(81)
// console.log(odd);

// // find
// let finds = array.find((x)=>x==53)
// console.log(finds);

// // indexOf
// console.log(array.indexOf(53));

// // includes
// console.log(array.includes(53));

// // slice
// console.log(array.slice(0,3));
// // slice(startingPoint,next to end point)

// // splice
// // remove and replace
// // array[2] = 37
// // console.log(array);
// array.splice(2,1,47)
// console.log(array);
// // split
// let text = "Hello-welcome"
// let newtext = text.split("-")
// console.log(newtext);

// // join
// let news = newtext.join(" ")
// console.log(news);

// // sort
// console.log(array.sort());




let num = Number(prompt("Enter the number to Proceed"))
console.log(num);
